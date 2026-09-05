import React from "react";
import data from "../../../../db.json";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

// Detailed, specific icons for clarity
import {
  FiClock,
  FiStar,
  FiBarChart2,
  FiGrid,
  FiUsers,
  FiArrowRight,
  FiPlayCircle,
  FiBookOpen,
} from "react-icons/fi";

const CourseDetails = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  const { courseId } = await params;
  const course = data.courses.find((c) => String(c.id) === String(courseId));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-200">
        <div className="text-center p-10 bg-slate-900 border border-slate-800 rounded-3xl">
          <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-red-400 text-3xl">
            FiBookOpen
          </div>
          <h2 className="text-2xl font-bold mt-4">Course Not Found</h2>
          <p className="text-slate-400 mt-2">
            The course with ID "{courseId}" could not be located.
          </p>
        </div>
      </div>
    );
  }

  // Destruction including extended mock data fields (like price/totalStudents)
  // for a more complete premium professional view.
  const {
    title,
    instructor,
    duration,
    rating,
    level,
    description,
    image,
    category,
    price,
    totalStudents,
  } = course;

  return (
    <div className="bg-[#DFF1F1] min-h-screen py-10 w-full text-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto space-y-12">
        {/* Main Course Details Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-teal-100/50 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Panel: Image & Categories */}
            <div className="lg:col-span-5 p-6 md:p-8 space-y-6 flex flex-col items-center">
              <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl w-full border border-teal-100/30">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover w-full h-full"
                  priority
                />
                {/* Product Glow Element (Subtle) */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#0D9488]/10 via-transparent to-transparent opacity-60" />
              </figure>

              <div className="flex flex-wrap items-center gap-3 w-full justify-center lg:justify-start pt-2 border-t border-teal-100/30">
                <span className="inline-flex items-center gap-1.5 bg-[#0D9488]/10 text-[#0D9488] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  <FiGrid size={16} /> {category}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white text-slate-700 border border-teal-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  <FiBarChart2 size={16} /> {level}
                </span>
              </div>
            </div>

            {/* Right Panel: Content & Stats */}
            <div className="lg:col-span-7 p-6 md:p-8 space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  {title}
                </h1>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                  {description}
                </p>
                <p className="text-slate-800 font-medium">
                  Led by{" "}
                  <strong className="font-semibold text-slate-950">
                    {instructor}
                  </strong>
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-teal-100/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-100/50 flex items-center justify-center text-[#0D9488]">
                    <FiClock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Duration</p>
                    <p className="text-sm font-bold text-slate-900">
                      {duration || "Self-Paced"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 col-span-1 md:col-span-1 md:justify-end">
                  <div className="w-9 h-9 rounded-xl bg-teal-100/50 flex items-center justify-center text-[#0D9488]">
                    <FiUsers size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Learners</p>
                    <p className="text-sm font-bold text-slate-900">
                      {totalStudents ? `${totalStudents}k+` : "12k+"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 md:col-span-2 md:justify-end md:pl-6">
                  <span className="flex items-center gap-1.5 text-2xl font-bold text-slate-950">
                    <FiStar
                      className="fill-amber-400 text-amber-400"
                      size={24}
                    />{" "}
                    {rating}
                  </span>
                  <span className="text-xs text-slate-500">
                    (Verified Rating)
                  </span>
                </div>
              </div>

              {/* Action Buttons & Price */}
              <div className="pt-8 border-t border-teal-100/50 flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                    Full Course Price
                  </p>
                  <p className="text-2xl font-bold text-slate-950">
                    {price ? `$${price}` : "Free Enrollment"}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="/curriculum">
                    <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-teal-100 bg-white hover:bg-teal-50 text-slate-700 hover:text-slate-950 text-sm font-semibold transition-all duration-300">
                      <FiBookOpen size={18} className="text-[#0D9488]" />
                      Course Curriculum
                    </button>
                  </Link>
                  <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0b7a70] text-white text-sm sm:text-base font-semibold shadow-lg shadow-teal-900/30 hover:shadow-teal-700/40 hover:-translate-y-0.5 transition-all duration-300">
                    <FiPlayCircle size={20} />
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
