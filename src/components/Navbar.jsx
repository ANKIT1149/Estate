/* eslint-disable no-constant-condition */
// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CardoLogo from "../assets/Logo.jpeg";
import { Navlink } from "../data/data";
import Button from "./Button";
import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { BsFillCloudSunFill} from "react-icons/bs";
import { FiMenu, FiSun } from "react-icons/fi";
import { toast } from "react-toastify";
import {CgClose} from 'react-icons/cg'

const Navbar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const [transist, setTransist] = useState('none');
 const Mobile = window.innerWidth <= 768 ? true : false;
 const [menuOpen, menuClose] = useState(false);
 const [position, setPosition] = useState('right-[-250px]')
  const admin = JSON.parse(localStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  const logout = () => {
  if (user) {
    toast.success("Logout SuccessFull");
    localStorage.clear(user);
   setTimeout(() => {
     window.location.reload(true)
   }, 5000);
  }
  }

  const OpenNavbar = () => {
      if (menuOpen === false) {
        menuClose(true),
        setTransist('bounce'),
        setPosition('right-0');
      } else {
        menuClose(false)
        setPosition('right-[-250px]')
      }
  }
  return (
    <>
      <p
        className="capitalize flex   h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
        style={{
          backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        Get free Driving Licencse on buying the car
      </p>
      <div className="w-[100%] h-[auto] overflow-hidden overflow-y-hidden shadow-md shadow-slate-500">
        <div className="flex items-center sm:items-center sm:flex-row p-2 mb-2">
          <NavLink to="/" className="logo">
            <img
              src={CardoLogo}
              alt="Cardo Logo"
              width="100px"
              height="100px"
              className=" cursor-pointer mr-10 max-sm:mr-0"
            />
          </NavLink>
          {menuOpen === false && Mobile === true ? "" : (<div onClick={() => {menuClose(false)}} className="absolute right-8 border-2 border-blue-700 hover:bg-transparent cursor-pointer hover:text-black transition-all rounded-full w-[40px] h-[40px] flex justify-center items-center bg-blue-700">
                <CgClose className="text-white text-2xl font-bold hover:text-black transition-all"/>
              </div>)}
          {Mobile === true && menuOpen === false ? (
              <div onClick={OpenNavbar} className="absolute right-8 border-2 border-blue-700 hover:bg-transparent cursor-pointer hover:text-black transition-all rounded-full w-[40px] h-[40px] flex justify-center items-center bg-blue-700">
                <FiMenu className="text-white text-2xl font-bold hover:text-black transition-all"/>
              </div>
          ) : (  <nav className={`flex justify-center item-center max-sm:flex-col max-sm:w-[250px] max-sm:h-[80vh] max-sm:border-2 animate-${transist} ${mode === 'light' ? 'border-blue-800' : 'border-black'}  gap-[26px]  mx-auto max-sm:absolute max-sm:rounded-l-3xl max-sm:top-[120px] max-sm:${position} ${mode === 'light' ? 'max-sm:bg-blue-800' : 'max-sm:bg-black'} max-sm:z-50`}>
          {Navlink.map((url) => (
            <>
              <ul key={url.link} className=" list-none flex gap-4 max-sm:mx-auto">
                <li className="flex gap-4">
                  <NavLink
                    to={url.to}
                    onClick={() => {menuClose(false)}}
                    className={({ isActive }) =>
                      ` font-bold font-serif capitalize leading-normal ${
                        isActive ? "text-red-900" : " text-red-600"
                      } text-xl ${
                        mode === "dark" ? "text-white" : "text-red-600"
                      }`
                    }
                  >
                    {url.link}
                  </NavLink>
                </li>
              </ul>
            </>
          ))}
          {admin?.user?.email === "ankitsrivastav38@gmail.com" ? <ul className=" list-none flex gap-4">
            <li className="flex gap-4 max-sm:mx-auto">
              {" "}
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  ` font-bold font-serif capitalize leading-normal ${
                    isActive ? "text-red-900" : " text-red-600"
                  } text-xl ${
                    mode === "dark" ? "text-white" : "text-red-600"
                  }`
                }
              >
                Admin
              </NavLink>
            </li>
          </ul> : ''}

          {user || admin?.user?.email === "ankitsrivastav38@gmail.com" ? <ul className=" list-none flex gap-4">
            <li className="flex gap-4 max-sm:mx-auto">
              {" "}
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  ` font-bold font-serif capitalize leading-normal ${
                    isActive ? "text-red-900" : " text-red-600"
                  } text-xl ${
                    mode === "dark" ? "text-white" : "text-red-600"
                  }`
                }
              >
                My Order
              </NavLink>
            </li>
          </ul> : ""}
          <ul className="list-none flex">
            <li className="max-sm:hidden">
              <Button text="Shop Now" />
            </li>
          </ul>
          <ul>
            <li onClick={logout} className="max-sm:relative max-sm:right-10">
              <Button text={user ? "Logout" : 'Login Now'} />
            </li>
          </ul>
          <button
            onClick={toggleMode}
            className="ml-24 max-sm:ml-[102px] max-sm:mt-2"
            title={mode === "light" ? "Dark mode" : "Light Mode"}
          >
            {mode === "light" ? (
              <FiSun className="" size={30} />
            ) : "dark" ? (
              <BsFillCloudSunFill size={30} className="text-white" />
            ) : (
              ""
            )}
          </button>
          <div className="ml-3 flow-root lg:ml-0 mt-1   mr-2 max-sm:mx-auto">
            <Link
              to={"/cart"}
              className="group -m-2 flex items-center p-2"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <span
                className="ml-0 text-sm font-medium text-gray-700 group-"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </Link>
          </div>
        </nav>)}
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
