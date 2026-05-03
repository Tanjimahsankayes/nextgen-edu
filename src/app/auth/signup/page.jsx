"use client";

import Image from "next/image";
import loginBG from "../../../../public/images/loginBG.jpg";
import logo from "../../../../public/images/log.png";
import { useRef } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";



const RegisterPage = () => {
  const emailRef = useRef(null);

  const onSubmit = async(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());
      console.log("form submitted", userData);

      const {data, error} = await authClient.signUp.email({
        name: userData.name,
        email : userData.email,
        password : userData.password,
        callbackURL : '/'
      });

      console.log("sign up",{data,error} )

      if(error){
        toast.error("Something went wrong please try again");
      }
      if(data){
        toast.success("Register Successfull");
      }
  };
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${loginBG.src})`,
      }}
    >
      <div className="  absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
      <div className="flex flex-col-reverse  md:flex-row-reverse gap-10 bg-base-100/80 rounded-box w-10/12  p-6 shadow-xl border-base-300">
        <div className="relative z-20 flex-1 ">
          <form onSubmit={onSubmit}>
            <fieldset className="fieldset">
              <h1 className="text-center text-3xl pb-4 text-amber-300">
                Join NextGen Edu Today...
              </h1>

              <h1 className="text-center text-xl pb-4">
                Create your account to access all courses and start learning.
              </h1>

              <input
                type="name"
                className="input w-full rounded-full outline-none"
                placeholder="Full Name"
                name="name"
                required
              />
              <input
                ref={emailRef}
                type="email"
                className="input w-full rounded-full outline-none"
                placeholder="Email"
                name="email"
                required
              />

              <input
                type="password"
                className="input w-full rounded-full outline-none"
                placeholder="Password"
                name="password"
                required
              />
              {/* <input
                type="password"
                className="input w-full rounded-full outline-none"
                placeholder="Confirm Password"
                name="password"
              /> */}

              <button
                type="submit"
                className="btn btn-primary mt-4 rounded-full w-full"
              >
                Register
              </button>
              <Link href="/auth/signin" className="pt-4 text-center  ">
                Already have an account?
                <span className="text-blue-600 hover:underline">Login</span>
              </Link>
            </fieldset>
          </form>
        </div>
        <div className="relative z-20 flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center py-4">
            Start Learning with NextGen Edu
          </h2>

          <p className="text-center py-2 text-xl">
            Pick up right where you left off and keep moving forward. Your
            learning journey
            <span className="font-bold text-amber-400">continues</span> here.
          </p>

          <div className="mt-4 flex justify-center">
            <Image
              src={logo}
              alt="logo"
              width={300}
              className="rounded-2xl"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
