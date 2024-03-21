// import React from 'react'

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Company = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className="w-[100%] h-auto p-5 overflow-hidden ">
      <h1
        className={`text-3xl max-sm:text-xl font-bold font-serif mt-5 shadow-inner capitalize shadow-black w-fit ${
          mode === "light" ? "text-red-700" : "text-white"
        }`}
      >
        Want To Know About Our History
      </h1>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 p-5 gap-3 mt-2 w-auto h-auto mx-auto  max-sm:p-0 max-sm:text-center">
         <div className="p-8 mr-2 overflow-hidden">
             <h1 className={`text-3xl capitalize ${mode === "light" ? "text-black" : "text-red-500"} font-bold font-serif`}>Carod Seller</h1>
             <h2 className={`text-2xl mt-4 font-semibold font-mono ${mode === 'light' ? "text-black" : "text-gray-300"}`}>Established on:- 03 March 2024 </h2>
             <p className={`text-lg mt-4  text-justify font-medium font-sans max-sm:mx-auto ${mode === 'light' ? "text-black" : 'text-gray-500'} max-w-2xl`}>Carod Seller is the type of service providing company. We provide services of selling the luxourious cars.We do agreement  with luxourious car brand to sell the car at home.We saves your time. You can buy all luxourious car brand at home at one click.We also need emloyee to work in company if you want to do job book appointment and submit resume to sheduelde your interview. We provide suitable environment to work. We provide cafet area, playground, silent room for work. </p>
             <div className="flex justify-between items-center gap-16 mt-6">
                <button type="submit" className="border-2 border-red-700 w-[180px] max-sm:w-[150px] p-2 max-sm:p-1 font-bold font-serif text-2xl max-sm:text-xl bg-red-700 text-white rounded-lg hover:bg-black hover:text-white cursor-pointer hover:border-black transition-all">Know More</button>
                <button type="submit" className="border-2 border-orange-700 w-[180px] max-sm:w-[150px] p-2 max-sm:p-1 font-bold font-serif text-2xl max-sm:text-xl bg-orange-700 text-white rounded-lg hover:bg-black hover:text-white cursor-pointer hover:border-black transition-all">Get Job</button>
             </div>
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <img src="https://media.istockphoto.com/id/182188795/photo/modern-office-building-exterior.jpg?s=612x612&w=0&k=20&c=EdYZcOf-dEILEuKBdmKQ175YJB5ybNemy6aQ-3xZaPE=" alt="" className="border-2 rounded-xl hover:scale-x-90 hover:border-red-600 transition-all"/>
          
        </div>
        </div>
    </div>
  );
};

export default Company;
