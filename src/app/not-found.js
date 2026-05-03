import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D0C22] text-white text-center px-4">
      <h1 className="text-6xl font-bold text-amber-300">404</h1>

      <h2 className="text-2xl mt-4 font-semibold">Page Not Found</h2>

      <p className="text-white/60 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link href="/" className="btn btn-primary mt-6 rounded-full">
        Go Home
      </Link>
    </div>
  );
}
