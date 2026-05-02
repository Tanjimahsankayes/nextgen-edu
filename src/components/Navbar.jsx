"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        {" "}
        <Link
          href="/"
          className={pathname === "/" ? "text-primary font-semibold" : ""}
        >
          Home
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link
          href="/courses"
          className={
            pathname === "/courses" ? "text-primary font-semibold" : ""
          }
        >
          Courses
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link
          href="/my"
          className={pathname === "/my" ? "text-primary font-semibold" : ""}
        >
          My Profile
        </Link>{" "}
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
        <Link href="/" className="btn btn-ghost text-xl">
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
        <Link href="/login" className="btn btn-soft btn-primary rounded-full">
          Login
        </Link>
        <Link href="/login" className="btn btn-active  btn-accent rounded-full">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
