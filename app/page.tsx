import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { FaStar } from "react-icons/fa";

const Home =()=> {
  return (
    <>
      <Navbar />
        <div className="flex flex-col justify-center bg-[url('/bg.png')] w-full h-[945px] bg-cover overflow-x-hidden bg-center bg-no-repeat">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-between w-[500px] mb-10">
            <div className="flex flex-col">
              <div className="flex justify-center mb-3">
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
              </div>
              <p className="text-[#2A2374] font-sans font-medium">“We're super happy”</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center mb-3">
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
              </div>
              <p className="text-[#2A2374] font-sans font-medium">“We're super happy”</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center mb-3">
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
              </div>
              <p className="text-[#2A2374] font-sans font-medium">“We're super happy”</p>
            </div>
          </div>
          <div className="flex flex-col items-center  w-[1000px] h-[468px] bg-[#F5F7FA] rounded-[10px] p-16">
            <h1 className="text-center font-sans font-medium text-5xl tracking-wide leading-tight w-[900px]">
              With OnadaDocs, Create, Sign &<br />
              Share Official Docs <span className="text-[#1E085C]">In Minutes,</span><br />
              <span className="text-[#1E085C]">Not Hours.</span>
            </h1>
            <p className="font-sans font-medium text-center text-[#616161] my-10">Your Official Document Generator — Smart, Branded,<br /> Effortless.</p>
            <div className="flex justify-between  w-[500px]">
              <Link href="/sign-up" className="flex justify-center items-center font-sans font-bold text-sm text-[#fff] !bg-[#1B1F3B] w-[194px] h-[53px] rounded-[10px]">
                Get Started Free
              </Link>
              <Link href="/sign-up" className="flex justify-center items-center font-sans font-bold text-sm text-[#1B1F3B] bg-[#fff] w-[194px] h-[53px] border-1 border-[#1B1F3B] rounded-[10px]">
                Get Started Free
              </Link>
            </div>
          </div>
          </div>
          
          <div className="flex justify-center items-center w-fit h-[73px] bg-[#fff] rounded-[30px] opacity-90 mt-10 border-5 border-[#fff]/60 rotate-[6deg] ml-20 transition-transform duration-500 hover:rotate-0 cursor-pointer">
            <div className="flex -space-x-4">
              <Image 
                src="/image.png" 
                className="w-12 h-12 rounded-full border-2 border-white" 
                width={40} 
                height={40} 
                alt="Avatar 2" />
              <Image 
                src="/image.png" 
                className="w-12 h-12 rounded-full border-2 border-white" 
                width={40} 
                height={40} 
                alt="Avatar 2" />
              <Image 
                src="/image.png" 
                className="w-12 h-12 rounded-full border-2 border-white" 
                width={40} 
                height={40} 
                alt="Avatar 3" />
              <Image 
                src="/image.png" 
                className="w-12 h-12 rounded-full border-2 border-white" 
                width={40} 
                height={40} 
                alt="Avatar 4" />
            </div>
            <div className="flex flex-col ml-3">
              <div className="flex mb-1">
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#FBBF24]"><FaStar /></p>
                <p className="text-[#2A2374] font-sans font-bold ml-2">4.9</p>
              </div>
              <p className="text-[#2A2374] font-sans font-medium">“from client reviews”</p>
            </div>
          </div>  
        </div>
      <Footer />
    </>
  )
}
export default Home;
