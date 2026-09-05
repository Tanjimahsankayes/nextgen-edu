import React from "react";
import Link from "next/link";

const AboutPage = () => {
  const stats = [
    { value: "25+", label: "Years of Educational Legacy", icon: "🎓" },
    { value: "56K+", label: "Enrolled Students Worldwide", icon: "👥" },
    { value: "170+", label: "Expert Mentors & Instructors", icon: "👨‍🏫" },
    { value: "98%", label: "Course Completion Rate", icon: "⭐" },
  ];

  const values = [
    {
      title: "Interactive Learning",
      description:
        "Hands-on projects and real-time mentor support to master practical skills.",
      icon: "💡",
    },
    {
      title: "Industry-aligned Curriculum",
      description:
        "Updated course materials designed by toptech and design professionals.",
      icon: "🚀",
    },
    {
      title: "Global Community",
      description:
        "Connect with thousands of peer learners and potential employers globally.",
      icon: "🌐",
    },
  ];

  return (
    <div className="bg-[#DFF1F1] min-h-screen text-[#1E293B]">
      {/* 1. Hero Section */}
      <section className="py-16 md:py-20 w-11/12 max-w-7xl mx-auto text-center space-y-6">
        <span className="bg-[#0D9488]/10 text-[#0D9488] font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
          About NextGen Edu
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Empowering Learners to{" "}
          <span className="text-[#0D9488]">Shape the Future</span>
        </h1>
        <p className="w-11/12 md:w-8/12 mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
          At <span className="font-semibold text-gray-900">NextGen Edu</span>,
          we are passionate about transforming digital education. We deliver
          high-quality, accessible, and engaging learning experiences tailored
          to equip students with market-relevant skills.
        </p>

        {/* 2. Key Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-teal-100 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D9488]">
                {stat.value}
              </h2>
              <p className="text-sm font-medium text-gray-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="py-12 bg-white/60 border-y border-teal-100/50">
        <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-50 space-y-4">
            <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center text-2xl text-[#0D9488]">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize technical and professional education globally by
              offering structured, affordable, and high-impact courses mentored
              by top industry leaders.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-50 space-y-4">
            <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center text-2xl text-[#0D9488]">
              👁️
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To build an inclusive ecosystem where geographical boundaries do
              not limit a student's potential to master modern technology and
              build rewarding careers.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 w-11/12 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose NextGen Edu?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We focus on outcome-oriented learning that helps you move from
            beginner to industry-ready professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100 space-y-3 hover:-translate-y-1 transition-transform"
            >
              <span className="text-4xl">{val.icon}</span>
              <h4 className="text-xl font-bold text-gray-900">{val.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call to Action (CTA) */}
      <section className="pb-20 w-11/12 max-w-7xl mx-auto text-center">
        <div className="bg-[#0D9488] text-white p-10 md:p-14 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Upgrade Your Skills?
          </h2>
          <p className="text-teal-100 max-w-xl mx-auto text-base md:text-lg">
            Join over 56,000+ students already advancing their careers with
            NextGen Edu.
          </p>
          <div>
            <Link
              href="/courses"
              className="inline-block bg-white text-[#0D9488] font-bold px-8 py-3.5 rounded-full shadow-md hover:bg-teal-50 transition-colors"
            >
              Explore All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
