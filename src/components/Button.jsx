/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
// import React from 'react'

// import { useContext } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
// import ThemeContext from "../context/ThemeContext";

const Button = ({ text }) => {
  const {mode} = useContext(ThemeContext);
  return (
    <NavLink
      to={text === "Login Now" ? "login" : "Logout" ? "/" : "Explore Now"}
      className={` font-bold font-serif capitalize leading-normal relative left-28 hover:bg-transparent hover:${mode === 'light' ? 'text-black' : ' text-white'} cursor-pointer transition-all 
          text-white
         bg-red-700 text-lg border-2
       border-red-700
           
       
         outline-none w-[100px] h-[auto] p-3 rounded-lg ${mode === 'light' ? 'text-white' : 'text-white'}`}
    >
      {text}
    </NavLink>
  );
};

export default Button;
