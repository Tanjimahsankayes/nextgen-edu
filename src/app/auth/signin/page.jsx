"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import loginBG from "../../../../public/images/loginBG.jpg";
import logo from "../../../../public/images/log.png";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const LoginPage = () => {
  const emailRef = useRef(null);
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  // GSAP Animation on Mount
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
    )
      .fromTo(
        infoRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 },
        "-=0.5",
      )
      .fromTo(
        formRef.current.children,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1 },
        "-=0.8",
      );
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    // Basic Validation
    if (!userData.email || !userData.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Something went wrong please try again");
    }
    if (data) {
      toast.success("SignIn Successfully");
    }
  };

  const handleSocialSignIn = async (provider) => {
    await authClient.signIn.social({
      provider: provider,
      callbackURL: "/",
    });
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center p-4 md:p-8 ${poppins.className} antialiased`}
      style={{
        backgroundImage: `url(${loginBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-950/70 z-10"></div>

      {/* Glow effect */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-3xl z-10 pointer-events-none"></div>

      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative z-20 flex flex-col md:flex-row-reverse w-full max-w-6xl bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-800 overflow-hidden"
      >
        {/* Right Section (Info & Logo) */}
        <div
          ref={infoRef}
          className="flex-1 flex flex-col justify-center items-center text-center p-10 lg:p-16 bg-slate-800/40 border-b md:border-b-0 md:border-l border-slate-800"
        >
          <div className="mb-6 flex justify-center">
            <Image
              src={logo}
              alt="NextGen Edu logo"
              width={160}
              height={160}
              className="rounded-full shadow-lg border-4 border-slate-700 p-1 bg-slate-900"
              priority
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Welcome Back!
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-md">
            Pick up right where you left off and keep moving forward. Your
            learning journey{" "}
            <span className="text-[#1ACEC2] font-semibold">continues</span>{" "}
            here.
          </p>
        </div>

        {/* Left Section (Form) */}
        <div className="flex-1 p-10 lg:p-16">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-white">
                Login to Your Account
              </h1>
              <p className="text-slate-400">
                Continue Learning with NextGen Edu
              </p>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div className="relative">
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl" />
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] rounded-full py-3 pl-12 pr-4 outline-none transition"
                  required
                />
              </div>

              <div className="relative">
                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] rounded-full py-3 pl-12 pr-4 outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-[#1ACEC2] hover:text-[#0D9488] transition"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#0D9488] text-white font-semibold rounded-full py-3 hover:bg-[#0b7a70] transition-colors duration-300 shadow-md shadow-teal-950/30 hover:shadow-teal-700/40 hover:-translate-y-0.5"
            >
              Login
            </button>

            {/* Divider */}
            <div className="relative flex items-center pt-6">
              <div className="flex-grow h-px bg-slate-700"></div>
              <span className="mx-4 text-slate-500 text-sm whitespace-nowrap">
                or continue with
              </span>
              <div className="flex-grow h-px bg-slate-700"></div>
            </div>

            {/* Social Logins */}
            <div className="flex gap-4 justify-center py-2">
              {[
                {
                  icon: FaGoogle,
                  provider: "google",
                  color: "hover:text-red-500 hover:bg-red-500/10",
                },
                {
                  icon: FaFacebookF,
                  provider: "facebook",
                  color: "hover:text-blue-500 hover:bg-blue-500/10",
                },
                {
                  icon: FaLinkedinIn,
                  provider: "linkedin",
                  color: "hover:text-blue-600 hover:bg-blue-600/10",
                },
                {
                  icon: FaGithub,
                  provider: "github",
                  color: "hover:text-slate-200 hover:bg-slate-200/10",
                },
              ].map((social, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSocialSignIn(social.provider)}
                  className={`p-3 rounded-full bg-slate-800 border border-slate-700 text-slate-400 transition-all ${social.color}`}
                >
                  <social.icon size={22} />
                </button>
              ))}
            </div>

            {/* Register Link */}
            <p className="text-center text-slate-300 pt-6">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-semibold text-[#1ACEC2] hover:text-[#0D9488] transition"
              >
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
