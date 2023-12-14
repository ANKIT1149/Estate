// import React from 'react'

import { useContext } from "react"
import { FeatureSection } from "../data/data"
import ThemeContext from "../context/ThemeContext"
import Brand1 from "../assets/Brand1.jpg";

const Feature = () => {
    const {mode} = useContext(ThemeContext)
  return (
  <>
      <div className="w-[100%] h-auto py-[30px] mt-4 flex justify-center items-center gap-28">
        <div className="flex-1 relative left-[50px] justify-center items-center">
            <h1 className={`capitalize text-2xl font-bold ${mode === "dark" ? 'text-white' : 'text-emerald-700'} font-serif leading-relaxed mb-3`}>We provide something different <br /> extraoridary  to Our  customers.</h1>
           {FeatureSection.map((feature) => (
            <>
               <div key={feature.title} className="flex mb-2">
                 <i>{feature.icon}</i>
                 <h3 className={`text-2xl capitalize font-serif font-semibold ${mode === 'light' ? 'text-red-800' : 'text-green-600'}`}>{feature.title}</h3>
             </div>
             <p className={`mb-2 max-w-lg font-sans ${mode === 'dark' ? 'text-gray-400' : 'text-black'} text-lg capitalize font-medium`}>{feature.subTitle}</p>
            </>
           ))}
        </div>
        <div className="flex-1 justify-center items-center mr-12 mt-8">
        <img src={Brand1} alt="" className="rounded-lg hover:scale-110 transition-all"/>
    </div>
    </div>
    
  </>
  )
}

export default Feature
