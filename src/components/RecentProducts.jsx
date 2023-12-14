// import React from 'react'

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Products } from "../data/data";
import { HiMiniStar } from "react-icons/hi2";
const RecentProducts = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className="w-[100%] h-auto p-[30px] mt-8 mx-auto">
      <h1
        className={`text-3xl font-bold font-serif  shadow-inner shadow-black w-fit ${
          mode === "light" ? "text-red-700" : "text-white"
        }`}
      >
        Recent Products
      </h1>
      <div className="mt-4 mb-3 p-10 grid grid-cols-3 gap-8">
        {Products.map((product, idx) => (
          <div
            key={idx}
            className="w-[350px] h-[auto] bg-slate-300 border-none outline-none rounded-lg p-5"
          >
            <img src={product.img} alt="" className="mx-auto  mb-5 w-[400px] h-[250px] rounded-lg hover:scale-105 transition-all"/>
            <h1 className="ml-4 mb-1 font-bold font-serif text-xl leading-relaxed">{product.title}</h1>
            <p className="ml-4 mb-3 font-semibold font-sans leading-normal text-gray-700"> {product.des}</p>
            <div className="flex gap-12 mt-3 mb-2 ml-4">
              <h3 className=" font-bold font-serif text-red-900 text-lg">{product.price}</h3>
              <div className="flex gap-1 mt-1">
                <HiMiniStar color="orange"/>
                <HiMiniStar color="orange"/>
                <HiMiniStar color="orange"/>
                <HiMiniStar color="orange"/>
                <HiMiniStar color="orange"/>
              </div>
            </div>
            <div className="flex justify-between mt-6 gap-5">
               <button className="border-2 border-red-700 w-[180px] p-2 rounded-lg bg-red-700 text-xl hover:bg-black  transition-all hover:border-black font-bold font-serif text-white">Add To Cart</button>
               <button className="border-2 border-blue-600 w-[180px] p-2 rounded-lg bg-blue-600 text-xl font-bold font-serif text-white hover:bg-transparent hover:text-black transition-all">Know More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
