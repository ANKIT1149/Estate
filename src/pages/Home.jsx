import { AboutSection, HeroSection} from "../components"

const Home = () => {
  return (
    <>
       <div className=" w-[100%] h-screen overflow-hidden">
         <HeroSection />
         <AboutSection />
       </div>
    </>
  )
}

export default Home
