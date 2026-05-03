import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


const MyProfile = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    console.log("session", session);

    const user = session?.user;
    if(!user){
        redirect('/auth/signin')
    }
    
    return (
      <div className="bg-[#0D0C22] ">
        <div className="w-11/12 mx-auto py-10">
          <h2 className="text-3xl">Profile </h2>
          <p className="text-white/50">View all your profile details here.</p>
          <div className="flex justify-center" >
            <Link href="/curriculum" className="btn btn-success">
              Course Curriculum
            </Link>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;