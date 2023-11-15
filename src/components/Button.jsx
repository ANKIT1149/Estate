// import React from 'react'

import { NavLink } from "react-router-dom";

const Button = () => {
  return (
    <NavLink
      to="login"
      className={({ isActive }) =>
        ` font-bold font-serif capitalize leading-normal relative left-28 hover:bg-transparent hover:text-black cursor-pointer transition-all  ${
          isActive ? ' text-teal-600' : " text-white"
        } ${isActive ? "bg-transparent" : " bg-red-700"} text-xl border-2 ${isActive ? ' border-teal-600' : 'border-red-700' } outline-none w-[200px] h-[auto] p-3 rounded-lg `
      }
    >Shop Now</NavLink>
  );
};

export default Button;
