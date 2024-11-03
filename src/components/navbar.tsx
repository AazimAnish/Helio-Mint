'use client'

import { AlephiumConnectButton } from '@alephium/web3-react'
import Link from 'next/link'
import { Button } from './ui/button'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          HelioMint
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/marketplace">
            <Button variant="ghost">Marketplace</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <AlephiumConnectButton />
        </div>
      </div>
    </nav>
  )
}