import { Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Clientpage from "../pages/Clientpage"

export default function AppRouter () {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/client" element={<Clientpage/>}/>
    </Routes>
  )
}
