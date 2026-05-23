import { NavLink } from "react-router-dom";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-64 border-r bg-white p-4 ">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          PAURYA
        </h1>

        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 transition ${isActive
              ? "bg-blue-100 text-blue-600 font-medium"
              : "hover:bg-gray-100"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/issues"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 transition ${isActive
              ? "bg-blue-100 text-blue-600 font-medium"
              : "hover:bg-gray-100"
            }`
          }
        >
          Issues
        </NavLink>

        <NavLink
          to="/rep"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 transition ${isActive
              ? "bg-blue-100 text-blue-600 font-medium"
              : "hover:bg-gray-100"
            }`
          }
        >
          Representatives
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;