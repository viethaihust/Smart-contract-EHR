import { deployContractAndVerify } from './src/deploy';

async function main() {
  const contractAddress = await deployContractAndVerify({
    contractIdentifier: 'contracts/Example.sol:Example',
    constructorArguments: [],
    signerAddress: '0xD4CD8155F5d38088d226DA93838722A10fB23009',
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
