// import React from 'react'

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { CompanyCampus } from "../../data/data";

const Gallery = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className="w-[100%] h-auto p-5 overflow-hidden ">
      <h1
        className={`text-3xl font-bold font-serif  shadow-inner capitalize shadow-black w-fit ${
          mode === "light" ? "text-red-700" : "text-white"
        }`}
      >
        Images of our Company Inner Campus
      </h1>

      <div className="grid grid-cols-3 p-5 gap-3 mt-2 w-auto h-auto">
          {CompanyCampus.map((data, idx) => (
             <div key={idx} className="pt-2 mt-4">
                <img src={data.campus} alt=""  className="h-[300px] w-[400px] border-2 rounded-lg hover:scale-90 transition-all cursor-pointer"/>
             </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
