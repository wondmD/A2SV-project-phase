import React from 'react'
import Link from "next/link"
import { getServerSession } from 'next-auth'
const Nav = async () => {
    const session = await getServerSession()
    return (
        
        <header className='bg-gray-600 text-gray-600'>
            <nav className='flex justify-between items-center w-full px-10 py-4'>
                <div className='text-white'>My Site</div>
                <div className='flex gap-10 text-white'>
                    <Link href="/">Home</Link>
                    <Link href="/admin">Admin</Link>
                    

                    {session? <Link href="api/auth/signout">logout {session.user?.email}</Link> : <Link href="/auth/signin">Login</Link>}

                    
                </div>
            </nav>
        </header>
    )
}

export default Nav
