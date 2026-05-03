"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D0C22] text-white text-center px-4">
      <h1 className="text-5xl font-bold text-red-500">Oops!</h1>

      <h2 className="text-2xl mt-4">Something went wrong</h2>

      <p className="text-white/60 mt-2 max-w-md">
        We’re sorry for the inconvenience. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="btn btn-primary mt-6 rounded-full"
      >
        Try Again
      </button>
    </div>
  );
}
