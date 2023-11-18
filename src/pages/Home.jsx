import { AboutSection,  HeroSection, Paint, Status} from "../components"
import Brand from "../components/Brand";

const Home = () => {
  return (
    <>
       <div className=" w-[100%] h-screen ">
         <HeroSection />
         <Status />
         <Brand />
         <Paint />
         <AboutSection />
       </div>
    </>
  )
}

export default Home
