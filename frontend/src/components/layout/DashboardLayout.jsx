import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DashboardLayout() {
    return (
        <div className="app-layout">
            <Sidebar></Sidebar>

            <div className="main-section">
                <Navbar></Navbar>
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout