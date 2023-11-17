/* eslint-disable react/prop-types */
// import React from 'react'

// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import ThemeContext from "../context/ThemeContext";

const Button = ({ text }) => {
  // const {mode} = useContext(ThemeContext);
  return (
    <NavLink
      to={text === "Login Now" ? "login" : "about"}
      className={({ isActive }) =>
        ` font-bold font-serif capitalize leading-normal relative left-28 hover:bg-transparent hover:text-black cursor-pointer transition-all  ${
          isActive ? " text-teal-600" : " text-white"
        } ${isActive ? "bg-transparent" : " bg-red-700"} text-xl border-2 ${
          isActive ? " border-teal-600" : "border-red-700"
        } ${text === "Explore Now" ? 'bg-emerald-700' : "bg-red-700"} ${
          text === "Explore Now" ? "border-emerald-700" : "border-red-700"
        } outline-none w-[200px] h-[auto] p-3 rounded-lg `
      }
    >
      {text}
    </NavLink>
  );
};

export default Button;
