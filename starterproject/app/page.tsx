/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

'use client'
import React, { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
 
const page = () => {
  const {data: session}= useSession()
  console.log({session})


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [jobs, setJobs] = useState()
  const book = async () => {
    try {
      const response = await fetch('https://akil-backend.onrender.com/bookmarks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session?.user.data.accessToken}`,
          'Content-Type': 'application/json', 
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        
      }
      console.log(response)
  
      const data = await response.json();
      setJobs(data.data); 
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    }
  };
  
 

  return (
    <div className="overflow-x-hidden bg-gray-50 h-[100vh]">
    <header className="relative py-4 md:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex-shrink-0">
                    <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                        <img className="w-auto h-8" src="/images/akil.png" alt="" />
                    </a>
                </div>

                

                <div className="lg:flex lg:items-center lg:justify-center lg:space-x-10">
                  
                    {(!session?.user.data.accessToken) ? (
                      <a
                      href="/auth/signin"
                      title=""
                      className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                      role="button"
                  >
                      Login
                  </a>
                    ):(
                      <button
                        onClick={() => signOut()}
                        className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white"
                        
                    >
                        Logout
                    </button>
                    )}
                </div>
            </div>
        </div>
    </header>

    <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
                {/* <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">Made by Developers, for Developers</p> */}
                <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Find your opportunities here at akill</h1>
                <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>

                <div className="relative inline-flex mt-10 group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                    <a href="/jobs" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                       Go to opportunities
                    </a>
                </div>
            </div>
        </div>

    
    </section>
</div>

  )
}

export default page
