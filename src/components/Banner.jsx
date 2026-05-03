"use client";

import Image from "next/image";
import React, { use, useEffect, useRef } from "react";
import Bannerbg from "../../public/images/Banner.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { useSession } from "@/lib/auth-client";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const Banner = () => {

  const {data} = useSession();
  const user = data?.user;
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="relative bg-cover bg-center min-h-screen md:flex justify-between items-center "
        style={{
          backgroundImage: `url(${Bannerbg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="md:flex justify-between gap-10 w-11/12 mx-auto">
          <div className="space-y-4 flex justify-center flex-col relative ">
            <div className="text-center md:text-left pt-4">
              {user ? (
                <>
                  <h3 className="text-3xl font-bold uppercase">
                    Welcome
                    <span className="text-amber-300"> {user.name}! </span>
                  </h3>
                </>
              ) : (
                ""
              )}
            </div>

            <h2
              className={`${poppins.className} text-4xl font-bold text-center md:text-left pt-4`}
            >
              Next Generation Learning{" "}
              <span className="text-amber-300">Starts Here</span>
            </h2>
            <p className="text-white/80 text-center md:text-left">
              Interactive courses, expert mentors, and real skills for the
              future.
            </p>

            <div className="flex gap-4 flex-wrap text-center items-center justify-center md:justify-start my-4">
              <button className="btn btn-active btn-accent rounded-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                Start Free Trial
                <span className="ml-2">
                  <CiLocationArrow1 />
                </span>
              </button>
              <button className="btn btn-outline btn-primary rounded-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                How To Work
                <span className="ml-2">
                  <IoPlayOutline />
                </span>
              </button>
            </div>
          </div>
          <div className="relative justify-center flex ">
            <Image
              src={`https://i.pinimg.com/736x/82/48/b7/8248b74f7d5ac340fdb200ce349c20de.jpg`}
              alt="Student"
              height={400}
              width={400}
              className="rounded-full"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
