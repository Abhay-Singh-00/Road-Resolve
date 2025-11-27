import React, {lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CitizenDashboardLayout from "./Layouts/CitizenDashboardLayout";
import CitizenGrievanceReports from "./Pages/CitizenGrievanceReports";
import ReportGrievance from "./Pages/ReportGrievance";
import LoadingPage from "./components/LoadingPage";
import AdminDashboardLayout from "./Layouts/AdminDashboardLayout";
import LoginPage from "./Pages/LoginPage";

const CitizenDashboard = lazy(()=> import("./Pages/CitizenDashboard"));

const AppRoutes = ()=>{
    return (
        <Suspense fallback={<LoadingPage/>}>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/citizen/" element={<CitizenDashboardLayout/>}>
                <Route index element={<CitizenDashboard/>}/>
                <Route path="reports" element={<CitizenGrievanceReports/>}/>
                <Route path="report" element={<ReportGrievance/>}/>
                <Route path="help" element={<div>Citizen Help Page</div>}/>
                <Route path="setting" element={<div>Citizen Setting Page</div>}/>
                </Route>
                <Route path="/admin" element={<AdminDashboardLayout/>}>

                </Route>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes;