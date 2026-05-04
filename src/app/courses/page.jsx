"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import data from "../../../db.json";
import { CiSearch } from "react-icons/ci";

const CoursesPage = () => {
  const courses = data.courses;

  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-accent">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <h2 className="text-3xl font-bold py-6">Available Course :</h2>
          <div className="relative w-full max-w-md mt-6 md:mt-0">
            <input
              type="text"
              placeholder="Search course by title..."
              className="input input-bordered w-full max-w-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-red-500 col-span-3">No course found..!!!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
