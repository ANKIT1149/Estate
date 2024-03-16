// import React from 'react'

import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Logo from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { fireDb, auth } from "../Firebase/FireBaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { Loader } from "../components";

const Signup = () => {
  const { mode, loading, isLoading } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (name === "" || email === "" || password === "") {
      toast.error(`All fields are compulsory ${name}`);
    }

    console.log(name, email, password);
    isLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        timeStamps: Timestamp.now(),
      };

      const userRef = collection(fireDb, "user");
      await addDoc(userRef, user);
      toast.success(`Signup successfully ${name} & Welcome to Carod Seller`);
      isLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        toast.warning(
          `PLease login to your account to open dashboard page ${name}`
        );
      }, 3000);
    } catch (error) {
      isLoading(false);
      console.log(error);
      toast.error("Signup Failed");
    }
  };
  return (
    <div className="flex justify-center items-center w-[100%] h-auto gap-0">
      {loading && <Loader />}
      <div
        className={` ${
          mode === "light" ? "bg-blue-600" : "bg-red-700"
        } flex-1 w-[450px] max-sm:w-[50%] rounded-b-lg h-[100vh] flex justify-center items-center flex-col`}
      >
        <img
          src={Logo}
          alt=""
          className=" mix-blend-multiply drop-shadow-2xl shadow-slate-700"
        />
        <h1 className="mt-8 text-white text-3xl drop-shadow-xl shadow-white font-bold font-serif leading-normal capitalize text-center">
          Join with us To Start a Wonderful journey
        </h1>
      </div>
      <div
        className={`${
          mode === "light" ? "bg-white" : "bg-[rgb(17, 24, 39)]"
        } flex-2 w-[750px] max-sm:w-[50%] flex justify-center items-center`}
      >
        <div className=" bg-gray-800 px-10 py-10 rounded-xl capitalize">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Signup
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" capitalize bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" capitalize bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" capitalize bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={signup}
              className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
            >
              Signup
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Have an account{" "}
              <Link className=" text-red-500 font-bold" to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
