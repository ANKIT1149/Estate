// import React from 'react'
import { useContext } from "react";
// import Brand2 from "../assets/Brand2.jpg";
import ThemeContext from "../context/ThemeContext";
import { BrandData } from "../data/data";
// import Brand3 from "../assets/HeroSectionImage.jpeg";
const Brand = () => {
  const {mode} = useContext(ThemeContext)
  return (
    <div className="w-[100%] h-auto p-[50px] max-sm:px-0 mt-8 mx-[50px] max-sm:mx-0">
      <h1 className={`text-3xl font-bold font-serif  shadow-inner shadow-black w-fit ${mode === "light" ? "text-red-700" : 'text-white'}`}>
        Most Popular Brands
      </h1>
      <div className=" max-sm:flex-col flex justify-center items-center gap-8 mt-8 mb-5">
       {BrandData.map((BrandData) => (
           <div className="mt-2 p-4 max-sm:p-0 relative BrandData" key={BrandData.BrandImg}>
           <img
             src={BrandData.BrandImg}
             alt=""
             width="400px"
             height="500px"
             className=" rounded-xl hover:scale-90 transition-all cursor-pointer"
           />
           <h1 className=" absolute top-[40%] left-[35%] text-2xl text-center font-bold shadow-inner shadow-white show">{BrandData.BrandText}</h1>
         </div>
       ))}
        
      </div>
    </div>
  );
};

export default Brand;
