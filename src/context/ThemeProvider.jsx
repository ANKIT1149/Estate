/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react"
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("light");
    const [loading, isLoading] = useState(false)
    const toggleMode = () => {
         if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
         } else {
            setMode("light")
            document.body.style.backgroundColor = 'white';
         }
    };

  return (
    <ThemeContext.Provider value={{mode, toggleMode, loading, isLoading}}>
          {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
