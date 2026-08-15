import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060608] text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <span className="text-[#FF5500] text-sm font-mono font-semibold uppercase tracking-wider">
          404 Error
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Page Not Found</h1>
        <p className="mt-4 text-sm text-slate-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold bg-[#FF5500] text-white hover:bg-[#FF6A1A] transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
