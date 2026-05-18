import { Outlet } from "react-router-dom"

import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"

function MainLayout() {
  return (
    <div className="flex min-h-screen">

      {/* leftside Sidebar */}
      <Sidebar />

      {/* rightside main content */}
      <div className="flex-1 flex flex-col">

        {/* upper part */}
        <Navbar />

        {/* changing part; outlet */}
        <main className="p-4">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default MainLayout