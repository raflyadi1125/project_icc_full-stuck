import { Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage"
import About from "../components/section/About"
import Layanan from "../components/section/layanan"

import Clientpage from "../pages/Clientpage"

export default function AppRouter () {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/layanan" element={<Layanan/>}/>
        <Route path="/client" element={<Clientpage/>}/>
    </Routes>
  )
}

