import React from "react";

const PersonalizedWelcome: React.FC = () => {
  const userName = "Abhay"; 

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-amber-400 mb-6">
      <h1 className="text-3xl font-bold text-gray-700">
        Welcome back, <span className="text-amber-500">{userName}</span>!
      </h1>

      <p className="text-gray-500 mt-1">{today}</p>

      <p className="mt-3 text-gray-600">
        We’re glad to have you here. You can report road issues, track complaint
        status, and view all your submitted grievances right from your
        dashboard.
      </p>
    </div>
  );
};

export default PersonalizedWelcome;
