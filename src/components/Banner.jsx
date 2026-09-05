"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Bannerbg from "../../public/images/Banner.png";
import {
  FiArrowUpRight,
  FiPlayCircle,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import { Poppins } from "next/font/google";
import { useSession } from "@/lib/auth-client";
import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const Banner = () => {
  const { data } = useSession();
  const user = data?.user;
  const welcomeText = "Welcome back,";

  return (
    <section className="relative overflow-hidden w-full min-h-[90vh] flex items-center justify-center bg-slate-950">
      {/* Background Image with Dark & Teal Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
        style={{
          backgroundImage: `url(${Bannerbg.src})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />

      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-11/12 max-w-7xl mx-auto py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Animated Welcome User Badge */}
          {user && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-medium backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span>
                {welcomeText}{" "}
                <strong className="text-white font-semibold">
                  {user.name}
                </strong>
                !
              </span>
            </motion.div>
          )}

          {/* Main Heading */}
          <h1
            className={`${poppins.className} text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight`}
          >
            Next Generation Learning{" "}
            <span className="bg-gradient-to-r from-[#0D9488] via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Empowering your career with interactive industry-led courses,
            hands-on real-world projects, and personalized expert mentorship.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7a70] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-teal-900/30 hover:shadow-teal-700/40 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
            >
              Explore Courses
              <FiArrowUpRight className="text-lg" />
            </Link>

            <button
              type="button"
              className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold px-6 py-3.5 rounded-full backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
            >
              <FiPlayCircle className="text-teal-400 text-lg" />
              Watch Demo
            </button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-[#0D9488]" />
              <span>50+ Expert Instructors</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-[#0D9488]" />
              <span>Self-Paced Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-[#0D9488]" />
              <span>Verified Certificate</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image with Floating Glass Cards */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Soft Glow Behind Image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#0D9488] to-teal-300 blur-2xl opacity-40 animate-pulse" />

            {/* Main Student Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Students Collaboration"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Glass Badge 1 - Active Learners */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488]">
                <FiUsers className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Active Community</p>
                <p className="text-sm font-bold text-white">56K+ Learners</p>
              </div>
            </motion.div>

            {/* Floating Glass Badge 2 - Rating */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2"
            >
              <span className="text-amber-400 text-sm">★</span>
              <div>
                <p className="text-xs font-bold text-white">4.9 / 5.0</p>
                <p className="text-[10px] text-slate-400">Course Rating</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
