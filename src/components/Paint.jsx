// import React from 'react'

import { useContext, useEffect, useState } from "react";
// import { BrandData } from "../data/data";
import Button from "./Button";
import ThemeContext from "../context/ThemeContext";
import { CarChanges } from "../data/data";

const Paint = () => {
  const [selected, setSelected] = useState(0);
  const { mode } = useContext(ThemeContext);
  useEffect(() => {
    setTimeout(() => {
      if (selected === 0) {
        setSelected(1);
      } else if (selected === 1) {
        setSelected(2);
      } else if (selected === 2) {
        setSelected(0);
      }
    }, 8000);
  }, [selected]);
  return (
    <div className="w-[100%] h-auto py-[50px] mt-4 flex justify-center items-center gap-28">
      <div className="flex-1 relative left-[50px] bg-white rounded-[50px] w-[500px] h-[400px] justify-center items-center">
        <img
          src={CarChanges[selected].src}
          alt=""
          width="600px"
          onKeyDown={() => {
            selected === 0 ? setSelected(1) : setSelected(0);
          }}
          className={`cursor-pointer rounded-[100px]  h-[400px] ${mode === 'light' ? 'bg-transparent' :  'mix-blend-multiply'} hover:scale-105 bg-white border-none outline-none rotate-car transition-all`}
        />
      </div>
      <div className=" pr-[50px] pb-[80px]">
        <h1
          className={`text-2xl font-bold font-serif leading-relaxed ${
            mode === "light" ? "text-emerald-700" : "text-white"
          } mb-3 capitalize`}
        >
          We are able to paint all brands <br /> Of Luxurious and premium cars.
        </h1>
        <p className=" max-w-xl text-gray-500 mb-5  pr-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          pariatur? Voluptate tenetur corporis delectus minima nulla dignissimos
          voluptates eos, dolorum sapiente autem facilis, cupiditate, id natus
          soluta quis illo et ea. Eos beatae et in itaque sit natus commodi,
          quos, nihil tempora perspiciatis ea?
        </p>
        <div className="relative top-[20px] right-[110px]">
          <Button text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Paint;
