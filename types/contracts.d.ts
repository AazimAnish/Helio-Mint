import { Contract } from '@alephium/web3'
import { EnergyNFTTypes } from '../../artifacts/ts/EnergyNFT'

export interface TokenFaucetInstance extends Contract {
  // Add TokenFaucet specific methods here
}

export interface EnergyNFTInstance extends Contract {
  contractId: string
  address: string
  groupIndex: number
}

export interface DeployedContracts {
  TokenFaucet: TokenFaucetInstance
  EnergyNFT: EnergyNFTInstance
}