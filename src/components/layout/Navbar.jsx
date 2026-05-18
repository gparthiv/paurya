function Navbar() {
  return (
    <header className="h-16 border=b px-6 flex items-center justify-between">

      {/* left side  */}
      <h1 className="text-xl font-semibold">
        Paurya Dashboard
      </h1>

      {/* Right Side */}
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        P
      </div>
    </header>
  )
}

export default Navbar