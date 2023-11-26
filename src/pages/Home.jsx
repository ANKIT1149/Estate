import { AboutSection,  Feature,  HeroSection, Paint, RecentProducts, Status} from "../components"
import Brand from "../components/Brand";

const Home = () => {
  return (
    <>
       <div className=" w-[100%] h-screen overflow-x-hidden">
         <HeroSection />
         <Status />
         <Brand />
         <Paint />
         <Feature />
         <RecentProducts />
         <AboutSection />
       </div>
    </>
  )
}

export default Home
