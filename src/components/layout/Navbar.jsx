function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 sm:px-6">
      
      {/* Left Side */}
      <div className="flex items-center gap-4">

        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-2xl"
          >
            ☰
          </button>
        )}

        <h1 className="text-xl font-semibold">
          Paurya Logo
        </h1>

      </div>

      {/* Right Side */}
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        PG
      </div>
    </header>
  )
}

export default Navbar