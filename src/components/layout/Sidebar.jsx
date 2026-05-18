import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r p-4">

      {/* App Title  */}
      <h1 className="text-2xl font-bold mb-8">
        Paurya
      </h1>

      {/* Navigation   */}
      <nav className="flex flex-col gap-4">

        <Link to="/" className="hover:text-blue-500 transition">
          Dashboard</Link>
        <Link to="/issues" className="hover:text-blue-500 transition">
          Issues</Link>
        <Link to="/rep" className="hover:text-blue-500 transition">
          Representatives </Link>

      </nav>

    </aside>
  )
}


export default Sidebar