// import React from 'react'
import { useContext } from "react";
import Logo from "../assets/Logo.jpeg";
import ThemeContext from "../context/ThemeContext";
const Login = () => {
  const {mode} = useContext(ThemeContext);
  return (
    <div className="flex justify-center items-center w-[100%] h-auto gap-0">
       <div className={` ${mode === 'light' ? 'bg-blue-600' : 'bg-red-700'} flex-1 w-[300px] h-[100vh] flex justify-center items-center flex-col`}>
           <img src={Logo} alt="" className=" mix-blend-multiply drop-shadow-2xl shadow-slate-700"/>
           <h1 className="mt-8 text-white text-3xl drop-shadow-xl shadow-white font-bold font-serif leading-normal capitalize text-center">Join with us To Start a Wonderful journey</h1>
       </div>
       <div className="bg-white flex-2 w-[900px]">
          
       </div>
    </div>
  )
}

export default Login
