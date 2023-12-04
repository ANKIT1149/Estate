/* eslint-disable react/no-unknown-property */
// import React from 'react'

import { ReactLogo } from "../data/data";

const Partener = () => {
  return (
    <div className="w-[100%] h-[70vh] p-15 mb-8 mt-8 bg-orange-800 hover:scale-95 transition-all cursor-pointer hover:rounded-2xl">
      <h1 className="font-bold font-serif text-white mt-5 p-5 capitalize text-3xl">
        Partner With Us
      </h1>
      <div className="grid grid-cols-4 gap-7 mt-4">
        {ReactLogo.map((brand, idx) => (
          <div className="mt-4" key={idx}>
            <a href={brand.point} target="_blank" rel="noreferrer">
              <img src={brand.image} alt="" className="" />
            </a>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Partener;
