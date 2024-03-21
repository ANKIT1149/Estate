// import React from 'react'

import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"
import Button from "../../components/Button"

const AboutHome = () => {
    const {mode} = useContext(ThemeContext)
  return (
    <div className="flex justify-between items-center max-sm:flex-col">
        <div className=" mb-5 p-4 max-sm:p-2">
        <h1 className={`text-2xl text-emerald-800 font-serif font-bold leading-relaxed capitalize mb-4 ${mode === "dark" ? 'text-white' : "text-emerald-800"} max-sm:text-left`}>Want to know more about to<br /> our services and our company</h1>
        <p className=" max-w-lg text-gray-500 mb-3  pr-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quo
          quaerat architecto aliquam doloribus recusandae saepe dolorum a iure
          id doloremque impedit deleniti, enim deserunt inventore ratione fuga
          minus, possimus aliquid labore?
        </p>
        <div className="relative right-28 top-5">
        <Button text="Explore Now"/>
        </div>
    </div>
    <div className="mr-2 justify-center items-center max-sm:mt-12">
        <div className="grid grid-cols-2 gap-1">
            <img src="https://tse1.mm.bing.net/th?id=OIP.OX0BSrVd48fE8TzokfsW9gHaE7&pid=Api&P=0&h=180" alt="" width={300}  className="rounded-lg h-[225px] hover:scale-90 transition-all"/>
            <img src="https://tse3.mm.bing.net/th?id=OIP._urddPj8V-XlDiwqRxkM6QHaEo&pid=Api&P=0&h=180" alt="" width={300}  className="my-auto h-[200px] hover:scale-105  transition-all rounded-lg"/>
        </div>
    </div>
    </div>
  )
}

export default AboutHome
