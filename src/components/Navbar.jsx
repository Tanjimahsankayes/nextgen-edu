"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  const { data, isPending } = useSession();

  if (isPending) return null;

  const user = data?.user;

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`transition ${
            pathname === "/"
              ? "text-amber-300 font-semibold"
              : "hover:text-amber-300"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className={`transition ${
            pathname === "/courses"
              ? "text-amber-300 font-semibold"
              : "hover:text-amber-300"
          }`}
        >
          Courses
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={`transition ${
            pathname === "/profile"
              ? "text-amber-300 font-semibold"
              : "hover:text-amber-300"
          }`}
        >
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-[#124170]/80 border-b border-white/10">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              className="btn btn-ghost lg:hidden hover:bg-white/10"
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 rounded-box bg-[#1A1833] text-white shadow-lg z-50"
            >
              {links}
            </ul>
          </div>

          <Link href="/">
            <Image
              src="/images/logBG.png"
              alt="logo"
              height={90}
              width={90}
              className="rounded-xl h-10 w-auto hover:scale-105 transition"
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-white text-[15px]">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="cursor-pointer p-2 rounded-full hover:bg-white/10 transition"
              >
                <FaCircleUser size={28} className="text-white" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 w-56 p-3 rounded-2xl bg-[#1A1833] text-white shadow-xl space-y-1"
              >
                <li className="font-semibold text-white/80 px-2 py-1">
                  {user?.name}
                </li>

                <li>
                  <Link
                    href="/profile"
                    className="hover:bg-white/10 rounded-lg"
                  >
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link
                    href="/profile"
                    className="hover:bg-white/10 rounded-lg"
                  >
                    Settings
                  </Link>
                </li>

                <li>
                  <Link
                    href="/curriculum"
                    className="hover:bg-white/10 rounded-lg"
                  >
                    Curriculum
                  </Link>
                </li>

                <div className="border-t border-white/10 my-2"></div>

                <li>
                  <button
                    onClick={() => signOut()}
                    className="text-red-400 hover:bg-red-500/20 rounded-lg"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                href="/auth/signin"
                className="btn btn-sm rounded-full bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition"
              >
                Login
              </Link>

              <Link
                href="/auth/signup"
                className="btn btn-sm rounded-full bg-amber-400 text-black hover:bg-amber-300 transition hidden md:inline-flex"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
