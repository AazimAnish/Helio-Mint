import '@/styles/globals.css'
import { AlephiumWalletProvider } from '@alephium/web3-react'
import { Navbar } from '@/components/navbar'
import { heliomintConfig } from '@/services/utils'

export const metadata = {
  title: "HelioMint - Solar Energy NFT Platform",
  description: "Democratizing access to renewable energy investment through NFTs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <AlephiumWalletProvider 
            network={heliomintConfig.network} 
            addressGroup={heliomintConfig.groupIndex}
          >
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </AlephiumWalletProvider>
      </body>
    </html>
  )
}
