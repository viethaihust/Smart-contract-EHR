import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-verify';
import 'hardhat-contract-sizer';
import 'hardhat-gas-reporter';
import '@typechain/hardhat';
import dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';

const config = dotenv.config();

const env = config.parsed;

const accounts: string[] = [
  env?.user1 ?? '',
  env?.user2 ?? '',
  env?.user3 ?? '',
  env?.user4 ?? '',
  env?.user5 ?? '',
];

const hardHatConfig: HardhatUserConfig = {
  defaultNetwork: 'opTestnet',
  solidity: {
    version: '0.8.21',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'london',
    },
  },
  typechain: {
    outDir: 'types/typechain',
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      opTestnet: env?.apiKeyOpTestnet ?? '',
    },
    customChains: [
      {
        network: 'opTestnet',
        chainId: 11155420,
        urls: {
          apiURL: 'https://api-sepolia-optimistic.etherscan.io/api',
          browserURL: 'https://sepolia-optimism.etherscan.io/',
        },
      },
    ],
  },
  networks: {
    opTestnet: {
      url: 'https://sepolia.optimism.io/',
      chainId: 11155420,
      accounts,
    },
  },
};

export default hardHatConfig;
