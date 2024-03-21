// import React from 'react'

import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"
import { FiPhoneCall } from "react-icons/fi"
import { FaAddressCard } from "react-icons/fa6"

const AboutContact = () => {
    const {mode} = useContext(ThemeContext)
  return (
    <div className="w-[100%] h-auto p-[50px] max-sm:px-0 mt-8 mx-[50px] max-sm:mx-0">
      <h1
        className={`text-3xl font-bold font-serif  shadow-inner shadow-black w-fit ${
          mode === "light" ? "text-red-700" : "text-white"
        }`}
      >
        Our Conact Service
      </h1>
      <div className="flex  items-center gap-16 p-4 overflow-hidden">
          <div className="mt-5 p-2 overflow-hidden w-auto h-auto">
            <h1 className={`text-3xl font-serif font-bold italic flex gap-6  ${mode === 'light' ? 'text-black' : 'text-white'}  mt-1`}><FiPhoneCall className="text-red-800"/>Contact Service:-</h1>
            <p className="max-w-md ml-8 mt-4 font-bold font-sans text-lg text-justify">We provide a different team for contact services.You can send your problem on mail or whatsapp our team help to solve your problem as soon as possible.If you send your problem by mail our team response you within 2 hours or if you send your problem on whatsapp our team response within 1 hour.If you want to direct meet our Md, Manageer or Interviewer So You can use our direct appointment method. </p>
          </div>

          <div>
            <div className="p-2 overflow-hidden w-auto h-auto ml-14">
                 <div className="flex gap-4">
                     <FaAddressCard className=""/>
                     
                 </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutContact
