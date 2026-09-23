import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
    return (
        <div className="app-layout">
            <Sidebar></Sidebar>

            <div className="main-section">
                <Navbar></Navbar>
                <main className="content">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout