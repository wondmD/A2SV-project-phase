/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Button from "../../components/Button";
import { useRef, useState } from "react";
import Loading from "../components/loading";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { watch } from "fs/promises";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type SigninData = {
  email: string;
  password: string;
};

const SigninFrom = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<SigninData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, control, handleSubmit, formState, watch } = form;

  const { errors } = formState;
  // const [loading, setLoading] = useState(false)

  const watchName = watch("email");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: SigninData) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
        redirect: false,
      });

      if (res && res.ok && res.url) {
        router.push("/jobs");
      } else if (res && res.error) {
        setErrorMessage("Invalid credentials");
      } else {
        setErrorMessage("Something went wrong, please try again.");
      }
    } catch (err) {
      setErrorMessage("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center m-5">
      <main className="flex overflow-hidden flex-col items-center px-20 pt-9 pb-16 bg-white max-w-[720px] max-md:px-5 m-10 border border-solid border-[#ccc] rounded-[10px] shadow-2xl">
  
         
          <div className="flex flex-col max-w-full bg-white w-[408px]">
            <header className="flex flex-col w-full text-center">
              <h1 className="text-3xl font-black leading-tight text-slate-800">
                Welcome Back!
              </h1>
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>
              {errorMessage && <p className="text-red-800">{errorMessage}</p>}

              <div
                className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="font-semibold text-slate-600" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Invalid email address",
                    },
                    required: {
                      value: true,
                      message: "email is required",
                    },
                  })}
                  id="email"
                  placeholder="Enter you email here..."
                  className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid boreder-gray-500"
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>

              {/* <InputField label="Password" type="password" placeholder="Enter password"  onChange={(e) => (password.current = e.target.value)}/> */}
              <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
                <label
                  className="font-semibold text-slate-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },

                    // pattern: {
                    //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    //     message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                    // },

                    required: {
                      value: true,
                      message: "password is required",
                    },
                  })}
                  id="pass"
                  placeholder="Enter you password here..."
                  className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid boreder-gray-500"
                />
                <p className="text-red-500">{errors.password?.message}</p>{" "}
                {/* {watchName && errors.name?.message} */}{" "}
                {/* {watchName && 'Name is required'} */}
              </div>

              <Button
                onSubmit={handleSubmit(onSubmit)}
                type="submit"
                className="gap-2.5 self-stretch px-6 py-3 mt-6 w-full font-bold btn btn-primary bg-[#1610aE] text-center text-white whitespace-nowrap bg-[linear-gradient(0deg,rgba(0,0,0,0.20_0%,rgba(0,0,0,0.20)_100%),linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#4640DE)] rounded-[80px] max-md:px-5"
              >
                {loading ? (
                    <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin [animation-duration:3s]  border-white mx-auto"></div>
                ) : (
                    "Login"
  
                )}
              </Button>
            </form>
            <footer className="mt-6">
              <p className="flex gap-2 items-start self-start text-base">
                <span className="leading-relaxed text-gray-800">
                  Don't have an account?
                </span>
                <a
                  href="/auth/signup"
                  className="font-semibold text-center text-indigo-600"
                >
                  Signup
                </a>
              </p>
            </footer>
          </div>

      </main>
    </div>
  );
};

export default SigninFrom;
