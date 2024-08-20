/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';
import Loader from '../components/loading'

interface EmailVerificationProps {
    onVerificationComplete: () => {
        
    };
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ onVerificationComplete }) => {
    const [verificationCode, setVerificationCode] = useState<string[]>(['', '', '', '']);
    const [resendTimer, setResendTimer] = useState<number>(30);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email') || '';

    useEffect(() => {
        const timer = setInterval(() => {
            setResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleCodeChange = (index: number, value: string) => {
        const newCode = [...verificationCode];
        newCode[index] = value;
        //move cuouser to next input feild
        
        setVerificationCode(newCode);
    };

    const handleContinue = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        if (verificationCode.every((digit) => digit !== '')) {
            const otp = verificationCode.join('');
            setLoading(true);

            try {
                const response = await fetch('https://akil-backend.onrender.com/verify-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, OTP: otp }), // Replace 'user@example.com' with the actual email
                });

                if (response.ok) {
                    router.push("/auth/signin");
                } else {
                    setError("Invalid OTP or verification failed.");
                }
            } catch (err) {
                console.error("Verification error:", err);
                setError("An error occurred. Please try again.");
            } finally {
                setLoading(false);
            }
        } else {
            setError("Please enter all digits of the verification code.");
        }
        setLoading(false);
    };

    return (
        <div className='flex justify-center m-10'>
        <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-48 text-center bg-white max-w-[720px] max-md:px-5 max-md:py-24 border border-solil rounded-[10px]">

        {loading ? (
                   <Loader />
                ) : (
            <section className="flex flex-col max-w-full w-[409px]">
                <h1 className="w-full text-3xl font-black leading-tight text-slate-800">
                    Verify Email
                </h1>
                <p className="mt-11 text-sm leading-6 text-justify text-slate-500 max-md:mt-10">
                    We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.
                </p>
                <form onSubmit={handleContinue} className="flex flex-col py-10 mt-11 w-full max-w-[409px] max-md:mt-10">
                    <div className="flex flex-col">
                        <div className="flex gap-9 items-start text-4xl font-medium leading-relaxed whitespace-nowrap text-zinc-200">
                            {verificationCode.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    className="overflow-hidden text-[25px] text-black  px-8 py-3.5 rounded-lg bg-slate-50 w-[85px] max-md:px-5 border border-solid border-indigo"
                                    aria-label={`Verification code digit ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="self-start mt-5 text-sm leading-6 text-indigo-600">
                        You can request to{" "}
                        <button
                            type="button"
                            className="font-semibold text-indigo-900"
                            disabled={resendTimer > 0}
                            onClick={() => setResendTimer(60)}
                        >
                            Resend code
                        </button>{" "}
                        in <br />
                        <span className="font-semibold text-indigo-600">
                            {Math.floor(resendTimer / 60)}:{(resendTimer % 60).toString().padStart(2, '0')}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="gap-2.5 self-stretch px-6 py-3 mt-11 w-full text-base font-bold leading-relaxed text-white whitespace-nowrap bg-indigo-900 bg-opacity-30 rounded-[80px] max-md:px-5 max-md:mt-10"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <div
                                    className="w-4 h-4 border-2 border-dashed rounded-full animate-spin border-yellow-500 mr-2"
                                ></div>
                                Loading...
                            </div>
                        ) : (
                            "Continue"
                        )}
                    </button>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>
            </section> )}
        </main>
        </div>
    );
};

export default EmailVerification;
