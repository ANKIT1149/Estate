import { AboutSection,  Feature,   HeroSection, Paint, Partener, RecentProducts, Status, Work} from "../components"
import Brand from "../components/Brand";
import data from "../testinomialdata/data.json"
import Carousel from "../components/Caraousel";
import Testimonial from "../components/Feedback";
import React, { useState } from "react";
const Home = () => {
  const [transition, setTransition] = useState("scale");
  function changeTransition(transition: string) {
    setTransition(transition);
  }
  return (
    <>
       <div className=" w-[100%] h-auto overflow-x-hidden">
         <HeroSection />
         <Status />
         <Brand />
         <Paint />
         <Feature />
         <RecentProducts />
         <main className="w-full md:aspect-[1.8] md:w-[960px] lg:w-[1160px] xl:w-[1440px]">
        <Carousel changeTransition={changeTransition} transition={transition}>
          {data.map((item: any, i: number) => {
            return <Testimonial data={item} key={i} variants={transition} />;
          })}
        </Carousel>
      </main>
        <Partener />
        <Work />
         <AboutSection />
       </div>
    </>
  )
}

export default Home
