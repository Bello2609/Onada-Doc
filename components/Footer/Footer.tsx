"use client";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Footer = ()=>{
    return(
        <>
            <div className="flex flex-col w-[100vw] h-fit md:h-fit sm:h-fit bg-[#fff] justify-evenly py-5">
                <div className="flex lg:flex-row md:flex-col sm:flex-col min-[500px]:flex-col justify-between md:items-start sm:items-start px-16">
                    <div>
                        <h3 className="font-sans font-semibold text-2xl text-[#000]">OnadaDocs</h3>
                        <p className="w-72 flex-wrap text-[#616161] font-sans text-sm my-3 font-normal">
                            Hello, we are ABC. trying to make an effort to put the right people 
                            for you to get the best results. Just insight
                        </p>
                        <div className="flex border-1 border-[#D9D9D9] my-10 rounded-[10px] w-[291px] h-[38px] text-[#D9D9D9] p-2">
                            <button><i><CiSearch /></i></button>
                            <input type="text" className="text-[#D9D9D9] ml-2 outline-0 border-0" name="input" placeholder="Search" />
                        </div>
                        <div className="flex justify-between text-[#0A142F] text-3xl w-[144px]">
                            <a href="https://www.facebook.com/enterprisehubs01?mibextid=ZbWKwL"><FaFacebookF /></a>
                            <a href="https://www.linkedin.com/company/enterprise-hubs/"><FaTwitter /></a>
                            <a href="https://www.instagram.com/enterprisehubs?igsh=YzljYTk1ODg3Zg==" className="sm:mx-2"><IoLogoInstagram /></a>
                            
                        </div>
                    </div>
                    <div className="flex flex-col">
                         <h4 className="text-base font-sans text-[#252524] font-semibold">Quick Links</h4>
                        <p className="flex-wrap w-[218px] text-base text-[#616161] my-3">
                            Home
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161]">
                            Features
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161] my-3">
                            Pricing
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161]">
                            AI Assistant
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161] my-3">
                            Vault
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161]">
                            Connect
                        </p>
                    </div>
                    <div className="flex flex-col">
                         <h4 className="text-base font-sans text-[#252524] font-semibold">Tools & Resources</h4>
                        <p className="flex-wrap w-[218px] text-base text-[#616161] my-3">
                            AI Letter Generator
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161]">
                            E-sign & Approval
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161] my-3">
                            Letterhead Upload
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161]">
                            Document Export
                        </p>
                    </div>
                    <div className="flex flex-col">
                         <h4 className="text-base font-sans text-[#252524] font-semibold">Legal</h4>
                        <p className="flex-wrap w-[218px] text-base text-[#616161] my-3">
                            Terms of Service
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161]">
                            Privacy Policy
                        </p>
                        <p className="flex-wrap w-[218px] text-base text-[#616161] my-3">
                            Cookie Policy
                        </p>
                    </div>
                </div>
                <div className="flex flex-col font-sans font-medium text-base px-16">
                    <p className="text-[#616161] mt-5 text-base font-normal">© 2025 OnadaDocs. All rights reserved.</p>
                </div>
            </div>
        </>
    ); 
}
export default Footer;