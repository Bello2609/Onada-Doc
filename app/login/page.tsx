"use client";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import FormInput from "@/components/FormInput/FormInput";
import { FcGoogle } from "react-icons/fc";
const Login = ()=>{
    return(
        <>
        <div className="flex w-full h-fit">
            <div className="flex flex-col w-[60%] h-fit bg-[url('/Stroke.png')] bg-no-repeat bg-center bg-contain p-10">
                <Image 
                    src="/onada.png" 
                    alt="onada docs" 
                    width={104} 
                    height={104}
                />
                <div className="flex justify-between w-[300px] items-center">
                    <p className="flex items-center justify-center bg-[#ECECEC] w-[30px] h-[30px] rounded-full"><MdArrowBackIosNew /></p>
                    <p className="font-sans font-bold">Welcome</p>
                </div>
                <form className="flex flex-col items-center mt-10 w-full">
                    
                    <div className="w-[400px]">
                        <div className="font-sans font-normal text-[#3D2D4C] text-lg/6  mb-[40px] ">
                        <p>Enter your email and password to log in</p>
                    </div>
                        <FormInput 
                            label="Email Address" 
                            onChange={()=> {console.log("hello")}} 
                            value="hello" type="email" 
                            placeholder="Email Address" 
                            name="email address"
                        />
                        <FormInput 
                            label="Create password" 
                            onChange={()=> {console.log("hello")}} 
                            value="hello" 
                            type="password" 
                            placeholder="******" 
                            name="password"
                        />
                        
                         <button type="submit" className="bg-[#1B1F3B] text-[#fff] w-[400px] h-[40px] rounded-[5px]">Sign Up</button>
                         <div className="flex mt-5">
                            <p className="font-sans font-bold text-base text-[#C4C4C4]">Not registered yet?</p>
                            <Link href="/register" className="font-sans font-bold text-base underline text-[#1B1F3B] ml-3">Create an Account</Link>
                         </div>
                         <div className="flex items-center mt-5 mb-3">
                            <div className="w-[174px] h-[1px] bg-[#3D2D4C]"></div>
                            <p className="mx-3">or</p>
                            <div className="w-[174px] h-[1px] bg-[#3D2D4C]"></div>
                         </div>
                          <button type="submit" className="flex items-center justify-center font-sans font-bold bg-[#fff] text-[#1B1F3B] w-[400px] h-[40px] rounded-[5px] border-1 border-[#3D2D4C]">
                            <FcGoogle />&nbsp;
                            Sign Up
                        </button>
                    </div>
                    
                </form>
            </div>
            <div className="flex justify-center  items-center  w-[40%] max-h-[900vh] bg-linear-to-br from-[#0f172a] from-10% via-[#312e1f] via-60% to-[#5a4a20] to-90%">
                <h3 className="font-sans font-bold w-[300px] text-4xl text-[#fff]">
                    “Powerful Letters. Effortless Collaboration. Sign up.”
                </h3>
            </div>
        </div>
        
        </>
    );
}
export default Login;