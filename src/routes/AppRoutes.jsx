import { Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"


import Dashboard from "../pages/Dashboard"
import Representatives from "../pages/Representatives"
import Issues from "../pages/Issues"
import Heatmap from "../pages/Heatmap"


function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Dashboard />} />
        <Route path="issues" element={<Issues />} />
        <Route path="rep" element={<Representatives />} />
        <Route path="heatmap" element={<Heatmap />} />

      </Route>
    </Routes>
  )
}

export default AppRoute