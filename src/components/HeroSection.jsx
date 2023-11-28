// import React from 'react'

import Button from "./Button";
import HeroImg from "../assets/HeroSectionImage.jpeg"
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
// import {useDispatch, useSelector} from "react-redux";
// import { addtoCart, deletefromCart } from "../Redux/CartSllice";
const HeroSection = () => {
  const {mode} = useContext(ThemeContext);
//  const dispatch = useDispatch();
//  const cartitem = useSelector((state) => state.carCart);
//  console.log(cartitem)
//  const addcart = () => {
//   dispatch(addtoCart('shirt'));
//  }

//  const deletecart = () => {
//    dispatch(deletefromCart('shirt'));
//  }
  return (
    <div className="w-[100%] h-[80vh] flex justify-center items-center gap-12 p-5">
      <div className=" mb-5 p-4">
        <h1 className={`text-3xl text-emerald-800 font-serif font-bold leading-relaxed capitalize mb-4 ${mode === "dark" ? 'text-white' : "text-emerald-800"}`}>We provide premium & luxorious <br /> cars  in good and  affordable deals.</h1>
        <p className=" max-w-xl text-gray-500 mb-3  pr-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quo
          quaerat architecto aliquam doloribus recusandae saepe dolorum a iure
          id doloremque impedit deleniti, enim deserunt inventore ratione fuga
          minus, possimus aliquid labore?
        </p>
        <div className="relative right-28 top-5">
        <Button text="Explore Now"/>
        </div>
        {/* <button onClick={() => addcart()} className="mt-10">add</button>
        <button onClick={() => deletecart()} className="ml-5">delete</button> */}
      </div>
      <div className=" flex-3 mb-4 ml-5">
         <img src={HeroImg} alt="HeroSection" width="600px" height="500px" className="border-2 outline-none drop-shadow-md rounded-2xl hover:scale-110 transition-all cursor-pointer"/>
      </div>
    </div>
  );
};

export default HeroSection;
