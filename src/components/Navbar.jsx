"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { FaCircleUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { PiSignOutBold } from "react-icons/pi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

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
          className={`transition inline-flex items-center gap-2 ${
            pathname === "/"
              ? "text-[#1ACEC2] font-semibold"
              : "hover:text-[#1ACEC2]"
          }`}
        >
          <AiOutlineHome size={18} />
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className={`transition inline-flex items-center gap-2 ${
            pathname === "/courses"
              ? "text-[#1ACEC2] font-semibold"
              : "hover:text-[#1ACEC2]"
          }`}
        >
          <MdOutlineLocalLibrary size={18} />
          Courses
        </Link>
      </li>
      {user && (
        <li>
          <Link
            href="/profile"
            className={`transition inline-flex items-center gap-2 ${
              pathname === "/profile"
                ? "text-[#1ACEC2] font-semibold"
                : "hover:text-[#1ACEC2]"
            }`}
          >
            <CgProfile size={18} />
            My Profile
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800">
      <div className="navbar w-11/12 max-w-7xl mx-auto py-2">
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/images/logBG.png"
              alt="NextGen Edu Logo"
              height={100}
              width={100}
              className="rounded-xl h-9 w-auto hover:scale-105 transition"
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-slate-200 text-[15px] font-medium p-0">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-1.5 sm:gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2.5 cursor-pointer p-2 rounded-full hover:bg-slate-800 transition"
              >
                <div className="w-9 h-9 rounded-full bg-[#0D9488]/10 border border-[#0D9488]/30 flex items-center justify-center">
                  <FaUserGraduate size={20} className="text-[#1ACEC2]" />
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-semibold text-white truncate max-w-[150px]">
                    {user?.name}
                  </p>
                  <p className="text-xs text-slate-400 truncate max-w-[150px]">
                    Student
                  </p>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-4 w-60 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 shadow-xl space-y-1.5"
              >
                <li>
                  <Link
                    href="/profile"
                    className="hover:bg-slate-800 rounded-lg p-2.5 text-sm inline-flex items-center gap-2.5 w-full"
                  >
                    <CgProfile size={18} className="text-[#1ACEC2]" />
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings"
                    className="hover:bg-slate-800 rounded-lg p-2.5 text-sm inline-flex items-center gap-2.5 w-full"
                  >
                    <IoSettingsOutline size={18} className="text-[#1ACEC2]" />
                    Account Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curriculum"
                    className="hover:bg-slate-800 rounded-lg p-2.5 text-sm inline-flex items-center gap-2.5 w-full"
                  >
                    <GoBook size={18} className="text-[#1ACEC2]" />
                    My Curriculum
                  </Link>
                </li>

                <div className="border-t border-slate-800 my-2.5"></div>

                <li>
                  <button
                    onClick={() => signOut()}
                    className="text-red-400 hover:bg-red-500/10 rounded-lg p-2.5 text-sm inline-flex items-center gap-2.5 w-full font-medium"
                  >
                    <PiSignOutBold size={18} />
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/auth/signin"
                className="btn btn-sm btn-ghost rounded-full text-slate-200 text-xs sm:text-sm font-semibold"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="btn btn-sm rounded-full bg-[#0D9488] border-none text-white text-xs sm:text-sm font-semibold hover:bg-[#0b7a70] transition hidden md:inline-flex"
              >
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile Menu Dropdown */}
          <div className="dropdown dropdown-end lg:hidden ml-1">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm btn-circle text-slate-300 hover:bg-slate-800"
            >
              <HiOutlineMenuAlt3 size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 w-60 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 shadow-xl space-y-1 z-50"
            >
              {links}
              {!user && (
                <>
                  <div className="border-t border-slate-800 my-2"></div>
                  <li>
                    <Link
                      href="/auth/signup"
                      className="text-[#1ACEC2] font-semibold"
                    >
                      Sign Up Now
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
