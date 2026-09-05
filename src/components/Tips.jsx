import React from "react";
import { FaBook, FaBrain, FaRegClock, FaBullseye } from "react-icons/fa6";

const LearningTips = () => {
  const categories = [
    {
      categoryName: "Effective Study Methods",
      badge: "Methodology",
      tips: [
        {
          id: 1,
          title: "Active Recall & Spaced Repetition",
          description:
            "Boost long-term retention by testing yourself regularly instead of passive reading.",
          icon: <FaBook className="text-[#0D9488] text-2xl" />,
          tag: "Memory",
        },
        {
          id: 2,
          title: "Chunking & Smart Learning",
          description:
            "Break complex topics into smaller, manageable chunks for faster comprehension.",
          icon: <FaBrain className="text-[#0D9488] text-2xl" />,
          tag: "Efficiency",
        },
      ],
    },
    {
      categoryName: "Time & Focus Mastery",
      badge: "Productivity",
      tips: [
        {
          id: 3,
          title: "Pomodoro Technique",
          description:
            "Work in 25-minute focused bursts followed by a 5-minute mental break to maintain high energy.",
          icon: <FaRegClock className="text-[#0D9488] text-2xl" />,
          tag: "Time Mgmt",
        },
        {
          id: 4,
          title: "Distraction Elimination",
          description:
            "Optimize your physical space and turn off non-essential notifications during deep study sessions.",
          icon: <FaBullseye className="text-[#0D9488] text-2xl" />,
          tag: "Deep Focus",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#DFF1F1] py-16 w-full text-slate-800">
      <div className="w-11/12 max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <span className="bg-[#0D9488]/10 text-[#0D9488] font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            Study Smarter, Not Harder
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Scientific{" "}
            <span className="text-[#0D9488]">Learning Techniques</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Master complex concepts faster with proven cognitive strategies
            designed to enhance focus and retention.
          </p>
        </div>

        {/* Tips Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md border border-teal-100 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-teal-100 pb-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {cat.categoryName}
                </h3>
                <span className="bg-[#0D9488] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {cat.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.tips.map((tip) => (
                  <div
                    key={tip.id}
                    className="bg-white p-5 rounded-2xl border border-teal-50 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-[#DFF1F1] rounded-xl flex items-center justify-center">
                          {tip.icon}
                        </div>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {tip.tag}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug">
                        {tip.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;
