"use client";

import Link from "next/link";
import data from "../../db.json";
import CourseCard from "./CourseCard";
import { FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const PopularCoursesPage = () => {
  const courses = data.courses;
  const popularCourses = courses.filter((course) => course.popular === true);

  return (
    <section className="bg-slate-950 py-16 text-slate-200 border-t border-slate-800/60 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0D9488]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#1ACEC2] text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <FiTrendingUp size={14} /> Top Picked
            </span>
            <h2
              className={`${poppins.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white`}
            >
              Most Popular <span className="text-[#1ACEC2]">Courses</span>
            </h2>
          </div>

          <Link href="/courses">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800 hover:border-[#0D9488] text-slate-200 hover:text-white text-sm font-semibold transition-all duration-300">
              View All Courses
              <FiArrowRight className="text-[#1ACEC2]" />
            </button>
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesPage;
