// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CardoLogo from "../assets/Logo.jpeg";
import { Navlink } from "../data/data";
import Button from "./Button";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <>
      <div className="w-[100%] h-[auto] overflow-hidden overflow-y-hidden shadow-md shadow-slate-500">
        <div className="flex items-center sm:items-center max-sm:justify-center sm:flex-row p-2 mb-2">
          <NavLink to="/" className="logo">
            <img
              src={CardoLogo}
              alt="Cardo Logo"
              width="100px"
              height="100px"
              className=" cursor-pointer"
            />
          </NavLink>
          <nav className="flex justify-center item-center  gap-10 mx-auto">
            {Navlink.map((url) => (
              <>
                <ul key={url.link} className=" list-none flex gap-4">
                  <li className="flex gap-4">
                    <NavLink
                      to={url.to}
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
            <ul className="list-none flex">
              <li>
                <Button text="Shop Now" />
              </li>
            </ul>
            <ul>
              <li>
                <Button text="Login Now" />
              </li>
            </ul>
            <button
              onClick={toggleMode}
              className="ml-24"
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
            <div className="ml-0 flow-root lg:ml-0 mt-1 mr-2">
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
