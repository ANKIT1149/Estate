// import React from 'react'
import { BsHeartFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Logo from '../assets/Logo.jpeg';
import { FooterLInks } from "../data/data";
// import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="w-[100%] h-[70vh] mt-4  border-none outline-none bg-slate-400">
      {/* Copyright Section */}
      <div className="flex p-5 justify-center gap-8 items-center mt-8">
        <div className="mr-3 font-serif flex-1">
          <p className="flex text-base font-bold capitalize text-gray-700">
            Copyright 2023 <BsHeartFill color="red" /> made by @Aryansh
            Estate.pvt.ltd
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 mr-8">
          <div className="flex justify-center items-center w-[40px] h-[40px] border-2 rounded-lg bg-white hover:translate-y-4 cursor-pointer hover:bg-transparent transition-all">
            <a href="www.facebook.com" target="_blank">
              {" "}
              <BsFacebook />
            </a>
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] border-2 rounded-lg bg-white hover:translate-y-4 cursor-pointer hover:bg-transparent transition-all">
            <a href="www.instagram.com" target="_blank">
              <BsInstagram />
            </a>
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] border-2 rounded-lg bg-white hover:translate-y-4 cursor-pointer hover:bg-transparent transition-all">
            <a href="www.youtube.com" target="_blank">
              {" "}
              <BsYoutube />
            </a>
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] border-2 rounded-lg bg-white hover:translate-y-4 cursor-pointer hover:bg-transparent transition-all">
            <a href="www.twitter.com" target="_blank">
              {" "}
              <BsTwitter/>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-4 p-0 grid grid-cols-2 gap-4">
        <div className="flex justify-center items-center flex-col">
           <img src={Logo} alt="" className="w-[230px] mix-blend-multiply drop-shadow-2xl shadow-slate-700"/>
           <p className="mt-4 font-serif font-semibold capitalize">Best Platform for buying  <br /> premium & luxurious car.</p>
           <div className="flex justify-center items-center gap-0 mt-4 ml-3">
              <img src="https://tse4.mm.bing.net/th?id=OIP.Gqq1zxH6Dofn1pa-dBEupAHaB7&pid=Api&P=0&h=180" alt="" className=" mix-blend-multiply w-[180px]"/>
              <img src="https://tse4.mm.bing.net/th?id=OIP.Gqq1zxH6Dofn1pa-dBEupAHaB7&pid=Api&P=0&h=180" alt="" className=" mix-blend-multiply w-[180px]"/>
           </div>
        </div>
        <div className="flex justify-center items-center gap-20 mr-16">
           {FooterLInks.map((links, index) => (
             <div key={index} className="flex justify-between items-end flex-col">
                <h1 className=" font-serif font-bold text-2xl capitalize">{links.title}</h1>
                {links.secondTitle.map((selink, index) => (
                   <div key={index} className="flex justify-center items-center mt-4">
                     <h6 className="text-center relative left-2 text-[16px] hover:translate-x-3 cursor-pointer transition-all hover:text-gray-100">{selink}</h6>
                   </div>
                ))}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
