'use client'

import { useWallet } from '@alephium/web3-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NFTGrid } from '@/components/nft-grid'
import { ImpactMetrics } from '@/components/impact-metrics'

export default function Dashboard() {
  const { connectionStatus } = useWallet()

  if (connectionStatus !== 'connected') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-lg">Please connect your wallet to view your dashboard.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      
      <Tabs defaultValue="nfts">
        <TabsList>
          <TabsTrigger value="nfts">My NFTs</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>
        
        <TabsContent value="nfts">
          <NFTGrid />
        </TabsContent>
        
        <TabsContent value="impact">
          <ImpactMetrics />
        </TabsContent>
      </Tabs>
    </div>
  )
}