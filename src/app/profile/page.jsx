"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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

  // Fetch existing profile data
  const fetchProfileData = async () => {
    if (!user?.id) return;

    try {
      console.log("Fetching profile for userId:", user.id);
      const res = await fetch(`/api/profile?userId=${user.id}`);
      const data = await res.json();
      console.log("Fetch profile response:", data);

      if (res.ok) {
        if (data.profile) {
          console.log("Setting profile data:", data.profile);
          setProfileData(data.profile);
        } else {
          console.log("No profile data found");
        }
      } else {
        console.error("Failed to fetch profile:", data.error);
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
      console.log("Updating profile with data:", {
        ...profileData,
        userId: user?.id,
      });

      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...profileData,
          userId: user?.id,
        }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        toast.success("Profile updated successfully");
        setIsEditing(false);
        await fetchProfileData(); // Refresh data
      } else {
        // If profile doesn't exist, try to create it
        if (data.error === "Profile not found") {
          console.log("Profile not found, creating new profile...");
          const createRes = await fetch("/api/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...profileData,
              userId: user?.id,
            }),
          });

          const createData = await createRes.json();
          console.log("Create API Response:", createData);

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
      console.error("Update error:", error);
      toast.error("Error updating profile: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isPending) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="bg-[#0D0C22] min-h-screen text-white">
      <div className="w-11/12 mx-auto py-10 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">My Profile</h2>
          {!isEditing && (
            <button onClick={handleEdit} className="btn btn-primary btn-sm">
              Edit Profile
            </button>
          )}
        </div>

        {/* Display Mode */}
        {!isEditing ? (
          <div className="space-y-6">
            <div className="bg-[#1A1833] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <p className="font-medium">{user?.name || "N/A"}</p>
                </div>
                <div>
                  <span className="text-gray-400">Email:</span>
                  <p className="font-medium">{user?.email || "N/A"}</p>
                </div>
                <div>
                  <span className="text-gray-400">Date of Birth:</span>
                  <p className="font-medium">{profileData.dob || "N/A"}</p>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <p className="font-medium">{profileData.phone || "N/A"}</p>
                </div>
                <div>
                  <span className="text-gray-400">Gender:</span>
                  <p className="font-medium capitalize">
                    {profileData.gender || "N/A"}
                  </p>
                </div>
                <div>
                  <span className="text-gray-400">Nationality:</span>
                  <p className="font-medium">
                    {profileData.nationality || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1833] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                Address Information
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Current Address:</span>
                  <p className="font-medium">
                    {profileData.currentAddress || "N/A"}
                  </p>
                </div>
                <div>
                  <span className="text-gray-400">Permanent Address:</span>
                  <p className="font-medium">
                    {profileData.permanentAddress || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1833] p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                Educational Information
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <span className="text-gray-400">University:</span>
                  <p className="font-medium">
                    {profileData.university || "N/A"}
                  </p>
                </div>
                <div>
                  <span className="text-gray-400">Semester:</span>
                  <p className="font-medium">{profileData.semester || "N/A"}</p>
                </div>
                <div>
                  <span className="text-gray-400">CGPA:</span>
                  <p className="font-medium">{profileData.cgpa || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Edit Mode */
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="bg-[#1A1833] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Edit Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">
                    Date of Birth
                  </label>
                  <input
                    name="dob"
                    value={profileData.dob}
                    onChange={handleChange}
                    type="date"
                    className="input input-bordered bg-[#2D2B4A] text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="input input-bordered bg-[#2D2B4A] text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">
                    Nationality
                  </label>
                  <input
                    name="nationality"
                    value={profileData.nationality}
                    onChange={handleChange}
                    placeholder="Nationality"
                    className="input input-bordered bg-[#2D2B4A] text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">Gender</label>
                  <div className="flex gap-6 mt-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={profileData.gender === "male"}
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
                        checked={profileData.gender === "female"}
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
                        checked={profileData.gender === "other"}
                        onChange={handleChange}
                        className="radio radio-primary"
                      />
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1833] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Edit Address Information
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">
                    Current Address
                  </label>
                  <textarea
                    name="currentAddress"
                    value={profileData.currentAddress}
                    onChange={handleChange}
                    placeholder="Current Address"
                    className="textarea textarea-bordered bg-[#2D2B4A] text-white h-24"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">
                    Permanent Address
                  </label>
                  <textarea
                    name="permanentAddress"
                    value={profileData.permanentAddress}
                    onChange={handleChange}
                    placeholder="Permanent Address"
                    className="textarea textarea-bordered bg-[#2D2B4A] text-white h-24"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#1A1833] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Edit Educational Information
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">
                    University Name
                  </label>
                  <input
                    name="university"
                    value={profileData.university}
                    onChange={handleChange}
                    placeholder="University Name"
                    className="input input-bordered bg-[#2D2B4A] text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">Semester</label>
                  <input
                    name="semester"
                    value={profileData.semester}
                    onChange={handleChange}
                    placeholder="Semester"
                    className="input input-bordered bg-[#2D2B4A] text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-300 mb-2">CGPA</label>
                  <input
                    name="cgpa"
                    value={profileData.cgpa}
                    onChange={handleChange}
                    placeholder="CGPA"
                    className="input input-bordered bg-[#2D2B4A] text-white"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-outline btn-secondary"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Updating...
                  </>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
