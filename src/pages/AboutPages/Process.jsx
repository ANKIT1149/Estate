// import React from 'react'

import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"

const Process = () => {
    const {mode} = useContext(ThemeContext);
  return (
    <div className="w-[100%] h-auto p-5 overflow-hidden max-sm:hidden">
    <h1
      className={`text-3xl font-bold font-serif mt-5 shadow-inner capitalize shadow-black w-fit ${
        mode === "light" ? "text-red-700" : "text-white"
      }`}
    >
      Process Of Buying Luxourious Car
    </h1>
       <div className="flex justify-center items-center relative">
        <div className="absolute top-16 left-[600px]">
             <h1 className={`text-3xl font-bold font-serif italic border-2 border-black bg-black text-white w-[150px] p-2 rounded-l-lg`}>Step 1</h1>
              <p className={`relative font-bold right-[250px] max-w-md mt-4 ${mode === 'light' ? "" : 'text-gray-300'}`}>If You are New User then signup using our form.<br /> If You already register then login the form.</p>
        </div>
        <div className="absolute top-[250px] right-[390px]">
             <h1 className={`text-3xl font-bold font-serif italic border-2 border-black bg-black text-white w-[150px] p-2 rounded-r-lg`}>Step 2</h1>
              <p className={`relative font-bold left-[50px] max-w-md mt-4 ${mode === 'light' ? "" : 'text-gray-300'}`}>Go To Product Page.Choose The Car that You <br /> Want To Buy.Then click on Get This Car Button</p>
        </div>
        <div className="absolute top-[450px] left-[600px]">
             <h1 className={`text-3xl font-bold font-serif italic border-2 border-black bg-black text-white w-[150px] p-2 rounded-l-lg`}>Step 3</h1>
              <p className={`relative font-bold right-[300px] max-w-md mt-4 ${mode === 'light' ? "" : 'text-gray-300'}`}>You Will redirected to form page. Fill all neccessary detail and attach the photo copy of document and submit the form.</p>
        </div>

        <div className="absolute top-[650px] right-[300px]">
             <h1 className={`text-3xl font-bold font-serif italic border-2 border-black bg-black text-white w-[150px] p-2 rounded-r-lg`}>Step 4</h1>
              <p className={`relative font-bold left-[50px] max-w-md mt-4 ${mode === 'light' ? "" : 'text-gray-300'}`}>After the submiting of form you will get authentication check notification on email verify that its you and your order confirmed.</p>
        </div>

        <div className="absolute top-[850px] left-[600px]">
             <h1 className={`text-3xl font-bold font-serif italic border-2 border-black bg-black text-white w-[150px] p-2 rounded-l-lg`}>Note:-</h1>
              <p className={`relative font-bold right-[350px] max-w-md mt-4 ${mode === 'light' ? "" : 'text-gray-300'}`}>Ensure That Your Mobile no. is Correct because after email verify you will get call of our employee regarding your order. Fil the Address correct so we deliver you car faster <br /> as soon as possible.</p>
        </div>
       <div className="mt-8 mx-auto p-2 w-[1px] h-[1000px] border-2 border-black rounded-lg bg-black"></div>
       </div>
    </div>
  )
}

export default Process
