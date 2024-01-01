import { useContext, useState } from "react"
import ThemeContext from "../../context/ThemeContext"
import { AboutData } from "../../data/data"

// import React from 'react'

const Intro = () => {
  const [selected, setSelected] = useState(0);
  const [bg, changeBG] = useState( "orange-600");
  const [sebg, sechangeBg] = useState("orange-600");
  const [thebg, thechangeBg] = useState("orange-600");

  const dLength = AboutData.length;
    const {mode} = useContext(ThemeContext);
    const changeBacg = () => {
      
      if(selected === 0){
         changeBG("transparent");
         sechangeBg('orange-600');
         thechangeBg("orange-600");
         alert("PLease tap double to change the page")
      }
      else if(selected === 1){
         sechangeBg("transparent");
         changeBG('orange-600');
         thechangeBg('orange-600');
      }
      else if(selected === 2){
        changeBG("orange-600");
        sechangeBg('orange-600');
        thechangeBg('transparent')
      }
    }
  return (
    <div className="p-10 w-full h-auto">
      <h1 className={`text-3xl font-bold font-serif  shadow-inner shadow-black w-fit ${mode === "light" ? "text-red-700" : 'text-white'}`}>
        Meet Our Founder And CEO
      </h1>
       <div className="w-[96%] h-auto p-2 flex justify-center items-center border-2 mx-auto gap-12 my-8 border-[#07d2f6] rounded-t-xl bg-[#07d2f6]">
         <div onClick={() => {setSelected(0)}} className={`w-[200px] h-auto p-3 border-2 outline-none border-orange-600 flex justify-center items-center hover:cursor-pointer bg-${bg}  shadow-lg rounded-l-xl rounded-r-md`}>
            <button onDoubleClick={changeBacg}> <h3 className=" font-serif font-bold text-white capitalize">Founder</h3></button>
         </div>
         <div onClick={() => {setSelected(1)}} className={`w-[200px] h-auto p-3 border-2 outline-none border-orange-600 flex justify-center items-center hover:cursor-pointer bg-${sebg} shadow-lg rounded-l-xl rounded-r-md`}>
          <button onDoubleClick={changeBacg}> <h3 className=" font-serif font-bold text-white capitalize">CEO</h3></button>
         </div>
         <div onClick={() => {setSelected(2)}} className={`w-[200px] h-auto p-3 border-2 outline-none border-orange-600 flex justify-center items-center hover:cursor-pointer bg-${thebg} shadow-lg rounded-l-xl rounded-r-md`}>
        <button onDoubleClick={changeBacg}> <h3 className="font-serif font-bold text-white capitalize">Investor</h3></button>
         </div>
       </div>
       <div className="flex gap-12 overflow-hidden p-5">
          <div className="ml-2 my-auto p-2">
            <img src={AboutData[selected].image} alt="" className="w-[450px] h-[500px] rounded-l-[50%] rounded-r-lg"/>
          </div>
          <div className="mr-5 my-auto p-2">
             <div className="flex gap-1 mb-6">
              <h3 className=" font-serif font-extrabold text-xl capitalize leading-none">{AboutData[selected].name}</h3>,
              <h6 className=" font-sans font-bold capitalize text-gray-800 text-lg leading-none">{AboutData[selected].profession}</h6>
             </div>
             <h4 className="mb-2 font-serif font-bold text-red-800 text-lg capitalize">About Us</h4>
             <p className=" max-w-lg">{AboutData[selected].About}</p>
             <div className="flex justify-between mt-4">
             <button type="submit"  className=" w-[150px] h-auto p-3  outline-none bg-red-600 text-white rounded-2xl font-serif font-bold hover:bg-slate-400 hover:text-black transition-all"><a href={selected === 1 ? "mailto:Aryanshraj1139@gmail.com" : "tel:+916202546277"}>{AboutData[selected].button}</a></button>
             <p className=" font-serif italic font-light">{AboutData[selected].Signature}</p>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Intro
