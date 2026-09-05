"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import {
  HiOutlineAcademicCap,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCreditCard,
  HiOutlineLockClosed,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FiArrowRight, FiShield } from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const EnrollPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("bkash");
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const summaryRef = useRef(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
    )
      .fromTo(
        summaryRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=0.5",
      )
      .fromTo(
        formRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=0.8",
      );
  }, []);

  const handleEnrollment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Enrollment Successful! Redirecting to dashboard...");
  };

  return (
    <section
      className={`min-h-screen bg-[#DFF1F1] py-16 text-slate-800 ${poppins.className} antialiased`}
    >
      <div ref={containerRef} className="w-11/12 max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto pt-4">
          <span className="bg-[#0D9488]/10 text-[#0D9488] font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            Checkout & Enrollment
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Complete Your <span className="text-[#0D9488]">Enrollment</span>
          </h1>
          <p className="text-slate-600 text-base">
            Take the final step to unlock full course access and start your
            learning journey with NextGen Edu.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Order Summary (Dark Theme Card) */}
          <div
            ref={summaryRef}
            className="lg:col-span-5 bg-slate-900 text-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 border border-slate-800 relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="border-b border-slate-800 pb-4 relative z-10">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <HiOutlineAcademicCap size={24} className="text-[#1ACEC2]" />
                Course Summary
              </h2>
            </div>

            {/* Course Details */}
            <div className="space-y-4 relative z-10">
              <div className="space-y-1">
                <span className="text-xs text-[#1ACEC2] font-semibold uppercase tracking-wider">
                  Selected Course
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Full-Stack Web Development BootCamp
                </h3>
                <p className="text-xs text-slate-400">
                  By NextGen Senior Mentors
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 space-y-3 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Regular Price</span>
                  <span className="line-through text-slate-500">৳ 8,000</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Discounted Price</span>
                  <span>৳ 4,500</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>VAT / Platform Fee</span>
                  <span className="text-[#1ACEC2]">FREE</span>
                </div>
                <div className="border-t border-slate-700 pt-3 flex justify-between font-bold text-white text-base">
                  <span>Total Amount</span>
                  <span className="text-[#1ACEC2] text-xl">৳ 4,500</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
                {[
                  "Lifetime Access to Course Videos",
                  "10+ Real-World Projects & Assignments",
                  "Dedicated 24/7 Discord Support",
                  "Verified Certificate of Completion",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <HiOutlineCheckCircle
                      className="text-[#1ACEC2] shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-slate-400 text-xs relative z-10">
              <FiShield size={24} className="text-[#0D9488] shrink-0" />
              <p>
                100% Secure Checkout. Guaranteed privacy and protection of your
                personal info.
              </p>
            </div>
          </div>

          {/* Right Column: Enrollment & Payment Form */}
          <div
            ref={formRef}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-teal-100/60 shadow-sm space-y-6"
          >
            <form onSubmit={handleEnrollment} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Student Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-2xl py-3 pl-12 pr-4 outline-none transition text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                      <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-2xl py-3 pl-12 pr-4 outline-none transition text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <HiOutlinePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="01700000000"
                        className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-2xl py-3 pl-12 pr-4 outline-none transition text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods Selection */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Select Payment Method
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    {
                      id: "bkash",
                      label: "bKash",
                      color: "border-pink-500 text-pink-600 bg-pink-50/50",
                    },
                    {
                      id: "nagad",
                      label: "Nagad",
                      color:
                        "border-orange-500 text-orange-600 bg-orange-50/50",
                    },
                    {
                      id: "rocket",
                      label: "Rocket",
                      color:
                        "border-purple-500 text-purple-600 bg-purple-50/50",
                    },
                    {
                      id: "card",
                      label: "Card",
                      color: "border-slate-800 text-slate-800 bg-slate-50",
                    },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedPayment(method.id)}
                      className={`p-3.5 rounded-2xl border-2 font-bold text-sm transition-all duration-200 text-center flex items-center justify-center ${
                        selectedPayment === method.id
                          ? `${method.color} shadow-sm scale-[1.02]`
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>

                {/* Conditional Payment Guidance */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-xs sm:text-sm text-slate-600 space-y-2">
                  <p className="font-semibold text-slate-800">
                    Payment via {selectedPayment.toUpperCase()}
                  </p>
                  <p>
                    {selectedPayment === "card"
                      ? "Enter your Card details below to make an instant secure online payment."
                      : `You will be redirected to the secure ${selectedPayment.toUpperCase()} gateway to enter your account number and PIN.`}
                  </p>
                </div>

                {/* Extra Card Inputs if Card Selected */}
                {selectedPayment === "card" && (
                  <div className="space-y-3 pt-2">
                    <div className="relative">
                      <HiOutlineCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                      <input
                        type="text"
                        placeholder="Card Number (4111 2222 3333 4444)"
                        className="w-full bg-slate-50 text-slate-900 border border-slate-200 focus:border-[#0D9488] rounded-2xl py-3 pl-12 pr-4 outline-none text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full bg-slate-50 text-slate-900 border border-slate-200 focus:border-[#0D9488] rounded-2xl py-3 px-4 outline-none text-sm"
                      />
                      <input
                        type="password"
                        placeholder="CVC / CVV"
                        className="w-full bg-slate-50 text-slate-900 border border-slate-200 focus:border-[#0D9488] rounded-2xl py-3 px-4 outline-none text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0b7a70] text-white font-semibold rounded-2xl py-4 transition-all duration-300 shadow-lg shadow-teal-900/20 hover:shadow-teal-700/30 hover:-translate-y-0.5 mt-4"
              >
                Confirm Enrollment (৳ 4,500)
                <FiArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollPage;
