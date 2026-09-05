"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import {
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlinePlay,
} from "react-icons/hi";
import { FiCode, FiCpu, FiTarget, FiArrowRight } from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const DemoClass = () => {
  // YouTube video ID
  const videoId = "dQw4w9WgXcQ";

  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
    ).fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8 },
      "-=0.4",
    );
  }, []);

  return (
    <section
      className={`min-h-screen bg-[#DFF1F1] py-16 text-slate-800 ${poppins.className} antialiased`}
    >
      <div ref={containerRef} className="w-11/12 max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto pt-4">
          <span className="inline-flex items-center gap-1.5 bg-[#0D9488]/10 text-[#0D9488] font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            <HiOutlineSparkles size={16} /> Free Experience
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Experience <span className="text-[#0D9488]">NextGen Edu</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Watch our free demo class and discover how our interactive and
            project-based curriculum helps you master modern skills.
          </p>
        </div>

        {/* Video Player Card */}
        <div
          ref={videoRef}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-slate-900 p-2 sm:p-3 shadow-2xl border border-slate-800"
        >
          {/* Subtle Glow behind Video */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
            <iframe
              className="h-full w-full border-0"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              title="NextGen Edu Demo Class"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Information Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-teal-100/80 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#0D9488] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    Demo Class
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Web Development Series
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Introduction to Full-Stack Web Development
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Learn the foundational building blocks of modern websites.
                  Explore HTML, CSS, JavaScript, and get a sneak peek into
                  building full-stack applications with Next.js.
                </p>
              </div>

              {/* Course Meta Info */}
              <div className="flex shrink-0 gap-3 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 px-5 py-3 text-center min-w-[100px]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
                    <HiOutlineAcademicCap size={14} /> Level
                  </p>
                  <p className="mt-1 font-bold text-slate-900 text-sm sm:text-base">
                    Beginner
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 px-5 py-3 text-center min-w-[100px]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1">
                    <HiOutlineClock size={14} /> Duration
                  </p>
                  <p className="mt-1 font-bold text-slate-900 text-sm sm:text-base">
                    25 Mins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-5xl mx-auto space-y-6 pt-4">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
              Curriculum Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Inside This Demo Class
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 border border-teal-100/60 shadow-sm space-y-3 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                <FiCode size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Web Fundamentals
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Understand the fundamentals of HTML5, CSS3, and modern
                JavaScript required to craft beautiful websites.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 border border-teal-100/60 shadow-sm space-y-3 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                <FiCpu size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Modern Tech Stack
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Get introduced to modern tools like Next.js, React, and Tailwind
                CSS used by industry professionals.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-6 border border-teal-100/60 shadow-sm space-y-3 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                <FiTarget size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Practical Projects
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learn how to apply theoretical knowledge to real-world projects
                and build your developer portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-8 sm:p-12 text-center text-slate-200 space-y-6 shadow-xl border border-slate-800 relative overflow-hidden">
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Upgrade Your Skills?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Join thousands of students on NextGen Edu and start learning from
              expert instructors today.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link href="/courses">
              <button className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7a70] text-white font-semibold rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg shadow-teal-950/40 hover:-translate-y-0.5">
                Explore All Courses
                <FiArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoClass;
