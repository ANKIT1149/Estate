// import React from 'react'

import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext";

const Intro = () => {

  const { mode } = useContext(ThemeContext);
  return (
    <div className="w-[100%] h-[auto] flex max-sm:flex-col justify-center items-center gap-12 p-5">
    <div className=" mb-5 p-4">
      <h1 className={`text-2xl text-emerald-800 font-serif font-bold leading-relaxed capitalize mb-4 ${mode === "dark" ? 'text-white' : "text-emerald-800"}`}>Want to get in touch with  <br /> us to get regular updates.</h1>
      <p className=" max-w-xl text-gray-500 mb-3  pr-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quo
        quaerat architecto aliquam doloribus recusandae saepe dolorum a iure
        id doloremque impedit deleniti, enim deserunt inventore ratione fuga
        minus, possimus aliquid labore?
      </p>
      <div className="relative  top-5">
        <button className="w-[200px] border-none bg-red-700 p-[10px] font-bold font-serif text-white text-2xl rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all">Contact Us</button>
      </div>
      {/* <button onClick={() => addcart()} className="mt-10">add</button>
      <button onClick={() => deletecart()} className="ml-5">delete</button> */}
    </div>
    <div className=" flex-3 mb-4 ml-5">
       <img src="https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded-lg"/>
    </div>
  </div>
  )
}

export default Intro
