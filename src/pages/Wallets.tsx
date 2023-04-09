import React, { useEffect, useState } from 'react'
import { getUserWallets } from '@/firebase'

const Wallets = () => {
  const [wallets, setWallets] = useState([])

  useEffect(() => {}, [])

  return (
    <section className="prose">
      <h2 className="text-white">Your wallets</h2>
      <button onClick={() => getUserWallets()}>get wallets</button>
    </section>
  )
}

export default Wallets
