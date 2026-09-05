"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      {/* Upper Footer / Newsletter Section */}
      <div className="border-b border-slate-800/80">
        <div className="w-11/12 max-w-7xl mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-slate-400">
              Get the latest course updates, career tips, and learning
              resources.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto items-center max-w-md bg-slate-800/80 p-1.5 rounded-full border border-slate-700/60 focus-within:border-[#0D9488] transition"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 text-sm text-white focus:outline-none w-full placeholder:text-slate-500"
              required
            />
            <button
              type="submit"
              className="bg-[#0D9488] hover:bg-[#0b7a70] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-11/12 max-w-7xl mx-auto py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="NextGen Edu Logo"
              height={120}
              width={120}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="font-semibold text-white">NextGen Edu</span> is
            empowering learners with market-relevant technical skills to thrive
            in the modern digital economy.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0D9488] hover:text-white transition-all text-slate-300"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0D9488] hover:text-white transition-all text-slate-300"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/tanjimahsankayes12/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0D9488] hover:text-white transition-all text-slate-300"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-bold mb-4 text-white uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-[#0D9488] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-[#0D9488] transition-colors"
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#0D9488] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="hover:text-[#0D9488] transition-colors"
              >
                Student Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-base font-bold mb-4 text-white uppercase tracking-wider">
            Resources
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <Link
                href="/help"
                className="hover:text-[#0D9488] transition-colors"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-[#0D9488] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-[#0D9488] transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-[#0D9488] transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base font-bold mb-4 text-white uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#0D9488] shrink-0" />
              <a
                href="mailto:support@nextgenedu.com"
                className="hover:text-white transition-colors"
              >
                support@nextgenedu.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#0D9488] shrink-0" />
              <a
                href="tel:+8801234567890"
                className="hover:text-white transition-colors"
              >
                +880 1234-567890
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#0D9488] shrink-0 mt-1" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800/80 py-6 text-center text-slate-500 text-sm">
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NextGen Edu. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link
              href="/privacy"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="hover:text-slate-400 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
