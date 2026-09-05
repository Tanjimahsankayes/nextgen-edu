"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { HiOutlineSearch, HiChevronDown } from "react-icons/hi";
import {
  FiHelpCircle,
  FiMessageSquare,
  FiBookOpen,
  FiCreditCard,
  FiUserCheck,
} from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const faqCategories = [
  { id: "all", label: "All Questions", icon: FiHelpCircle },
  { id: "courses", label: "Courses & Content", icon: FiBookOpen },
  { id: "payment", label: "Payment & Pricing", icon: FiCreditCard },
  { id: "account", label: "Account & Access", icon: FiUserCheck },
];

const faqData = [
  {
    category: "courses",
    question: "How do I access the course material after enrollment?",
    answer:
      "Once you enroll in a course, you can access all video lectures, reading material, and quizzes directly from your student dashboard. Access is available 24/7 on both desktop and mobile devices.",
  },
  {
    category: "courses",
    question: "Are the courses self-paced or do they have live sessions?",
    answer:
      "Most of our courses are structured as self-paced video modules so you can learn at your convenience. However, select advanced programs include live Q&A sessions with mentors.",
  },
  {
    category: "payment",
    question: "What payment methods are supported on NextGen Edu?",
    answer:
      "We accept major credit/debit cards, Mobile Financial Services (bKash, Nagad, Rocket), and international online payment gateways for seamless enrollment.",
  },
  {
    category: "payment",
    question: "Is there a refund policy if I am not satisfied with a course?",
    answer:
      "Yes, we offer a 7-day money-back guarantee for most courses, provided you haven't completed more than 20% of the course content.",
  },
  {
    category: "account",
    question: "Will I receive a completion certificate?",
    answer:
      "Absolutely! Upon completing 100% of the course videos, quizzes, and project assignments, a verified digital certificate will be generated on your profile.",
  },
  {
    category: "account",
    question: "How can I reset my password if I forget it?",
    answer:
      "You can click on the 'Forgot Password?' link on the Login page. We will send a password reset link to your registered email address immediately.",
  },
];

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const containerRef = useRef(null);

  // GSAP Entrance Animation
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on category & search query
  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      className={`min-h-screen bg-[#DFF1F1] py-16 text-slate-800 ${poppins.className} antialiased`}
    >
      <div ref={containerRef} className="w-11/12 mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto pt-4">
          <span className="bg-[#0D9488]/10 text-[#0D9488] font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            Help Center
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Frequently Asked <span className="text-[#0D9488]">Questions</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Have questions? We’re here to help. Find answers to common queries
            about our platform, courses, and payments.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <HiOutlineSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-2xl" />
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white text-slate-900 placeholder-slate-400 border border-teal-100/80 focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 rounded-full py-4 pl-14 pr-6 outline-none shadow-sm transition"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {faqCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#0D9488] text-white shadow-md shadow-teal-900/20"
                    : "bg-white text-slate-700 hover:bg-teal-50 border border-teal-100/60"
                }`}
              >
                <Icon size={16} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4 pt-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-teal-100/60 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-[#0D9488] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#0D9488] text-white" : ""
                      }`}
                    >
                      <HiChevronDown size={20} />
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-teal-100/60 space-y-3">
              <p className="text-slate-500 font-medium">
                No questions found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-sm font-semibold text-[#0D9488] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-center text-slate-200 space-y-4 shadow-xl border border-slate-800 relative overflow-hidden mt-12">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Still Have Questions?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Can’t find the answer you’re looking for? Please reach out to our
              friendly support team.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7a70] text-white font-semibold rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg shadow-teal-950/40 hover:-translate-y-0.5">
                <FiMessageSquare size={18} />
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
