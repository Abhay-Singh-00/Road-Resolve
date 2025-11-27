import { useState } from "react";

const ReportGrievance = () => {
  const statesWithCities = {
    "Uttar Pradesh": ["Kanpur", "Lucknow", "Varanasi", "Agra", "Noida"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Delhi": ["New Delhi", "Dwarka", "Karol Bagh"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangalore"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  };

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(statesWithCities[state] || []);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-gray-800">Grievance Registration Form</h1>

      <form
        className="bg-white shadow-lg w-full max-w-2xl mt-6 rounded-lg p-6 flex flex-col gap-6 border-t-4 border-amber-400"
      >

        {/* State Dropdown */}
        <div className="flex flex-col">
          <label className="font-medium">State</label>
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="border p-2 rounded shadow-sm focus:outline-none focus:ring focus:ring-amber-300"
          >
            <option value="">Select State</option>
            {Object.keys(statesWithCities).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div className="flex flex-col">
          <label className="font-medium">City</label>
          <select
            disabled={!selectedState}
            className="border p-2 rounded shadow-sm focus:outline-none focus:ring focus:ring-amber-300"
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="font-medium">Category of Issue</label>
          <select className="border p-2 rounded shadow-sm focus:outline-none focus:ring focus:ring-amber-300">
            <option>Select Category</option>
            <option>Road Damage</option>
            <option>Sewage / Drainage</option>
            <option>Garbage / Sanitation</option>
            <option>Public Safety</option>
            <option>Other Issue</option>
          </select>
        </div>


        {/* Issue Description */}
        <div className="flex flex-col">
          <label className="font-medium">Describe your Issue</label>
          <textarea
            className="border p-2 rounded shadow-sm h-28 resize-none focus:outline-none focus:ring focus:ring-amber-300"
            placeholder="Explain the issue in detail..."
          />
        </div>

        {/* File Upload */}
        <div className="flex flex-col">
          <label className="font-medium">Upload Proof (optional)</label>
          <input
            type="file"
            className="border p-2 rounded shadow-sm bg-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-lg font-semibold shadow"
        >
          Submit Grievance
        </button>
      </form>
    </div>
  );
};

export default ReportGrievance;
