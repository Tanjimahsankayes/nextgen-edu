"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";
import loginBG from '../../../public/images/loginBG.jpg';
import logo from '../../../public/images/log.png';
import Image from "next/image";

const LoginPage = () => {

  const emailRef = useRef(null);

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
          <fieldset className="fieldset">
            <h1 className="text-center pb-4">
              {" "}
              Provide your information to login!
            </h1>

            <input
              ref={emailRef}
              type="email"
              className="input w-full rounded-full outline-none"
              placeholder="Email"
            />

            <input
              type="password"
              className="input w-full rounded-full outline-none"
              placeholder="Password"
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
              <FaGoogle size={30} />
              <FaFacebook size={30} />
              <FaLinkedin size={30} />
              <FaDiscord size={30} />
            </div>

            <Link href="/" className="pt-10 text-center  ">
              Not an account?{" "}
              <span className="text-blue-600 hover:underline">
                Register Now
              </span>
            </Link>
          </fieldset>
        </div>
        <div className="relative z-20 flex-1">
          <h2 className="text-4xl font-bold text-center py-4">Welcome Back!</h2>

          <p className="text-center py-2 text-xl">
            Pick up right where you left off and keep moving forward. Your
            learning journey
            <span className="font-bold text-amber-400">continues</span> here.
          </p>

          <div className="mt-4 flex justify-center" >
            <Image src={logo} alt="logo" width={300} className="rounded-2xl" ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
