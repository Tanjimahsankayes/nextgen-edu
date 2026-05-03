"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { data, isPending } = useSession();
  const user = data?.user;

  const [form, setForm] = useState({
    dob: "",
    phone: "",
    currentAddress: "",
    permanentAddress: "",
    nationality: "",
    university: "",
    semester: "",
    cgpa: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        userId: user?.id,
      }),
    });

    if (res.ok) {
      toast.success("Profile saved successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  if (isPending) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!user) {
    return <div className="text-white p-10">Please login first</div>;
  }

  return (
    <div className="bg-[#0D0C22] min-h-screen text-white">
      <div className="w-11/12 mx-auto py-10 space-y-8">
        <h2 className="text-3xl font-bold">My Profile</h2>

        <div className="bg-[#1A1833] p-5 rounded-xl space-y-1">
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-300">Date of Birth</label>
            <input
              name="dob"
              onChange={handleChange}
              type="date"
              className="input"
            />
          </div>
          <input
            name="phone"
            onChange={handleChange}
            placeholder="Phone Number"
            className="input text-white"
          />

          <textarea
            name="currentAddress"
            onChange={handleChange}
            placeholder="Current Address"
            className="textarea text-white"
          />

          <textarea
            name="permanentAddress"
            onChange={handleChange}
            placeholder="Permanent Address"
            className="textarea text-white"
          />

          <input
            name="nationality"
            onChange={handleChange}
            placeholder="Nationality"
            className="input text-white"
          />

          <input
            name="university"
            onChange={handleChange}
            placeholder="University Name"
            className="input text-white"
          />

          <input
            name="semester"
            onChange={handleChange}
            placeholder="Semester"
            className="input text-white"
          />

          <input
            name="cgpa"
            onChange={handleChange}
            placeholder="CGPA"
            className="input text-white"
          />
          <div className="md:col-span-2">
            <label className="text-sm text-gray-300">Gender</label>

            <div className="flex gap-6 mt-2 text-white">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  className="radio radio-primary"
                />
                Male
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  className="radio radio-primary"
                />
                Female
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={handleChange}
                  className="radio radio-primary"
                />
                Other
              </label>
            </div>
          </div>

          <button className="btn btn-primary md:col-span-2">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
