import React from "react";

type TableRow = {
    [key: string]: any;
};

interface DynamicTableProps {
    data?: TableRow[];
    striped?: boolean;
    hoverable?: boolean;
    centered?: boolean;
    noHeader?: boolean;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
    data,
    striped = true,
    hoverable = true,
    centered = false,
    noHeader = false,
}) => {

    // --- Clean Citizen Dashboard Dummy Data ---
    const dummyData: TableRow[] = [
        {
            grievanceId: "GRV-101",
            state: "Uttar Pradesh",
            city: "Kanpur",
            issue: "Road pothole near main market",
            status: "Pending",
            submittedOn: "2025-01-12",
        },
        {
            grievanceId: "GRV-102",
            state: "Delhi",
            city: "Dwarka",
            issue: "Streetlight not working",
            status: "In Progress",
            submittedOn: "2025-01-10",
        },
        {
            grievanceId: "GRV-103",
            state: "Maharashtra",
            city: "Mumbai",
            issue: "Garbage not collected",
            status: "Resolved",
            submittedOn: "2025-01-08",
        },
        {
            grievanceId: "GRV-104",
            state: "Gujarat",
            city: "Ahmedabad",
            issue: "Broken traffic signal",
            status: "Pending",
            submittedOn: "2025-01-05",
        },
    ];

    // If no data passed, use dummy data
    const tableData = data && data.length > 0 ? data : dummyData;

    if (!tableData || tableData.length === 0) {
        return (
            <div className="p-6 bg-white rounded-xl shadow text-center text-gray-500">
                No records found.
            </div>
        );
    }

    const headers = Object.keys(tableData[0]);

    const formatHeader = (text: string): string => {
        return text
            .replace(/_/g, " ")
            .replace(/([A-Z])/g, " $1")
            .trim()
            .replace(/^./, (str) => str.toUpperCase());
    };

    const formatValue = (val: any): string => {
        if (val === null || val === undefined) return "—";
        if (typeof val === "object") return JSON.stringify(val);
        return val.toString();
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow  overflow-x-auto border-t-4 border-amber-400 mt-4">
            <table className="min-w-full divide-y divide-gray-200">

                {!noHeader && (
                    <thead className="bg-gray-100">
                        <tr>
                            {headers.map((head, index) => (
                                <th
                                    key={index}
                                    className={`px-4 py-3 text-sm font-semibold text-gray-700 uppercase tracking-wider 
                                    ${centered ? "text-center" : "text-left"}`}
                                >
                                    {formatHeader(head)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}

                <tbody className="divide-y divide-gray-200">
                    {tableData.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`${striped && rowIndex % 2 !== 0 ? "bg-gray-50" : ""} 
                                ${hoverable ? "hover:bg-gray-100 transition" : ""}`}
                        >
                            {headers.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`px-4 py-3 text-sm text-gray-700 max-w-xs truncate 
                                    ${centered ? "text-center" : "text-left"}`}
                                    title={formatValue(row[col])}
                                >
                                    {formatValue(row[col])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default DynamicTable;
