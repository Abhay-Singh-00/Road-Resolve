import React from "react";

interface LoadingPageProps {
  message?: string;
  subMessage?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  message = "Preparing your dashboard...",
  subMessage = "Loading data, please wait...",
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen flex items-center justify-center bg-gray-50 p-6"
    >
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* LEFT SIDE: Logo + Text */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4">
            <AnimatedLogo className="w-24 h-24" />

            <div>
              <h1 className="text-3xl font-bold text-gray-800">ResolveIt</h1>
              <p className="text-sm text-gray-500">Road Grievance Dashboard</p>
            </div>
          </div>

          <div>
            <p className="text-gray-700 font-medium">{message}</p>
            <p className="text-sm text-gray-500">{subMessage}</p>
          </div>

          {/* Loading dots */}
          <div className="flex gap-2 mt-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-bounceDelay"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-bounceDelay200"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-bounceDelay400"></span>
          </div>
        </div>

        {/* RIGHT SIDE: Skeleton Cards */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-5 shadow border border-gray-100"
            >
              <div className="flex justify-between">
                <div className="w-24 h-5 bg-gray-200 rounded shimmer"></div>
                <div className="w-12 h-5 bg-gray-200 rounded shimmer"></div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="w-full h-3 bg-gray-200 rounded shimmer"></div>
                <div className="w-5/6 h-3 bg-gray-200 rounded shimmer"></div>
                <div className="w-2/3 h-3 bg-gray-200 rounded shimmer"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LoadingPage;

/* ------------------- Logo Component ------------------- */

const AnimatedLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="#F59E0B"
        strokeWidth="2"
        className="opacity-20"
      />

      <g transform="translate(8 8)">
        <path
          d="M12 6 C18 4, 28 4, 34 6 C38 7.5, 40 11, 38 14 C36 18, 30 22, 26 28 C22 34, 18 36, 14 36"
          stroke="#1F2937"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="logo-draw"
        />
        <circle cx="28" cy="10" r="3.2" fill="#F59E0B" stroke="#111827" />
      </g>
    </svg>
  );
};
