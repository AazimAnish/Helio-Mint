import { Configuration } from '@alephium/cli'
import { Number256, web3 } from '@alephium/web3'

// Settings are usually for configuring
export type AppSettings = {
  issueTokenAmount: Number256
  initialEnergy: Number256
  initialPrice: Number256
}

const defaultSettings: AppSettings = {
  issueTokenAmount: 1_000_000_000_000n,
  initialEnergy: 100n,
  initialPrice: 1_000_000_000n
}

const configuration: Configuration<AppSettings> = {
  networks: {
    devnet: {
      nodeUrl: 'http://127.0.0.1:22973',
      privateKeys: [
        'a642942e67258589cd2b1822c631506632db5a12aabcf413604e785300d762a5', // group 0
      ],
      settings: defaultSettings
    },

    testnet: {
      nodeUrl: process.env.NODE_URL as string ?? 'https://node.testnet.alephium.org',
      privateKeys: process.env.PRIVATE_KEYS === undefined ? [] : process.env.PRIVATE_KEYS.split(','),
      settings: defaultSettings
    },

    mainnet: {
      nodeUrl: process.env.NODE_URL as string ?? 'https://node.mainnet.alephium.org',
      privateKeys: process.env.PRIVATE_KEYS === undefined ? [] : process.env.PRIVATE_KEYS.split(','),
      settings: defaultSettings
    }
  }
}

export default configuration
