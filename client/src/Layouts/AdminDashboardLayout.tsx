import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = ()=>{
    const[open, setOpen]= useState(true);
   return(
    <div className="flex max-h-screen">
        <AdminSidebar open={open} setOpen={setOpen}/>
        <div className="flex flex-1 flex-col">
            <Outlet/>
        </div>
    </div>
   )
}

export default AdminDashboardLayout;