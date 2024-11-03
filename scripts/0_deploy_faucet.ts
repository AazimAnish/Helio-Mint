import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { AppSettings } from '../alephium.config'
import { EnergyNFT, CreateEnergyNFT } from '../artifacts/ts'
import { randomBytes } from 'crypto'
import { binToHex } from '@alephium/web3'

const deployEnergyNFT: DeployFunction<AppSettings> = async (
  deployer: Deployer,
  network: Network<AppSettings>
): Promise<void> => {
  // Get settings from network configuration
  const initialEnergy = BigInt(network.settings.initialEnergy.toString())
  const initialPrice = BigInt(network.settings.initialPrice.toString())

  // Generate a random NFT ID
  const nftId = binToHex(randomBytes(32))

  // Get the contract owner's address
  const contractOwner = await deployer.account.address

  // Deploy the EnergyNFT contract
  const result = await deployer.deployContract(EnergyNFT, {
    initialFields: {
      initialOwner: contractOwner,
      initialEnergyAmount: initialEnergy,
      tokenId: nftId,
      owner: contractOwner,
      energyAmount: initialEnergy,
      price: initialPrice,
      isListed: false
    }
  })

  // Log the deployment results
  console.log('EnergyNFT contract deployed:')
  console.log('Contract ID:', result.contractInstance.contractId)
  console.log('Contract Address:', result.contractInstance.address)
  console.log('NFT ID:', nftId)
  console.log('Owner Address:', contractOwner)

  // Execute the CreateEnergyNFT transaction script
  const txResult = await deployer.runScript(CreateEnergyNFT, {
    initialFields: {
      contractOwner: contractOwner,
      initialEnergy: initialEnergy,
      initialPrice: initialPrice,
      nftId: nftId
    }
  })

  console.log('CreateEnergyNFT transaction executed:')
  console.log('Transaction ID:', txResult.txId)
}

export default deployEnergyNFT