import { DUST_AMOUNT, ExecuteScriptResult, SignerProvider } from '@alephium/web3'
import { EnergyNFTState } from '../../types/nft'
import { EnergyNFTInstance } from '../../types/contracts'
import { loadDeployments } from '../../artifacts/ts/deployments'

export const getEnergyNFTContract = (): EnergyNFTInstance => {
  const network = process.env.NEXT_PUBLIC_NETWORK as 'mainnet' | 'testnet' | 'devnet' || 'devnet';
  const deployments = loadDeployments(network)
  return deployments.contracts as unknown as EnergyNFTInstance
}

export const mintEnergyNFT = async (
  signerProvider: SignerProvider,
  energyAmount: number,
  price: number
): Promise<ExecuteScriptResult> => {
  const contract = getEnergyNFTContract() as unknown as { methods: any };
  
  return await contract.methods.mint({
    initialFields: {
      energyAmount: BigInt(energyAmount),
      price: BigInt(price),
      isListed: false
    },
    attoAlphAmount: DUST_AMOUNT,
  }).execute(signerProvider)
}

export const listNFTForSale = async (
  signerProvider: SignerProvider,
  tokenId: string,
  price: number
): Promise<ExecuteScriptResult> => {
  const contract = getEnergyNFTContract() as unknown as { methods: { listForSale: Function } };
  
  return await contract.methods.listForSale({
    initialFields: {
      tokenId,
      price: BigInt(price)
    },
    attoAlphAmount: DUST_AMOUNT,
  }).execute(signerProvider)
}

export const fetchUserNFTs = async (address: string): Promise<EnergyNFTState[]> => {
  const contract = getEnergyNFTContract()
  // Implementation will depend on your contract's specific query methods
  // This is a placeholder that needs to be implemented based on your contract's capabilities
  return []
}