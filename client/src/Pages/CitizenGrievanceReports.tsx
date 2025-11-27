import React, { useState } from "react";

interface Report {
  id: number;
  category: string;
  description: string;
  status: string;
  state: string;
  city: string;
  location: string;
  createdAt: string;
}

const CitizenGrievanceReports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: 101,
      category: "Road Damage",
      description: "Huge potholes near main market.",
      status: "Pending",
      state: "Uttar Pradesh",
      city: "Kanpur",
      location: "Kanpur Nagar, UP",
      createdAt: "2025-11-20",
    },
    {
      id: 102,
      category: "Garbage Issue",
      description: "Garbage pile not collected for 5 days.",
      status: "In Review",
      state: "Uttar Pradesh",
      city: "Lucknow",
      location: "Nagar Nigam Colony",
      createdAt: "2025-11-19",
    },
    {
      id: 103,
      category: "Street Light",
      description: "Street lights not working.",
      status: "Resolved",
      state: "Delhi",
      city: "New Delhi",
      location: "Sector 4, Block C",
      createdAt: "2025-11-18",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.description.toLowerCase().includes(search.toLowerCase()) ||
      report.location.toLowerCase().includes(search.toLowerCase()) ||
      report.state.toLowerCase().includes(search.toLowerCase()) ||
      report.city.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || report.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-xl p-6 border-t-4 border-amber-400">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          Citizen Grievance Reports
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-5">
          <input
            type="text"
            placeholder="Search by state, city, issue..."
            className="border p-2 rounded w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded w-full md:w-1/3"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All</option>
            <option>Road Damage</option>
            <option>Street Light</option>
            <option>Garbage Issue</option>
            <option>Water Supply</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg min-w-[700px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Greivance ID</th>
                <th className="p-3 border text-left">Category</th>
                <th className="p-3 border text-left">State</th>
                <th className="p-3 border text-left">City</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Date</th>
                <th className="p-3 border text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredReports.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center p-4 text-gray-500">
                    No reports found
                  </td>
                </tr>
              ) : (
                filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{report.id}</td>
                    <td className="p-3 border">{report.category}</td>
                    <td className="p-3 border">{report.state}</td>
                    <td className="p-3 border">{report.city}</td>
                    <td className="p-3 border">{report.status}</td>
                    <td className="p-3 border">{report.createdAt}</td>
                    <td className="p-3 border text-center">
                      <button
                        onClick={() => setSelectedReport(report)}
                        className="px-3 py-1 bg-amber-400 text-white rounded hover:bg-amber-500"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Report Details (ID: {selectedReport.id})
            </h3>

            <p>
              <strong>Category:</strong> {selectedReport.category}
            </p>
            <p>
              <strong>Status:</strong> {selectedReport.status}
            </p>
            <p>
              <strong>State:</strong> {selectedReport.state}
            </p>
            <p>
              <strong>City:</strong> {selectedReport.city}
            </p>
            <p>
              <strong>Location:</strong> {selectedReport.location}
            </p>

            <p className="mt-2">
              <strong>Description:</strong>
            </p>
            <p className="bg-gray-100 p-3 rounded mt-1">
              {selectedReport.description}
            </p>

            <div className="text-right mt-5">
              <button
                onClick={() => setSelectedReport(null)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CitizenGrievanceReports;
