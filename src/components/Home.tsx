'use client'

import React from 'react'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from './TokenDapp'
import { AlephiumConnectButton, useWallet } from '@alephium/web3-react'
import { heliomintConfig } from '@/services/utils'

export default function Home() {
  const { connectionStatus } = useWallet()

  return (
    <>
      <div className={styles.container}>
        <AlephiumConnectButton />

        {connectionStatus === 'connected' && (
          <TokenDapp config={heliomintConfig} />
        )}
      </div>
    </>
  )
}
