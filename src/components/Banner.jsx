import Image from 'next/image';
import React from 'react';
import Bannerbg from '../../public/images/Banner.png';
import { CiLocationArrow1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { Poppins } from "next/font/google";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const Banner = () => {
    return (
      <div className="relative rounded-xl overflow-hidden">
        <div
          className="relative bg-cover bg-center min-h-screen md:flex md:gap-10 items-center "
          style={{
            backgroundImage: `url(${Bannerbg.src})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="space-y-4 flex flex-col justify-center relative ">
            <h2 className={`${poppins.className} text-4xl font-bold text-center md:text-left pt-4`}>
              Next Generation Learning Starts Here
            </h2>
            <p className="text-white/80 text-center md:text-left">
              Interactive courses, expert mentors, and real skills for the
              future.
            </p>

            <div className="flex gap-4 flex-wrap text-center items-center justify-center md:justify-start my-4">
              <button className="btn btn-active btn-accent transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                Start Free Trial
                <span>
                  <CiLocationArrow1 />
                </span>
              </button>
              <button className="btn btn-outline btn-primary transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                How To Work
                <span>
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
    );
};

export default Banner;