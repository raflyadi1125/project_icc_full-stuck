import About from "../components/section/About"
import Hero from "../components/section/Hero"
import Layanan from "../components/section/layanan"

const Homepage = () => {
  return (
    <div className="h-[1200px] md:h-[1297px] bg-gray-800">
        <Hero/>
        <About/>
        <Layanan/>
    </div>
  )
}

export default Homepage