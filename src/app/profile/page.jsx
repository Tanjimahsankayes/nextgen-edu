"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
// icons for a better UI. Install icons (react-icons/fi).
import {
  FiMapPin,
  FiCalendar,
  FiPhone,
  FiBookOpen,
  FiUser,
  FiFlag,
  FiBarChart2,
  FiBook,
  FiGlobe,
} from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const MyProfile = () => {
  const { data, isPending } = useSession();
  const user = data?.user;
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    dob: "",
    phone: "",
    currentAddress: "",
    permanentAddress: "",
    nationality: "",
    university: "",
    semester: "",
    cgpa: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch existing profile data
  const fetchProfileData = async () => {
    if (!user?.id) return;

    try {
      const res = await fetch(`/api/profile?userId=${user.id}`);
      const data = await res.json();

      if (res.ok) {
        if (data.profile) {
          setProfileData(data.profile);
        }
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    if (!isPending && !user) {
      toast.error("Please login first");
      router.push("/auth/signin");
    } else if (user) {
      fetchProfileData();
    }
  }, [user, isPending, router]);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    fetchProfileData(); // Reset to original data
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...profileData,
          userId: user?.id,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Profile updated successfully");
        setIsEditing(false);
        await fetchProfileData(); // Refresh data
      } else {
        // If profile doesn't exist, try to create it
        if (data.error === "Profile not found") {
          const createRes = await fetch("/api/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...profileData,
              userId: user?.id,
            }),
          });

          const createData = await createRes.json();

          if (createRes.ok) {
            toast.success("Profile created successfully");
            setIsEditing(false);
            await fetchProfileData(); // Refresh data
          } else {
            toast.error(createData.error || "Failed to create profile");
          }
        } else {
          toast.error(data.error || "Something went wrong");
        }
      }
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Modern Skeleton Loader for Pending State
  if (isPending) {
    return (
      <div
        className={`text-slate-700 bg-[#DFF1F1] min-h-screen p-10 ${poppins.className}`}
      >
        <div className="w-11/12 mx-auto space-y-6">
          <div className="h-10 w-48 bg-slate-200 rounded animate-pulse"></div>
          <div className="h-64 w-full bg-slate-200 rounded-3xl animate-pulse"></div>
          <div className="h-40 w-full bg-slate-200 rounded-3xl animate-pulse"></div>
        </div>
      </div>
    );
  }

  // A helper card component for clean structure
  const ProfileCard = ({ title, icon, children }) => (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-teal-100/50 shadow-sm space-y-5">
      <div className="flex items-center gap-3 border-b border-teal-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-teal-100/50 flex items-center justify-center text-[#0D9488]">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      {children}
    </div>
  );

  return (
    <div
      className={`bg-[#DFF1F1] min-h-screen text-slate-800 ${poppins.className} antialiased`}
    >
      <div className="w-11/12 max-w-7xl mx-auto py-12 lg:py-16 space-y-10">
        {/* Header and Mission */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-teal-100 pb-6">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Dashboard <span className="text-[#0D9488]">/</span> My Profile
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Explore diverse courses and build essential skills for
              professional growth.
            </p>
          </div>

          {!isEditing && (
            <button
              onClick={handleEdit}
              className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0b7a70] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl shadow-lg shadow-teal-900/30 hover:shadow-teal-700/40 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              <FiUser /> Edit Profile
            </button>
          )}
        </div>

        {/* Display Mode */}
        {!isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Personal Info Card */}
            <ProfileCard
              title="Personal Information"
              icon={<FiUser size={22} />}
            >
              <div className="relative group text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-teal-100 p-1 bg-slate-950 mb-3 shadow-inner">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full flex items-center justify-center text-[#1ACEC2] text-3xl font-bold bg-slate-900">
                      {user?.name?.[0].toUpperCase() || "U"}
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-950">
                  {user?.name || "N/A"}
                </h4>
                <p className="text-sm font-medium text-slate-600">
                  {user?.email || "N/A"}
                </p>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full uppercase tracking-wider text-[10px] font-semibold mt-2 ${profileData.gender === "female" ? "bg-pink-100 text-pink-600" : "bg-teal-100 text-[#0D9488]"}`}
                >
                  {profileData.gender || "Profile Not Set"}
                </span>
              </div>

              <div className="space-y-4 pt-5 border-t border-teal-100">
                {[
                  {
                    icon: FiCalendar,
                    label: "Date of Birth",
                    value: profileData.dob || "N/A",
                  },
                  {
                    icon: FiPhone,
                    label: "Phone",
                    value: profileData.phone || "N/A",
                  },
                  {
                    icon: FiGlobe,
                    label: "Nationality",
                    value: profileData.nationality || "N/A",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="text-[#0D9488] shrink-0" size={16} />
                    <div className="text-sm flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
                      <span className="text-slate-500">{item.label}:</span>
                      <span className="text-slate-900 font-semibold">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ProfileCard>

            {/* 2. Educational Info Card */}
            <ProfileCard
              title="Educational Information"
              icon={<FiBook size={22} />}
            >
              <div className="w-full space-y-4">
                <div className="w-full flex items-center gap-3">
                  <FiBookOpen className="text-[#0D9488] shrink-0" size={16} />
                  <div className="text-sm">
                    <p className="text-slate-500">University</p>
                    <p className="text-slate-950 font-bold leading-tight">
                      {profileData.university || "University Profile Not Added"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: FiBook,
                      label: "Semester",
                      value: profileData.semester || "N/A",
                    },
                    {
                      icon: FiBarChart2,
                      label: "CGPA",
                      value: profileData.cgpa || "N/A",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-teal-100/50 flex items-center justify-center text-[#0D9488]">
                        <item.icon size={16} />
                      </div>
                      <div className="text-sm">
                        <p className="text-slate-500">{item.label}</p>
                        <p className="font-bold text-slate-950">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ProfileCard>

            {/* 3. Address Info Card */}
            <ProfileCard
              title="Address Information"
              icon={<FiMapPin size={22} />}
            >
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div>
                  <p className="font-semibold text-slate-950 flex items-center gap-1.5 mb-1">
                    <FiMapPin className="text-[#0D9488]" /> Current Address
                  </p>
                  <p className="text-slate-600">
                    {profileData.currentAddress || "Not set in profile"}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-950 flex items-center gap-1.5 mb-1">
                    <FiGlobe className="text-[#0D9488]" /> Permanent Address
                  </p>
                  <p className="text-slate-600">
                    {profileData.permanentAddress || "Not set in profile"}
                  </p>
                </div>
              </div>
            </ProfileCard>
          </div>
        ) : (
          /* ------------------- Edit Mode ------------------- */
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {/* Header: Picture and Basic */}
            <div className="lg:col-span-1 bg-white rounded-3xl p-8 border border-teal-100/50 shadow-sm text-center">
              <div className="relative group text-center flex flex-col items-center">
                <div className="w-28 h-28 rounded-full border-4 border-teal-100 p-1 bg-slate-950 mb-3 shadow-inner">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full flex items-center justify-center text-[#1ACEC2] text-4xl font-bold bg-slate-900">
                      {user?.name?.[0].toUpperCase() || "U"}
                    </div>
                  )}
                </div>
                <h4 className="text-2xl font-bold text-slate-950">
                  {user?.name || "N/A"}
                </h4>
                <p className="text-base font-medium text-slate-600">
                  {user?.email || "N/A"}
                </p>
              </div>
            </div>

            {/* Edit Profile Fields */}
            <div className="lg:col-span-2 space-y-8">
              {/* Field Grid */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-teal-100/50 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-teal-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100/50 flex items-center justify-center text-[#0D9488]">
                    <FiUser size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Edit Detailed Profile
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Date of Birth",
                      name: "dob",
                      value: profileData.dob,
                      type: "date",
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      value: profileData.phone,
                      type: "tel",
                    },
                    {
                      label: "Nationality",
                      name: "nationality",
                      value: profileData.nationality,
                      type: "text",
                    },
                    {
                      label: "University Name",
                      name: "university",
                      value: profileData.university,
                      type: "text",
                    },
                    {
                      label: "Semester",
                      name: "semester",
                      value: profileData.semester,
                      type: "text",
                    },
                    {
                      label: "CGPA",
                      name: "cgpa",
                      value: profileData.cgpa,
                      type: "text",
                    },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 ml-1">
                        {field.label}
                      </label>
                      <input
                        name={field.name}
                        value={field.value}
                        onChange={handleChange}
                        type={field.type}
                        placeholder={field.label}
                        className="w-full bg-slate-50 text-slate-950 placeholder-slate-400 border border-teal-100 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-full py-2.5 px-4 outline-none transition text-sm sm:text-base shadow-sm"
                      />
                    </div>
                  ))}

                  {/* Gender Selector as Pills */}
                  <div className="flex flex-col sm:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2 ml-1">
                      Gender
                    </label>
                    <div className="flex gap-2">
                      {["male", "female", "other"].map((g) => (
                        <label
                          key={g}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm rounded-full border cursor-pointer font-medium capitalize transition-all duration-200 shadow-sm ${profileData.gender === g ? "bg-[#0D9488] text-white border-[#0D9488] shadow-[#0D9488]/30" : "bg-white text-slate-700 border-teal-100 hover:border-teal-200"}`}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={g}
                            checked={profileData.gender === g}
                            onChange={handleChange}
                            className="hidden" // Hiding the actual radio
                          />
                          {g === profileData.gender && (
                            <FiCheckCircle size={14} />
                          )}
                          {g}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Addresses Card Edit */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-teal-100/50 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-teal-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100/50 flex items-center justify-center text-[#0D9488]">
                    <FiMapPin size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Address Information
                  </h3>
                </div>

                {["currentAddress", "permanentAddress"].map((addr) => (
                  <div key={addr} className="flex flex-col">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 ml-1">
                      {addr === "currentAddress"
                        ? "Current Address"
                        : "Permanent Address"}
                    </label>
                    <textarea
                      name={addr}
                      value={profileData[addr]}
                      onChange={handleChange}
                      placeholder={
                        addr === "currentAddress"
                          ? "Your current study address"
                          : "Your permanent home address"
                      }
                      rows={3}
                      className="w-full bg-slate-50 text-slate-950 placeholder-slate-400 border border-teal-100 focus:border-[#0D9488] focus:bg-white focus:ring-1 focus:ring-[#0D9488] rounded-2xl p-4 outline-none transition text-sm sm:text-base shadow-sm resize-none"
                    />
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-4 pb-12">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full shadow-lg transition"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0D9488] hover:bg-[#0b7a70] rounded-full shadow-lg shadow-teal-950/30 hover:shadow-teal-700/40 hover:-translate-y-0.5 transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner loading-xs text-white"></span>
                      Updating...
                    </>
                  ) : (
                    "Save Profile"
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
