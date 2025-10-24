"use client";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import FormInput from "@/components/FormInput/FormInput";
import FormNumber from "@/components/FormNumber/FormNumber";
const Register = ()=>{
    return(
        <>
        <div className="flex w-full h-fit">
            <div className="flex flex-col w-[60%] h-fit bg-[url('/Stroke.png')] bg-no-repeat bg-center bg-contain p-10">
                <Image src="/onada.png" alt="onada docs" width={104} height={104} />
                <div className="flex justify-between w-[300px] items-center">
                    <p className="flex items-center justify-center bg-[#ECECEC] w-[30px] h-[30px] rounded-full"><MdArrowBackIosNew /></p>
                    <p className="font-sans font-bold">Let's get you started</p>
                </div>
                <form className="flex justify-center mt-10 w-full">
                    <div className="w-[400px]">
                        <FormInput 
                            label="Full name" 
                            onChange={()=> {console.log("hello")}} 
                            value="hello" 
                            type="text" 
                            placeholder="Enter name" 
                            name="Full name"
                         />
                        <FormInput 
                            label="Email Address" 
                            onChange={()=> {console.log("hello")}} 
                            value="hello" 
                            type="email" 
                            placeholder="Email Address" 
                            name="email address"
                         />
                        <FormNumber 
                            label="Phone number" 
                            value="+2348069573501" 
                            onChange={()=>{console.log("hello")}}
                         />
                        <FormInput 
                            label="Create password" 
                            onChange={()=> {console.log("hello")}}
                            value="hello" 
                            type="password" 
                            placeholder="******" 
                            name="password" 
                        />
                        <div className="font-sans font-normal text-[#CCCCCC] text-xs/6 mt-[-12px] mb-[20px] ">
                            <p>Password must contain a minimum of 8 characters</p>
                            <p>Password must contain at least one symbol e.g. @, !</p>
                        </div>
                        <FormInput 
                            label="Location(optional)" 
                            onChange={()=> {console.log("hello")}} 
                            value="hello" 
                            type="text" 
                            placeholder="select location" 
                            name="location" />
                         <button type="submit" className="bg-[#1B1F3B] text-[#fff] w-[400px] h-[40px] rounded-[5px]">Sign Up</button>
                         <div className="flex mt-5">
                            <p className="font-sans font-bold text-base text-[#C4C4C4]">Already a user?</p>
                            <Link href="/login" className="font-sans font-bold text-base underline text-[#1B1F3B] ml-3">Login</Link>
                         </div>
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
export default Register;