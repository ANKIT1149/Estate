// import React from 'react'
import { NavLink } from "react-router-dom";
import CardoLogo from "../assets/Logo.jpeg";
import { Navlink } from "../data/data";
import Button from "./Button";
const Navbar = () => {
  return (
    <>
      <div className="w-[100%] h-[auto] overflow-hidden overflow-y-hidden shadow-md shadow-slate-700">
        <div className="flex items-center sm:items-center max-sm:justify-center sm:flex-row p-2 mb-2">
          <div className="logo">
            <img
              src={CardoLogo}
              alt="Cardo Logo"
              width="100px"
              height="100px"
            />
          </div>
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
                        } text-xl`
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
                  <Button />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
