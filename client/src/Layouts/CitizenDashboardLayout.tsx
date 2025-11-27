import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const CitizenDashboardLayout = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="bg-gray-100 flex">
           <Sidebar open={open} setOpen={setOpen}/>
            <div className="flex-1">
                <button setOpen={()=>setOpen(!open)} className="md:hidden mb-4 p-2 bg-gray-200 rounded">
                    ☰ Menu
                </button>
                <Outlet/>
            </div>
        </div>
    )
} 
export default CitizenDashboardLayout;