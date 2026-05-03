export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D0C22] text-white">
      <span className="loading loading-spinner loading-lg text-amber-300"></span>

      <p className="mt-4 text-white/60">Loading, please wait...</p>
    </div>
  );
}
