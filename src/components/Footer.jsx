// import React from 'react'
import { BsHeartFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="w-[100%] h-[50vh] mt-4  border-none outline-none bg-slate-400">
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
    </div>
  );
};

export default Footer;
