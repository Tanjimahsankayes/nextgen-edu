"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineUser,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import { FiSend, FiClock } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const ContactPage = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  // GSAP Entrance Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      infoRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.8 },
    ).fromTo(
      formRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.6",
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Thank you! Your message has been sent successfully.");
    e.currentTarget.reset();
  };

  return (
    <section
      className={`min-h-screen bg-[#DFF1F1] py-16 text-slate-800 ${poppins.className} antialiased`}
    >
      <div className="w-11/12 max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto pt-4">
          <span className="bg-[#0D9488]/10 text-[#0D9488] font-semibold text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            We’d Love to <span className="text-[#0D9488]">Hear From You</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Have questions about our courses, curriculum, or enrollment? Reach
            out to our team and we’ll respond promptly.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          {/* Left Column: Contact Details & Info */}
          <div
            ref={infoRef}
            className="lg:col-span-5 bg-slate-900 text-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8 relative overflow-hidden border border-slate-800"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Contact Information
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Fill out the form or contact us directly through any of the
                channels below.
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/20 border border-[#0D9488]/30 flex items-center justify-center text-[#1ACEC2] shrink-0">
                  <HiOutlineMail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Email Us
                  </p>
                  <a
                    href="mailto:support@nextgenedu.com"
                    className="text-slate-100 font-medium hover:text-[#1ACEC2] transition"
                  >
                    support@nextgenedu.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/20 border border-[#0D9488]/30 flex items-center justify-center text-[#1ACEC2] shrink-0">
                  <HiOutlinePhone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Call Us
                  </p>
                  <a
                    href="tel:+8801700000000"
                    className="text-slate-100 font-medium hover:text-[#1ACEC2] transition"
                  >
                    +880 1700-000000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/20 border border-[#0D9488]/30 flex items-center justify-center text-[#1ACEC2] shrink-0">
                  <HiOutlineLocationMarker size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Location
                  </p>
                  <p className="text-slate-100 font-medium">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/20 border border-[#0D9488]/30 flex items-center justify-center text-[#1ACEC2] shrink-0">
                  <FiClock size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Working Hours
                  </p>
                  <p className="text-slate-100 font-medium">
                    Sat - Thu: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800 space-y-3 relative z-10">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Connect with us
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaFacebookF, href: "#" },
                  { icon: FaLinkedinIn, href: "#" },
                  { icon: FaTwitter, href: "#" },
                  { icon: FaDiscord, href: "#" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#1ACEC2] hover:border-[#0D9488] hover:bg-slate-800/80 transition-all duration-300"
                  >
                    <item.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            ref={formRef}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-teal-100/60 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Send us a Message
                </h3>
                <p className="text-slate-600 text-sm">
                  Got a inquiry or need assistance? Fill out the form below and
                  we will get back to you shortly.
                </p>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Your Name
                  </label>
                  <div className="relative">
                    <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-2xl py-3.5 pl-12 pr-4 outline-none transition"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
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
                      className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-2xl py-3.5 pl-12 pr-4 outline-none transition"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Subject
                  </label>
                  <div className="relative">
                    <HiOutlineChatAlt2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-2xl py-3.5 pl-12 pr-4 outline-none transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-2xl p-4 outline-none transition resize-none"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0b7a70] text-white font-semibold rounded-2xl py-4 transition-all duration-300 shadow-lg shadow-teal-900/20 hover:shadow-teal-700/30 hover:-translate-y-0.5"
              >
                <FiSend size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
