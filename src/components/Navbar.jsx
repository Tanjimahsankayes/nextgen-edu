"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();

  const {data, isPending} = useSession();

  if(isPending){
    return <div>Loading...</div>
  }

  const user = data?.user;

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "text-primary font-semibold" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className={
            pathname === "/courses" ? "text-primary font-semibold" : ""
          }
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={pathname === "/profile" ? "text-primary font-semibold" : ""}
        >
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#124170] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:bg-base-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50 transition-all duration-200"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className=" text-xl">
          <Image
            src="/images/logBG.png"
            alt="logo"
            height={100}
            width={100}
            style={{ height: "auto", width: "auto" }}
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div className="dropdown dropdown-bottom  dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer m-4 items-center"
              >
                <span>
                  <FaCircleUser size={30} />
                </span>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link href="/profile">My Profile</Link>
                </li>
                <li>
                  <button onClick={ () => signOut()}>SignOut</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end gap-3">
              <Link
                href="/auth/signin"
                className="btn btn-soft btn-primary rounded-full"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="btn btn-active  btn-accent rounded-full hidden md:inline-flex "
              >
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
