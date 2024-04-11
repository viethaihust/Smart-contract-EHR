import { deployContractAndVerify } from './src/deploy';

async function main() {
  const contractAddress = await deployContractAndVerify({
    contractIdentifier: 'contracts/Example.sol:Example',
    constructorArguments: [],
    signerAddress: '0x6df6547A4Ca536618a68D746F520BD8aa421926e',
    onData(group, data) {
      process.stdout.write(`${group}: [${data}]\n`);
    },
  });

  process.stdout.write(`address: [${contractAddress}]\n`);
  process.exit(0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
