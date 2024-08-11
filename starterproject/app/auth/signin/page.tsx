"use client"
import React from 'react'
import SigninForm from './SigninFrom'
import { SessionProvider} from 'next-auth/react'

const page = () => {
  return (
    <div>
      <SessionProvider>
        <SigninForm />
      </SessionProvider>
      
    </div>
  )
}

export default page
