"use client"
import React from 'react';
import InputField from '../../components/Inputfeild';
import Button from '../../components/Button';
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRef, useState } from 'react';
import Divider from '@/app/components/Divider';
import { useRouter } from "next/navigation";

// import { signIn } from "next-auth/react";




const SignUpForm = ({ providers }: any) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await signIn("credentials", {
               
                email,
                password,
                callbackUrl : '/'
            });

            if (res && res.ok) {
                setError("logged in.");
                router.push('/');
            } else {
                setError("Invalid email or password.");
            }

        } catch (err) {
            console.error("Error during login:", err);
            setError("An error occurred. Please try again.");
        }
        setLoading(false);
    };



    return (
        <div className='flex justify-center m-5' >
            <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-16 bg-white max-w-[720px] max-md:px-5 m-10 border border-solid border-[#ccc] rounded-[10px] shadow-2xl">

                {loading ? (
                    <div className="text-center">
                        <div
                            className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#1610aE] mx-auto"
                        ></div>
                        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                        
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col max-w-full bg-white w-[408px]">
                        <header className="flex flex-col w-full text-center">
                            <h1 className="text-3xl font-black leading-tight text-slate-800">
                                Welcome Back!
                            </h1>

                        </header>
                        {/* <Divider text="Or Sign Up with Email" /> */}
                        <form onSubmit={handleSubmit}>
                            {/* <InputField label="Email Address" type="email" placeholder="Enter email address"   onChange={(e) => (email.current = e.target.value)} /> */}


                            <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
                                <label className="font-semibold text-slate-600" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    placeholder="Enter you email here..."
                                    className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid boreder-gray-500"
                                />
                            </div>


                            {/* <InputField label="Password" type="password" placeholder="Enter password"  onChange={(e) => (password.current = e.target.value)}/> */}
                            <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
                                <label className="font-semibold text-slate-600" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="pass"
                                    placeholder="Enter you email here..."
                                    className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid boreder-gray-500"
                                />
                            </div>

                            <Button
                                onSubmit={handleSubmit}
                                type="submit"
                                className="gap-2.5 self-stretch px-6 py-3 mt-6 w-full font-bold btn btn-primary bg-[#1610aE] text-center text-white whitespace-nowrap bg-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#4640DE)] rounded-[80px] max-md:px-5"
                            >
                                Login
                            </Button>

                        </form>
                        <footer className="mt-6">
                            <p className="flex gap-2 items-start self-start text-base">
                                <span className="leading-relaxed text-gray-800">
                                    Don't have an account?
                                </span>
                                <a href="/auth/signup" className="font-semibold text-center text-indigo-600">Signup</a>
                            </p>

                        </footer>
                     
                    </div>)}
            </main>
        </div>
    );
};

export default SignUpForm;