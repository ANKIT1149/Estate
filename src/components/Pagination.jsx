/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ThemeContext from "../context/ThemeContext";

const Pagination = ({selected, setSelected, dLength}) => {
    // const length = setSelected(0)
    const {mode} = useContext(ThemeContext)
  return (
    <div className="w-100% p-8 mt-0 overflow-hidden">
      <div className="flex justify-center items-center gap-20 mt-0">
           <button className={`flex justify-center items-center`} onClick={() => {selected === 0 ? setSelected(dLength - 1) : setSelected((prev) => prev - 1)}}>
                 <FaArrowLeft   className=" w-[100px] height-[100px] bg-red-600 text-4xl font-serif p-1 border-none outline-none rounded-lg" color="white"/>
           </button>
           <div onClick={() => {setSelected(0)}} className={`flex flex-wrap ${mode === 'light' ? 'border-black' : 'border-white'} ${mode === 'light' ? 'text-white' : 'text-black '} hover:${mode === 'dark' ? 'text-white' : 'text-black transition-all'} ${mode === 'light' ? 'bg-black' : 'bg-white'} hover:bg-transparent cursor-pointer  justify-center items-center w-[50px] h-[50px] border-2   rounded-lg`}>
                 <h3 className= {`font-serif font-bold capitalize text-2xl`}>1</h3>
           </div>
           <div onClick={() => {setSelected(1)}} className={`flex flex-wrap ${mode === 'light' ? 'border-black' : 'border-white'} ${mode === 'light' ? 'text-white' : 'text-black '} hover:${mode === 'dark' ? 'text-white' : 'text-black transition-all'} ${mode === 'light' ? 'bg-black' : 'bg-white'} hover:bg-transparent cursor-pointer  justify-center items-center w-[50px] h-[50px] border-2 rounded-lg`}>
                 <h3 className={`font-serif font-bold capitalize text-2xl `}>2</h3>
           </div>
           <div onClick={() => {setSelected(2)}} className={`flex flex-wrap ${mode === 'light' ? 'border-black' : 'border-white'} ${mode === 'light' ? 'text-white' : 'text-black '} hover:${mode === 'dark' ? 'text-white' : 'text-black transition-all'} ${mode === 'light' ? 'bg-black' : 'bg-white'} hover:bg-transparent cursor-pointer  justify-center items-center w-[50px] h-[50px] border-2  rounded-lg`}>
                 <h3 className={`font-serif font-bold capitalize text-2xl `}>3</h3>
           </div>
           <button className="flex justify-center items-center hover:cursor-pointer " onClick={() => {selected === dLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)}}>
                 <FaArrowRight  className=" w-[100px] height-[100px] bg-red-600 text-4xl font-serif p-1 border-none outline-none rounded-lg" color="white"/>
           </button>
      </div>
    </div>
  )
}

export default Pagination
