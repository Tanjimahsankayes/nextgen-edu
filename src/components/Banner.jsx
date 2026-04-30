import Image from 'next/image';
import React from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
      <div className="grid grid-cols-2 justify-between gap-10 ">
        <div className="space-y-4 flex flex-col justify-center">
          <h2 className="text-4xl font-bold ">
            Next Generation Learning Starts Here
          </h2>
          <p className="text-white/80">
            Interactive courses, expert mentors, and real skills for the future.
          </p>

          <div className="flex gap-4">
            <button className="btn btn-active btn-accent">
              Start Free Trial
              <span>
                <CiLocationArrow1 />
              </span>
            </button>
            <button className="btn btn-outline btn-primary ">
                How To Work
              <span>
                <IoPlayOutline />
              </span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src={`https://i.pinimg.com/736x/82/48/b7/8248b74f7d5ac340fdb200ce349c20de.jpg`}
            alt="Student"
            height={400}
            width={400}
            className="rounded-full"
          ></Image>
        </div>
      </div>
    );
};

export default Banner;