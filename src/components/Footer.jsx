import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="bg-[#124170]">
        <footer className="footer sm:footer-horizontal text-base-content p-10 place-items-center grid grid-cols-2 justify-between ">
          <aside>
            <Image
              src="/images/logo.png"
              alt="Logo"
              height={120}
              width={120}
              className="h-auto w-auto rounded-xl"
              priority
            ></Image>
            <p>
              NextGen Education
              <br />
              NextGen Edu Empowering learners <br /> with modern skills for the
              future.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Blog</a>
          </nav>
          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Privacy Policy </a>
            <a className="link link-hover">Terms & Conditions </a>
            <a className="link link-hover">FAQ </a>
          </nav>
          <div>
            <h6 className="footer-title">Social & Contact</h6>

            <div className="space-y-2 ">
              <p>Email: support@nextgenedu.com </p>
              <p>Phone: +880 1234-567890</p>
              <p>Location: Dhaka, Bangladesh</p>
            </div>

            <div className="flex gap-6">
              <a className="link link-hover ">
                <span>
                  <FaFacebook size={30} />
                </span>
              </a>
              <a className="link link-hover">
                <span>
                  <FaYoutube size={30} />
                </span>
              </a>
              <a className="link link-hover">
                <span>
                  <FaLinkedin size={30} />
                </span>
              </a>
            </div>
          </div>
        </footer>
        <div className=" bg-[#124170] py-10 text-center ">
          <p>© 2026 NextGen Edu. All rights reserved.</p>
        </div>
      </div>
    );
};

export default Footer;