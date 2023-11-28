// import React from 'react'
import { useContext, useState } from "react";
import Logo from "../assets/Logo.jpeg";
import ThemeContext from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FireBaseConfig";
import { Loader } from "../components";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {mode, loading, isLoading} = useContext(ThemeContext);
  const navigate = useNavigate();

  const signin = async () => {
    isLoading(true)
     if (email === '') {
        toast.error("All fields are compulsory")
     }

   
     try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("user", JSON.stringify(result));
        toast.success("Login SuccessFully");
        isLoading(false);
        navigate("/")
     } catch (error) {
        console.log(error);
        toast.error(`Login failed`);
        isLoading(false)
     }
  }
  return (
    <div className="flex justify-center items-center w-[100%] h-auto gap-0">
        {loading && <Loader />}
       <div className={` ${mode === 'light' ? 'bg-blue-600' : 'bg-red-700'} flex-1 w-[300px] h-[100vh] flex justify-center items-center flex-col`}>
           <img src={Logo} alt="" className=" mix-blend-multiply drop-shadow-2xl shadow-slate-700"/>
           <h1 className="mt-8 text-white text-3xl drop-shadow-xl shadow-white font-bold font-serif leading-normal capitalize text-center">Welcome Again! Login in Your Account to Explore Carod Cars</h1>
       </div>
       <div className={`${mode === 'light' ? 'bg-white' : 'bg-[rgb(17, 24, 39)]'} flex-2 w-[900px] flex justify-center items-center`}>
       <div className=' bg-gray-800 px-10 py-10 rounded-xl w-[400px] flex justify-center items-center flex-col'>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[17em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[17em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                       onClick={signin}
                        className=' bg-yellow-500  text-black font-bold  px-2 py-2 rounded-lg w-[250px]'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Dont have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Login
