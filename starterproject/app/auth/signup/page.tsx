"use client"
import React from 'react'
import SignUpForm from './SignupForm'
import { SessionProvider} from 'next-auth/react'

const page = () => {
  return (
    <div>
      <SessionProvider>
        <SignUpForm />
      </SessionProvider>
      
    </div>
  )
}

export default page
