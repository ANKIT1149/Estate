// import React from 'react'

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import NumberCounter from "number-counter";
const Status = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      className={`w-[80%] h-auto p-3 ${
        mode === "light" ? "bg-rose-500" : "bg-black"
      } shadow-slate-600 ${
        mode === "light" ? "shadow-2xl" : "shadow-lg"
      } mx-auto rounded-xl`}
    >
      <div className="flex justify-center items-center p-4 gap-8">
        <div className="flex justify-center items-center gap-3 flex-1">
          <NumberCounter
            className={`text-3xl font-bold font-mono ${
              mode === "light" ? "text-black" : "text-white"
            }`}
            start={0}
            end={55}
            postFix="+"
            delay={4}
          >
            M
          </NumberCounter>
          <h6 className="text-2xl font-semibold font-serif leading-normal text-white">
            Brands
          </h6>
        </div>
        <div className="flex justify-center items-center gap-3 flex-1">
          <NumberCounter
            className={`text-3xl font-bold font-mono ${
              mode === "light" ? "text-black" : "text-white"
            }`}
            start={0}
            end={38}
            postFix="M+"
            delay={4}
          >
            M
          </NumberCounter>
          <h6 className="text-2xl font-semibold font-serif leading-normal text-white">
            Vechiles Sold
          </h6>
        </div>
        <div className="flex justify-center items-center gap-3 flex-1">
          <NumberCounter
            className={`text-3xl font-bold font-mono ${
              mode === "light" ? "text-black" : "text-white"
            }`}
            start={0}
            end={550}
            postFix="M+"
            delay={4}
          >
            M
          </NumberCounter>
          <h6 className="text-2xl font-semibold font-serif leading-normal text-white">
            Happy Customer
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Status;
