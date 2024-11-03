import { NetworkId } from "@alephium/web3"
import { getEnergyNFTContract } from './nft.service'

export interface HelioMintConfig {
  network: NetworkId
  groupIndex: number
  nftContractAddress: string
}

function getNetwork(): NetworkId {
  return (process.env.NEXT_PUBLIC_NETWORK ?? 'devnet') as NetworkId
}

function getHelioMintConfig(): HelioMintConfig {
  const network = getNetwork()
  const energyNFT = getEnergyNFTContract()
  return {
    network,
    groupIndex: energyNFT.groupIndex,
    nftContractAddress: energyNFT.address
  }
}

export const heliomintConfig = getHelioMintConfig()
