"use client";

import React from "react";
import Link from "next/link";

const courses = [
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
  },
  {
    title: "Next.js Full Stack Mastery",
    level: "Advanced",
    duration: "8 Weeks",
    description:
      "Build full stack applications using Next.js, API routes, and authentication.",
    topics: ["App Router", "Server Components", "API Routes", "Authentication"],
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
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0C22] text-white py-12">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-300">
            Course Curriculum
          </h1>
          <p className="text-white/60 mt-2">
            Explore structured learning paths designed for your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-[#1A1833] p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition"
            >
              <h2 className="text-2xl font-semibold text-amber-300">
                {course.title}
              </h2>

              <div className="flex gap-3 text-sm text-white/60 mt-2">
                <span className="badge badge-primary">{course.level}</span>
                <span className="badge badge-accent">{course.duration}</span>
              </div>

              <p className="mt-4 text-white/70">{course.description}</p>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">What you’ll learn:</h3>
                <ul className="list-disc list-inside text-white/60 space-y-1">
                  {course.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/courses"
                  className="btn btn-primary btn-sm rounded-full"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold">
            Ready to start your learning journey?
          </h3>
          <p className="text-white/60 mt-2">
            Join thousands of students upgrading their skills
          </p>

          <Link
            href="/auth/signup"
            className="btn btn-accent mt-4 rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
