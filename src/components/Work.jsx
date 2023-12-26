// import React from 'react'

import Button from "./Button";

const Work = () => {
  return (
    <div className="w-[70%] max-sm:w-[95%] h-[30vh] max-sm:h-[50vh] mx-auto p-5 bg-indigo-700 border-none outline-none rounded-xl">
      <div className="flex max-sm:flex-col justify-center items-center mt-0">
        <div className="mx-auto flex-1">
          <h1 className=" font-bold font-serif text-white capitalize text-[22px] mt-3 mb-3">
            Want to Work With Us to take the experience?
          </h1>
          <p className=" max-w-lg text-xl text-gray-400">
            We provide best environment for office Work. Join with us to get the
            skill in automobile design and structure.
          </p>
        </div>
        <div className=" mr-32 mt-8 max-sm:mr-[250px] max-sm:mt-0">
          <Button text="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default Work;
