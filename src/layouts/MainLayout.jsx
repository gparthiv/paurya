import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"

function MainLayout() {
  // isSidebarOpen to store current state and setIsSidebarOpen to update states 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* leftside Sidebar */}
      {/* && to render only when both true ie isSidebarOpen is toggled and SideBar there */}
      {isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}

      {/* rightside main content */}
      <div className={`flex flex-1 flex-col transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}>

        {/* upper part */}
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* changing part; outlet */}
        <main className="p-4">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default MainLayout