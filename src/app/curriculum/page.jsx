"use client";

import React from "react";
import Link from "next/link";
// Icon imports. Ensure react-icons is installed.
import {
  FiBookOpen,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiUserPlus,
} from "react-icons/fi";

const coursesCurriculum = [
  {
    title: "Web Development Fundamentals",
    level: "Beginner",
    duration: "4 Weeks",
    description:
      "Learn HTML, CSS, and JavaScript from scratch with real-world projects.",
    topics: [
      "HTML Basics",
      "CSS Styling",
      "JavaScript Basics",
      "DOM Manipulation",
    ],
    price: "Free",
  },
  {
    title: "Frontend Development with React",
    level: "Intermediate",
    duration: "6 Weeks",
    description:
      "Master React.js and build modern UI applications with hooks and state management.",
    topics: [
      "React Components",
      "Props & State",
      "Hooks (useState, useEffect)",
      "React Router",
    ],
    price: "$99",
  },
  {
    title: "Next.js Full Stack Mastery",
    level: "Advanced",
    duration: "8 Weeks",
    description:
      "Build full stack applications using Next.js, API routes, and authentication.",
    topics: ["App Router", "Server Components", "API Routes", "Authentication"],
    price: "$149",
  },
  {
    title: "Backend Development with Node.js",
    level: "Intermediate",
    duration: "6 Weeks",
    description:
      "Learn how to build scalable backend systems with Node.js and Express.",
    topics: [
      "Node.js Basics",
      "Express.js",
      "REST APIs",
      "MongoDB Integration",
    ],
    price: "$129",
  },
];

const CurriculumPage = () => {
  return (
    <section className="min-h-screen bg-[#DFF1F1] py-16 w-full text-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto space-y-12">
        {/* Header and Mission */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-4">
          <span className="bg-[#0D9488]/10 text-[#0D9488] font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            Structured Learning Paths
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Our World-Class <span className="text-[#0D9488]">Curriculum</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Explore diverse courses tailored to equip you with essential
            technical and modern skills for your professional growth.
          </p>
        </div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {coursesCurriculum.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-teal-100/50 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Card Title and Description */}
              <div className="p-6 md:p-8 space-y-4 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                    {course.title}
                  </h2>
                  <div className="w-12 h-12 bg-teal-100/50 rounded-xl flex items-center justify-center text-[#0D9488] shrink-0">
                    <FiBookOpen size={24} />
                  </div>
                </div>

                {/* Level and Duration Tags as pills */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="inline-flex items-center gap-1.5 bg-[#0D9488]/10 text-[#0D9488] border border-teal-100/50 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {course.level}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white text-slate-700 border border-teal-100 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    <FiClock size={14} className="text-[#0D9488]" />{" "}
                    {course.duration}
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                  {course.description}
                </p>

                {/* Learning Topics with Check Icons */}
                <div className="pt-5 mt-4 border-t border-teal-100/50">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">
                    What you’ll learn:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-slate-700 text-sm sm:text-base">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <FiCheckCircle
                          className="text-[#0D9488] shrink-0"
                          size={18}
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons & Pricing */}
              <div className="bg-slate-50 border-t border-teal-100/50 p-6 md:px-8 flex flex-wrap items-center justify-between gap-6 mt-auto">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                    Full Course Price
                  </p>
                  <p className="text-2xl font-bold text-slate-950">
                    {course.price}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="/courses">
                    <button className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 bg-white border border-teal-100 hover:bg-teal-50 rounded-full transition">
                      Details
                    </button>
                  </Link>
                  <Link href="/courses">
                    <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0D9488] hover:bg-[#0b7a70] text-white text-sm sm:text-base font-semibold shadow-lg shadow-teal-900/30 hover:shadow-teal-700/40 hover:-translate-y-0.5 transition-all duration-300">
                      Start Learning
                      <FiArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="text-center pt-20 pb-16 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready to Start Your Learning Journey?
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg">
            Join over 56,000+ students already upgrading their skills. Create
            your account today and unlock a world of knowledge.
          </p>
          <Link href="/auth/signup">
            <button className="inline-flex items-center gap-2 px-8 py-4 mt-3 rounded-full bg-[#0D9488] hover:bg-[#0b7a70] text-white text-base font-semibold shadow-xl shadow-teal-900/40 hover:-translate-y-1 transition-all duration-300">
              <FiUserPlus size={20} />
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CurriculumPage;
