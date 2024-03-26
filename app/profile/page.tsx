'use client'
import { LuMail } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { FaEye, FaEyeSlash, FaApple, FaFacebook } from "react-icons/fa";

import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";


type PasswordState = boolean;
type SignUp = boolean;

function Profile() {    
  const [signUp, setSignUp] = useState<SignUp>(true);
  const [isPassword, setIsPassword] = useState<PasswordState> (true);
  
  let signUpHandler: ()=> void;

  signUpHandler = ()=> setSignUp(()=>!signUp)
  
  let isPasswordHandler: ()=> void;

  isPasswordHandler = ()=> setIsPassword(()=>!isPassword)
  

  return (

  <main className="mx-5 flex flex-col gap-1 justify-center items-center mt-5">
    <div className="my-5 text-black text-center">
        <p className="">Welcome to AiNspire <br/> <span>{signUp ? 'Sign up' : 'Login'}</span> to Continue</p>
         <p className="text-[12px] mt-4"> Have an account already? <span className="text-sky-700 font-bold cursor-pointer" onClick={signUpHandler}>{signUp ? 'Login' : 'Sign up'}</span></p>
    </div>
     <form action="" className="flex flex-col gap-5">
        {signUp && 
        <div className="flex flex-row justify-start items-center">
          <label className="text-black absolute ml-3 opacity-50"><FiUser/></label>
          <input type="text" className="h-12 w-72 border border-opacity-20 rounded-xl text-sm border-black pl-12" placeholder="Useername"/>
        </div>}
        <div className="flex flex-row justify-start items-center">
        <label className="text-black absolute ml-3 opacity-50"><LuMail/></label>
        <input type="text" className="h-12 w-72 border border-opacity-20 rounded-xl text-sm border-black pl-12" placeholder="Useername"/>
        </div>
      
        <div className="flex flex-row justify-start items-center">
        <label className="text-black absolute ml-3 opacity-50"><RiLockPasswordLine/></label>
        <div className="flex justify-end items-center">
        <label className="text-black absolute ml-3 opacity-50 mr-4 cursor-pointer" onClick={isPasswordHandler}>{isPassword ? < FaEye/> : <FaEyeSlash/>}</label>
        <input type={isPassword ? "password" : "text"} className="h-12 w-72 border border-opacity-20 rounded-xl text-sm border-black pl-12 text-black" placeholder="password"/>
        </div>
        </div>
      
        <button type="submit" className="w-72 h-12 text-white rounded-xl bg-black">{signUp ? 'Sign Up' : 'login'}</button>
     </form>
          <div className="flex flex-row justify-center items-center  mt-5 gap-4">
              <div className="bg-black h-[2px] w-28 opacity-40"></div>
              <p className="text-black">OR</p>
              <div className="bg-black h-[2px] w-28  opacity-40"></div>
          </div>
          <div className="flex flex-col gap-3">
          <button  className=" flex flex-nowrap justify-center items-center text-sm  gap-3 w-72 h-12 text-black rounded-xl bg-white border border-black border-opacity-50">
            <FcGoogle className="text-2xl"/> 
            <p>Continue with Google</p> 
          </button>
          
          <button  className=" flex flex-nowrap justify-center items-center  text-sm gap-3 w-72 h-12 text-white rounded-xl bg-black border border-black border-opacity-50">
            <FaApple className="text-2xl"/> 
            <p>Continue with Apple</p> 
          </button>

          <button  className=" flex flex-nowrap justify-center items-center text-sm gap-3 w-72 h-12 text-white rounded-xl bg-sky-600 ">
            <FaFacebook className="text-2xl"/> 
            <p>Continue with Facebook</p> 
          </button>
          
          </div>
    </main>
    )
}
export default Profile;