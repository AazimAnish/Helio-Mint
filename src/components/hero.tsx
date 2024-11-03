'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center text-center space-y-8 py-20">
      <h1 className="text-6xl font-bold">
        Invest in Solar Energy Through NFTs
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl">
        HelioMint democratizes access to renewable energy investment by allowing anyone to own
        fractionalized solar energy NFTs.
      </p>
      <div className="flex gap-4">
        <Button 
          size="lg" 
          onClick={() => router.push('/marketplace')}
        >
          Explore Marketplace
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={() => router.push('/mint')}
        >
          Mint NFTs
        </Button>
      </div>
    </div>
  )
}