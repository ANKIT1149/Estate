// import React from 'react'

import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const RecentProducts = () => {
    const {mode} = useContext(ThemeContext)
  return (
      <div className="w-[100%] h-auto p-[50px] mt-8 mx-[50px]">
      <h1 className={`text-3xl font-bold font-serif  shadow-inner shadow-black w-fit ${mode === "light" ? "text-red-700" : 'text-white'}`}>
       Recent Products
      </h1>
    </div>
  )
}

export default RecentProducts
