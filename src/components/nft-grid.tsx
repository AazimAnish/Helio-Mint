'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useWallet } from '@alephium/web3-react'
import { fetchUserNFTs, listNFTForSale } from '@/services/nft.service'
import { EnergyNFTState } from 'types/nft'

export function NFTGrid() {
  const [nfts, setNfts] = useState<EnergyNFTState[]>([])
  const { account, signer } = useWallet()

  useEffect(() => {
    const loadNFTs = async () => {
      if (account?.address) {
        const userNFTs = await fetchUserNFTs(account.address)
        setNfts(userNFTs)
      }
    }

    loadNFTs()
  }, [account])

  const handleListForSale = async (tokenId: string) => {
    if (!signer) return
    
    try {
      const price = window.prompt('Enter price in ALPH:')
      if (!price) return
      
      await listNFTForSale(signer, tokenId, Number(price))
      // Refresh NFTs after listing
      if (account?.address) {
        const userNFTs = await fetchUserNFTs(account.address)
        setNfts(userNFTs)
      }
    } catch (error) {
      console.error('Error listing NFT for sale:', error)
    }
  }

  if (nfts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">You don't own any energy NFTs yet.</p>
        <Button className="mt-4">Browse Marketplace</Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {nfts.map((nft) => (
        <Card key={nft.tokenId}>
          <CardHeader>
            <CardTitle>Energy NFT #{nft.tokenId}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Energy Amount: {Number(nft.energyAmount)} kWh</p>
            <p>Current Price: {Number(nft.price)} ALPH</p>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleListForSale(nft.tokenId)}
              disabled={nft.isListed}
            >
              {nft.isListed ? 'Listed for Sale' : 'List for Sale'}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}