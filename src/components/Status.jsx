// import React from 'react'

import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import { StatusData } from "../data/data"

const Status = () => {
    const {mode} = useContext(ThemeContext)
  return (
    <div className={`w-[80%] h-auto p-3 ${mode === "light" ? "bg-rose-500" : 'bg-black'} shadow-slate-600 ${mode === 'light' ? 'shadow-2xl' : 'shadow-lg'} mx-auto rounded-xl`}>
        <div className="flex justify-center items-center p-4 gap-8">
           {StatusData.map((data) => (
             <div key={data.Text} className="flex justify-center items-center gap-3 flex-1">
                <h1 className={`text-3xl font-bold font-mono ${mode === 'light' ? 'text-black' : 'text-white'}`}>{data.Brand}</h1>
                <h6 className="text-2xl font-semibold font-serif leading-normal text-white">{data.Text}</h6>
             </div>
           ))}
        </div>
    </div>
  )
}

export default Status
