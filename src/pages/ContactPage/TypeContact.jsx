// import React from 'react'

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
// import { GiShakingHands } from "react-icons/gi";
import { Type } from "../../data/data";

const TypeContact = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className="w-[100%] h-auto p-[50px] max-sm:px-0 mt-8 mx-[50px] max-sm:mx-0">
      <h1
        className={`text-3xl font-bold font-serif  shadow-inner shadow-black w-fit ${
          mode === "light" ? "text-red-700" : "text-white"
        }`}
      >
        Ways to Contact Us
      </h1>
      <div className="flex justify-center items-center mx-5 overflow-hidden">
        <div className="mt-5 p-4 w-auto h-auto">
          {Type.map((data) => {
            const { title, detail, Icon } = data;
            return (
              <div className="flex gap-2 p-1 mt-8" key={title}>
                <Icon className=" mr-2 text-blue-700 text-[50px]" />
                <h1
                  className={`font-bold text-2xl mt-2 font-serif ${
                    mode === "light" ? "text-black" : "text-white"
                  }`}
                >
                  {" "}
                  {title}
                </h1>
                <p className={` text-justify max-w-md mt-2 font-semibold font-mono text-lg ${mode === 'light' ? 'text-black' : 'text-gray-200'} ${mode === 'light' ? 'font-semibold' : "font-light"}`}>
                  {detail}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-16">
            <img src="https://images.pexels.com/photos/5467596/pexels-photo-5467596.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-[350px] h-[500px] rounded-b-full rounded-t-full border-2"/>
        </div>
      </div>
    </div>
  );
};

export default TypeContact;
