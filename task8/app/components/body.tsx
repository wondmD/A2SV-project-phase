import React from 'react'
import Link from "next/link"
import { getServerSession } from 'next-auth'

const Body = async () => {
    const session = await getServerSession()
  return (
    <div className='flex justify-center'>
       <main className=" flex-col items-center px-20 pt-9 pb-16 bg-white max-w-[720px] max-md:px-5 m-10 border border-solid border-[#ccc] rounded-[10px] shadow-2xl">
       {session?
       <div>
       <div className="text-center">
         <h1 className="text-3xl font-bold leading-tight text-gray-900">
           Welcome! {session.user?.email}
         </h1>
         <p className="mt-3 text-lg leading-relaxed text-gray-500">
           Want to logout ?  <Link href="api/auth/signout">logout </Link>
         </p>
       </div>
       <div className="flex gap-4 mt-10 justify-center">
         <button className="flex gap-2.5 justify-center items-center px-4 py-3 w-full text-base font-bold leading-relaxed text-indigo-600 rounded-md">
         <Link href="api/auth/signout">logout </Link>
         </button>
       </div>
       </div>: <div>
         <div className="text-center">
           <h1 className="text-3xl font-bold leading-tight text-gray-900">
             Sorry! you dont have access here
           </h1>
           
         </div>
         <div className="flex gap-4 mt-10 justify-center">
           <button className="flex gap-2.5 justify-center items-center px-4 py-3 w-full text-base font-bold leading-relaxed text-indigo-600 rounded-md">
             <Link href="/auth/signin">Login</Link>
           </button>
         </div>
         </div>}
       
       
       </main>
    </div>
  )
}

export default Body
