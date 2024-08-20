'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../components/Button';
import Divider from '../components/Divider';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const SignUpForm = ({ providers }: any) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, setError } = useForm<FormValues>();
  const [generalError, setGeneralError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { name, email, password, confirmPassword, role } = data;

    setGeneralError(null); // Clear previous general errors

    try {
      const res = await fetch("https://akil-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword, role }),
      });

      if (res.ok) {
        router.push(`/auth/verifyemail?email=${encodeURIComponent(email)}`);
      } else {
        const data = await res.json();
        setGeneralError(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setGeneralError("An error occurred. Please try again.");
    }
  };

  const handleSignIn = (id: string) => {
    signIn(id);
  };

  return (
    <div className="flex justify-center m-5">
      <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-16 bg-white max-w-[720px] max-md:px-5 m-10 border border-solid border-[#ccc] rounded-[10px] shadow-2xl">
        {generalError && (
          <div role="alert" className="mx-auto max-w-lg rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8">
            <div className="flex items-center gap-4">
              <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd"></path>
                </svg>
              </span>
              <p className="font-medium sm:text-lg text-emerald-600">New notification!</p>
            </div>
            <p className="mt-4 text-gray-600">{generalError}</p>
          </div>
        )}
        <div className="flex flex-col max-w-full bg-white w-[408px]">
          <header className="flex flex-col w-full text-center">
            <h1 className="text-3xl font-black leading-tight text-slate-800">Sign Up Today!</h1>

            <div>
              <button
                onClick={() => handleSignIn("google")}
                className="flex gap-2.5 justify-center items-center px-4 py-3 mt-6 w-full text-base font-bold leading-relaxed text-indigo-600 rounded-md"
              >
                <img src="/google.png" alt="Google Sign In" />
                Sign in with Google
              </button>
            </div>
          </header>
          <Divider text="Or Sign Up with Email" />
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-full">
            <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
              <label className="font-semibold text-slate-600" htmlFor="name">Full name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required." })}
                id="name"
                placeholder="Enter your name here..."
                className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid border-gray-500"
              />
              {errors.name && <p className="text-red-600">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
              <label className="font-semibold text-slate-600" htmlFor="email">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address."
                  }
                })}
                id="email"
                placeholder="Enter your email here..."
                className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid border-gray-500"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
              <label className="font-semibold text-slate-600" htmlFor="role">Role</label>
              <input
                type="text"
                {...register("role", { required: "Role is required." })}
                id="role"
                placeholder="Enter your role here..."
                className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid border-gray-500"
              />
              {errors.role && <p className="text-red-600">{errors.role.message}</p>}
            </div>
            <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
              <label className="font-semibold text-slate-600" htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required.",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                  }
                })}
                id="password"
                placeholder="Enter your password..."
                className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid border-gray-500"
              />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>
            <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
              <label className="font-semibold text-slate-600" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required.",
                  validate: value => value === watch("password") || "Passwords do not match."
                })}
                id="confirmPassword"
                placeholder="Enter your password again..."
                className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid border-gray-500"
              />
              {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
            </div>
            <Button
              type="submit"
              className="gap-2.5 self-stretch px-6 py-3 mt-6 w-full font-bold btn btn-primary bg-[#1610aE] text-center text-white whitespace-nowrap bg-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#4640DE)] rounded-[80px] max-md:px-5"
              disabled={isSubmitting}
            >
              Continue
            </Button>
          </form>
          <footer className="mt-6">
            <p className="flex gap-2 items-start self-start text-base">
              <span className="leading-relaxed text-gray-800">Already have an account?</span>
              <a href="/auth/signin" className="font-semibold text-center text-indigo-600">Login</a>
            </p>
            <p className="mt-6 text-sm leading-6 text-indigo-600">
              By clicking Continue, you acknowledge that you have read and accepted our{" "}
              <a href="#" className="text-indigo-600">Terms of Service</a> and{" "}
              <a href="#" className="text-indigo-600">Privacy Policy</a>.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default SignUpForm;
