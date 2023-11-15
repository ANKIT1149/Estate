import { AboutSection, HeroSection, Navbar } from "../components"

const Home = () => {
  return (
    <>
       <div className=" w-[100%] h-screen overflow-hidden">
         <Navbar />
         <HeroSection />
         <AboutSection />
       </div>
    </>
  )
}

export default Home
