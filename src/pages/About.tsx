
import AppStore from "./AboutPages/AppStore"
import Company from "./AboutPages/Company"
import Gallery from "./AboutPages/Gallery"
import AboutHome from "./AboutPages/Home"
import Intro from "./AboutPages/Intro"
import data from "../testinomialdata/data.json"
import Carousel from "../components/Caraousel";
import Testimonial from "../components/Feedback";
import React, { useState } from "react"
import Process from "./AboutPages/Process"

const About = () => {
  const [transition, setTransition] = useState("scale");
  function changeTransition(transition: string) {
    setTransition(transition);
  }
  return (
    <div className="w-full h-auto overflow-hidden">
       <AboutHome />
       <Intro />
       {/* PAgination Section */}
       <Gallery />
       <Company />
       <AppStore />
       <Process/>
       <main className="w-full md:aspect-[1.8] md:w-[960px] lg:w-[1160px] xl:w-[1440px]">
        <Carousel changeTransition={changeTransition} transition={transition}>
          {data.map((item: any, i: number) => {
            return <Testimonial data={item} key={i} variants={transition} />;
          })}
        </Carousel>
      </main>
    </div>
  )
}

export default About
