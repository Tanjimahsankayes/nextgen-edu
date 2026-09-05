"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight, FiClock, FiStar, FiBookOpen } from "react-icons/fi";

const CourseCard = ({ course }) => {
  if (!course) return null;
  const { id, title, image, description, category, rating, duration, price } =
    course;

  return (
    <div className="w-full group h-full flex flex-col bg-slate-900/90 border border-slate-800 hover:border-[#0D9488]/60 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-teal-950/40">
      {/* Thumbnail Section */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-950">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-[#1ACEC2] border border-[#0D9488]/30 text-xs font-semibold px-3 py-1 rounded-full">
          {category || "Course"}
        </span>

        {/* Rating Badge */}
        {rating && (
          <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-amber-400 border border-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <FiStar className="fill-amber-400 text-amber-400" />
            <span className="text-white">{rating}</span>
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2.5">
          {/* Metadata Info (Duration / Lessons if available) */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <FiClock className="text-[#1ACEC2]" />
              {duration || "Self-Paced"}
            </span>
            <span className="flex items-center gap-1.5">
              <FiBookOpen className="text-[#1ACEC2]" />
              Interactive
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-[#1ACEC2] transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Card Footer & Action Buttons */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-auto">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
              Price
            </p>
            <p className="text-base font-bold text-white">
              {price ? `$${price}` : "Free"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link href={`/courses/${id}`}>
              <button className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-full transition">
                Details
              </button>
            </Link>

            <Link href={`/enroll`}>
              <button className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0D9488] hover:bg-[#0b7a70] rounded-full shadow-md shadow-teal-950/50 transition">
                Enroll
                <FiArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
