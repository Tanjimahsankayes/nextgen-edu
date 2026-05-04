"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";
import loginBG from "../../../../public/images/loginBG.jpg";
import logo from "../../../../public/images/log.png";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const emailRef = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log("form submitted", userData);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log("sign in", { data, error });

    if (error) {
      toast.error("Something went wrong please try again");
    }
    if (data) {
      toast.success("SignIn Successfully");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      console.log("Attempting Google sign-in...");
      const { data, error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      console.log("Google sign-in response:", { data, error });

      if (error) {
        console.error("Google sign-in error:", error);
        toast.error("Google sign-in failed. Please try again.");
      } else {
        toast.success("Signed in with Google successfully!");
      }
    } catch (error) {
      console.error("Google sign-in exception:", error);
      toast.error("An error occurred during Google sign-in.");
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
              <h1 className="text-center text-xl text-amber-300 pb-4">
                Continue Learning with NextGen Edu
              </h1>

              <input
                ref={emailRef}
                type="email"
                className="input w-full rounded-full outline-none"
                placeholder="Email"
                name="email"
              />

              <input
                type="password"
                className="input w-full rounded-full outline-none"
                placeholder="Password"
                name="password"
              />

              <p className="text-right text-blue-700 hover:underline">
                Forget Password?
              </p>

              <button className="btn btn-primary mt-4 rounded-full w-full">
                Login
              </button>

              <div className="flex items-center w-full pt-8">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-4 text-gray-500 text-sm">
                  or continue with
                </span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <div className="flex gap-4 justify-center py-4">
                <FaGoogle
                  onClick={handleGoogleSignIn}
                  size={30}
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                />
                <FaFacebook
                  size={30}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                />
                <FaLinkedin
                  size={30}
                  className="cursor-pointer hover:text-blue-700 transition-colors"
                />
                <FaDiscord
                  size={30}
                  className="cursor-pointer hover:text-purple-500 transition-colors"
                />
              </div>

              <Link href="/auth/signup" className="pt-10 text-center  ">
                Not an account?
                <span className="text-blue-600 hover:underline">
                  Register Now
                </span>
              </Link>
            </fieldset>
          </form>
        </div>
        <div className="relative z-20 flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center py-4">Welcome Back!</h2>

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

export default LoginPage;
