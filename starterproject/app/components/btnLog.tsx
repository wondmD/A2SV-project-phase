'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const BtnLog = () => {
  return (
    <div>
        <button onClick={() => signOut()}>Logout</button>
      
    </div>
  )
}

export default BtnLog
