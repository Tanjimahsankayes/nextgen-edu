"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#124170] text-white">
      <div className="w-11/12 mx-auto py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={120}
            width={120}
            className="h-10 w-auto"
            priority
          />
          <p className="text-white/70 text-sm leading-relaxed">
            <span className="font-semibold text-white">NextGen Edu</span> is
            empowering learners with modern skills to thrive in the digital
            world.
          </p>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4 text-amber-300">
            Quick Links
          </h6>
          <ul className="space-y-2 text-white/70">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-white transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-white transition">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-4 text-amber-300">
            Resources
          </h6>
          <ul className="space-y-2 text-white/70">
            <li className="hover:text-white transition cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white transition cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4 text-amber-300">Contact</h6>

          <div className="space-y-2 text-white/70 text-sm">
            <p>Email: support@nextgenedu.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="flex gap-4 mt-4">
            <a className="hover:scale-110 transition">
              <FaFacebook size={26} />
            </a>
            <a className="hover:scale-110 transition">
              <FaYoutube size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/tanjimahsankayes12/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} NextGen Edu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
