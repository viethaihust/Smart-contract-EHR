import '@nomicfoundation/hardhat-ethers';
import BigNumber from 'bignumber.js';
import { BaseContract, assert, getCreateAddress } from 'ethers';
import hre, { ethers } from 'hardhat';
import { Libraries } from 'hardhat/types';

BigNumber.set({ EXPONENTIAL_AT: 50 });

export const deployContractAndVerify = async ({
  contractIdentifier,
  constructorArguments,
  libraries,
  signerAddress,
  onData,
}: {
  contractIdentifier: string;
  constructorArguments: any[];
  libraries?: Libraries;
  signerAddress: string;
  onData?: (group: string, data: string) => void;
}) => {
  const accounts = await ethers.getSigners();
  const signer = accounts.find(
    account => account.address.toLowerCase() === signerAddress.toLowerCase(),
  );

  assert(signer !== undefined, 'No signer', 'UNKNOWN_ERROR');

  //! Contract
  const contractFactoryRaw = await ethers //
    .getContractFactory(contractIdentifier, { libraries });
  const contractFactory = contractFactoryRaw.connect(signer);

  //! Start deploy
  const tx = await contractFactory //
    .getDeployTransaction(...constructorArguments);

  //! Estimate fee
  const deploymentFee = await ethers.provider.estimateGas(tx);
  const deploymentFeeNumber = new BigNumber(deploymentFee.toString()) //
    .shiftedBy(-18);
  onData?.('fee', deploymentFeeNumber.toString());

  assert(
    contractFactory.runner &&
      typeof contractFactory.runner.sendTransaction === 'function',
    'factory runner does not support sending transactions',
    'UNSUPPORTED_OPERATION',
    { operation: 'sendTransaction' },
  );

  //! Send transaction
  const sentTx = await contractFactory.runner?.sendTransaction?.(tx);
  onData?.('tx', sentTx.hash);

  const deployedContractAddress = getCreateAddress(sentTx);
  onData?.('address', deployedContractAddress);

  const instance = new (<any>BaseContract)(
    deployedContractAddress,
    contractFactory.interface,
    contractFactory.runner,
    sentTx,
  );
  await instance.waitForDeployment();

  //! Contract address
  const contractAddress =
    typeof instance.target === 'string'
      ? instance.target
      : await instance.target.getAddress();

  //! Verify
  await hre.run('verify:verify', {
    address: contractAddress,
    constructorArguments,
    contract: contractIdentifier,
    libraries,
  });

  return contractAddress;
};
