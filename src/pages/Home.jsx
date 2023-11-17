import { AboutSection, HeroSection, Status} from "../components"

const Home = () => {
  return (
    <>
       <div className=" w-[100%] h-screen overflow-hidden">
         <HeroSection />
         <Status />
         <AboutSection />
       </div>
    </>
  )
}

export default Home
