import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
      <div className="relative z-20">
        <fieldset className="fieldset bg-base-100/80 border-base-300 rounded-box w-2xl p-6 shadow-xl">
          <h2 className="text-4xl font-bold text-center py-4">Welcome Back!</h2>

          <p className="text-center py-2 text-xl">
            Pick up right where you left off and keep moving forward. Your
            learning journey{" "}
            <span className="font-bold text-amber-400">continues</span> here.
          </p>

          <input
            type="email"
            className="input w-full rounded-full outline-none"
            placeholder="Email"
          />

          <input
            type="password"
            className="input w-full rounded-full outline-none"
            placeholder="Password"
          />

          <p className="text-right text-blue-700 hover:underline">
            Forget Password?
          </p>

          <button className="btn btn-primary mt-4 rounded-full w-full">
            Login
          </button>

          <div className="flex items-center w-full pt-8">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex gap-4 justify-center py-4">
            <FaGoogle size={30} />
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
            <FaDiscord size={30} />
          </div>

          <Link href="/" className="pt-10 text-center  ">
            Not an account?{" "}
            <span className="text-blue-600 hover:underline">Register Now</span>
          </Link>
        </fieldset>
      </div>
    </div>
  );
};

export default LoginPage;
