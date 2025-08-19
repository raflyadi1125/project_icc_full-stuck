import About from "../components/section/About"
import Hero from "../components/section/Hero"

const Homepage = () => {
  return (
    <div className="h-[2000px] bg-gray-800">
        <Hero/>
        <About/>
    </div>
  )
}

export default Homepage