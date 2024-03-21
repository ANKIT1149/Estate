// import React from 'react'

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const AppStore = () => {
    const {mode} = useContext(ThemeContext)
  return (
    <div className="w-[100%] h-auto p-5 overflow-hidden ">
    <h1
      className={`text-3xl max-sm:text-xl font-bold font-serif mt-5 shadow-inner capitalize shadow-black w-fit ${
        mode === "light" ? "text-red-700" : "text-white"
      }`}
    >
      Want To Get Our Mobile Version
    </h1>
      <div className="p-5 mt-5 flex justify-center items-center">
         <img src="https://assets.mediamodifier.com/mockups/63f48d649425fc10491a29f1/iphone-app-banner-design-with-text.jpg" alt="" className="w-[800px] rounded-b-[10%] rounded-t-[3%]"/>
      </div>
    </div>
  )
}

export default AppStore;
