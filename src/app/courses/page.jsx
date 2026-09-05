"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import data from "../../../db.json";
import { FiSearch, FiBookOpen, FiFilter } from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const CoursesPage = () => {
  const courses = data.courses;
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtering functionality
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Web Dev", "Design", "Data Science", "Marketing"];

  return (
    <div className="bg-slate-950 min-h-screen py-12 text-slate-200">
      <div className="w-11/12 max-w-7xl mx-auto space-y-10">
        {/* Header & Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
          <span className="inline-flex items-center gap-2 bg-[#0D9488]/10 border border-[#0D9488]/30 text-[#1ACEC2] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            <FiBookOpen size={16} /> Explore Knowledge
          </span>
          <h1
            className={`${poppins.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight`}
          >
            Explore Our <span className="text-[#1ACEC2]">Featured Courses</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Upgrade your skills with modern, project-based courses designed by
            industry practitioners.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-900/80 border border-slate-800 p-4 sm:p-6 rounded-3xl backdrop-blur-md shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <FiFilter className="text-slate-500 shrink-0 ml-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#0D9488] text-white shadow-lg shadow-teal-900/40"
                      : "bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80 shrink-0">
              <input
                type="text"
                placeholder="Search course title..."
                className="w-full bg-slate-950/80 text-white placeholder-slate-500 border border-slate-800 focus:border-[#0D9488] focus:outline-none rounded-full py-2.5 pl-11 pr-4 text-sm transition"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg" />
            </div>
          </div>
        </div>

        {/* Active Results Counter */}
        <div className="flex justify-between items-center px-1 text-xs sm:text-sm text-slate-400">
          <span>
            Showing{" "}
            <strong className="text-white">{filteredCourses.length}</strong>{" "}
            available courses
          </span>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-[#1ACEC2] hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4 bg-slate-900/40 border border-slate-800 rounded-3xl">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-500 text-2xl">
                🔍
              </div>
              <h3 className="text-xl font-bold text-white">No courses found</h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                We couldn't find any course matching "
                <span className="text-red-400">{search}</span>". Try searching
                with a different term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
