"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { FaStar } from "react-icons/fa";
import { Work_Sans } from "next/font/google";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";


const worksans = Work_Sans({
    subsets: ["latin"]
})

const period = ["Monthly", "Yearly"];
const Home =()=> {
  const [active, setIsActive] = useState("Monthly");
   const hiddenFileInput = useRef<HTMLInputElement>(null);

      const handleClick = ()=>{
        if(hiddenFileInput.current){
          hiddenFileInput.current.click();
        }
       
    }
    const handleChange = (e: any)=>{
        console.log(e.target.files[0]);
    }
  return (
    <>
      <Navbar />
        <div className="flex flex-col justify-center bg-[url('/bg.png')] w-full h-[945px] bg-cover overflow-x-hidden bg-center bg-no-repeat">
        {/* banner started */}
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
              <Link href="/register" className="flex justify-center items-center font-sans font-bold text-sm text-[#fff] !bg-[#1B1F3B] w-[194px] h-[53px] rounded-[10px]">
                Get Started Free
              </Link>
              <Link href="/register" className="flex justify-center items-center font-sans font-bold text-sm text-[#1B1F3B] bg-[#fff] w-[194px] h-[53px] border-1 border-[#1B1F3B] rounded-[10px]">
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
                src="/image2.png" 
                className="w-12 h-12 rounded-full border-2 border-white" 
                width={40} 
                height={40} 
                alt="Avatar 2" />
              <Image 
                src="/image3.png" 
                className="w-12 h-12 rounded-full border-2 border-white" 
                width={40} 
                height={40} 
                alt="Avatar 3" />
              <Image 
                src="/image4.png" 
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
        {/* banner ended */}
        {/* our features started */}
        <div id="features" className="flex flex-col items-center px-16 font-semibold text-4xl bg-[#183B560D] py-10">
          <h4 className="text-[#1B1F3B]">Our Features</h4>
          <div className="grid grid-cols-3 gap-16 w-fit mt-10">
            <div className="flex flex-col items-center w-[300px] h-[248px] rounded-[20px] bg-[#fff] p-5 shadow-xl shadow-[#1B1F3B]/25">
              <p className="flex items-center justify-center w-[92px] h-[92px] rounded-full bg-[#FFF0E9]">
                <Image src="/Vector.png" alt="vector" width="29" height="32" />
              </p>
              <h5 className="font-sans font-semibold text-2xl my-5 text-[#2E2E2E]">Upload Letterhead</h5>
              <p className="font-sans font-medium text-base text-[#5F5F5F] text-center w-[240px]">Add your custom branding with ease.</p>
            </div>
            <div className="flex flex-col items-center w-[300px] h-[248px] rounded-[20px] bg-[#fff] p-5 shadow-xl shadow-[#1B1F3B]/25">
              <p className="flex items-center justify-center w-[92px] h-[92px] rounded-full bg-[#E9F6EE]">
                <Image src="/ai.png" alt="vector" width="29" height="32" />
              </p>
              <h5 className="font-sans font-semibold text-2xl my-5 text-[#2E2E2E]">AI Letter Generator </h5>
              <p className="font-sans font-medium text-base text-[#5F5F5F] text-center w-[240px]">Generate official letters in seconds.</p>
            </div>
            <div className="flex flex-col items-center w-[300px] h-[248px] rounded-[20px] bg-[#fff] p-5 shadow-xl shadow-[#1B1F3B]/25">
              <p className="flex items-center justify-center w-[92px] h-[92px] rounded-full bg-[#EDFFFF]">
                <Image src="/Group.png" alt="vector" width="29" height="32" />
              </p>
              <h5 className="font-sans font-semibold text-2xl my-5 text-[#2E2E2E]">E-sign & Approve </h5>
              <p className="font-sans font-medium text-base text-[#5F5F5F] text-center w-[240px]">Get documents signed and approved faster</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-16 mt-10">
              <div className="flex flex-col items-center w-[300px] h-[248px] rounded-[20px] bg-[#fff] p-5 shadow-xl shadow-[#1B1F3B]/25">
                <p className="flex items-center justify-center w-[92px] h-[92px] rounded-full bg-[#FFF6DD]">
                  <Image src="/Vector2.png" alt="vector" width="29" height="32" />
                </p>
                <h5 className="font-sans font-semibold text-2xl my-5 text-[#2E2E2E]">Export & Email </h5>
                <p className="font-sans font-medium text-base text-[#5F5F5F] text-center w-[240px]">Send or download docs instantly.</p>
              </div>
              <div className="flex flex-col items-center w-[300px] h-[248px] rounded-[20px] bg-[#fff] p-5 shadow-xl shadow-[#1B1F3B]/25">
                <p className="flex items-center justify-center w-[92px] h-[92px] rounded-full bg-[#9672FF]/26">
                  <Image src="/lock.png" alt="vector" width="29" height="32" />
                </p>
                <h5 className="font-sans font-semibold text-2xl my-5 text-[#2E2E2E]"> Secure Vault </h5>
                <p className="font-sans font-medium text-base text-[#5F5F5F] text-center w-[240px]">Store your files with military-grade safety.</p>
              </div>
            </div>
        </div>
        {/* our features ends */}
        {/* offer started */}
        <div id="pricing" className="flex flex-col items-center bg-[#183B560D] py-16">
          <div className="flex flex-col items-center text-center">
            <p className={`${worksans.className} font-semibold flex-wrap text-4xl text-[#1B1F3B] w-[648px]`}>We offer great <span className="text-[#FFC700]">price</span> plan for the OnadaDocs</p>
          </div>
          <div className="flex items-center justify-center font-semibold text-base bg-[#fff] w-[200px] h-[46px] rounded-[20px] my-10 shadow-xl shadow-[#183B5633]">
            {
              period.map(data=>(
                <button key={data} type="button" onClick={()=> setIsActive(data)} className={`${active === data ? `bg-[#FFC700] text-[#fff]` : `text-[#627065]`}  cursor-pointer  w-[90px] h-[27px] rounded-[20px]`}>
                  {data}
                </button>
              ))
            }
          </div>
          <div className="grid grid-cols-4 gap-4 w-fit mt-10">
            <div className="flex flex-col items-center w-[300px] h-[379px] bg-[#fff] p-5">
              <h5 className="font-sans font-medium text-3xl my-5 text-[#0B2110]">Starter</h5>
              <p className="font-sans font-normal text-base text-[#2E3630] text-center w-[235px]">Starter pack to help you to get started</p>
              <h2 className="font-sans font-bold text-[#0B2110] text-4xl mt-16 mb-10">Free</h2>
              <p className="flex items-center justify-center font-sans font-semibold text-[#0B2110] w-[138px] h-[43px] text-base border-1 border-[#0B2110] rounded-[10px]">Get Started</p>
            </div>
            <div className="flex flex-col w-[300px]">
              <div className="flex items-center justify-center rounded-t-[10px] bg-[#349C4B] w-full h-[27px] mt-[-30px] font-semibold text-[#fff]">Recommended</div>
              <div className="flex flex-col items-center w-[300px] h-[379px] p-5 bg-[#183B560D]">
                <h5 className="font-sans font-medium text-3xl my-5 text-[#0B2110]">Pro</h5>
                <p className="font-sans font-normal text-base text-[#2E3630] text-center w-[235px]">For small teams & freelancers Access AI letters, e-sign, vault & export tools.</p>
                <div className="flex font-sans items-center  text-[#0B2110] mt-10 mb-10">
                  <h4 className="font-bold text-4xl">$20&nbsp;</h4>
                  <p className="font-normal text-base">/&nbsp;month</p>
                </div>
                <p className="flex items-center justify-center font-sans font-semibold text-[#fff] w-[138px] h-[43px] text-base bg-[#349C4B] rounded-[10px]">Get Started</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center w-[300px] h-[379px] p-5 bg-[#fff] ">
              <h5 className="font-sans font-medium text-3xl my-5 text-[#0B2110]">Business+</h5>
              <p className="font-sans font-normal text-base text-[#2E3630] text-center w-[235px]">For growing teams & approvals Collaborate and manage departments easily.</p>
              <div className="flex font-sans items-center  text-[#0B2110] mt-10 mb-10">
                <h4 className="font-bold text-4xl">$100&nbsp;</h4>
                <p className="font-normal text-base">/&nbsp;month</p>
              </div>
              <p className="flex items-center justify-center font-sans font-semibold text-[#fff] w-[138px] h-[43px] text-base bg-[#349C4B] rounded-[10px]">Get Started</p>
            </div>
            <div className="flex flex-col items-center w-[300px] h-[379px] bg-[#183B560D] p-5">
              <h5 className="font-sans font-medium text-3xl my-5 text-[#0B2110]">Enterprise</h5>
              <p className="font-sans font-normal text-base text-[#2E3630] text-center w-[235px]">For large teams needing security Custom integrations & priority support.</p>
              <h2 className="font-sans font-bold text-[#0B2110] text-4xl mt-10 mb-10">Custom</h2>
              <p className="flex items-center justify-center font-sans font-semibold text-[#0B2110] w-[138px] h-[43px] text-base border-1 border-[#0B2110] rounded-[10px]">Contact Sales</p>
            </div>
          </div>
        </div>
        {/* offers ended */}
        {/* what our client are saying start */}
        <div id="testimony" className="flex flex-col items-center bg-[#183B560D] py-16">
          <p className="font-sans font-semibold text-4xl">What Our Clients Say About Us</p>
          <div className="flex cursor-pointer ">
            <p className="text-4xl text-[#525252]"><MdOutlineKeyboardArrowLeft /></p>
            <p className="text-4xl text-[#525252]"><MdOutlineKeyboardArrowRight /></p>
          </div>
          <div className="grid grid-cols-3 gap-16 mt-16">
            <div className="relative w-72 h-72 rotate-[30deg]">
              {/* <!-- Bottom navy layer --> */}
              <div className="absolute inset-0 bg-[#1b1d36] -translate-x-[10px] translate-y-[15px] rounded-[60px_90px_40px_80px/80px_70px_70px_100px]"></div>
              {/* <!-- Top white layer --> */}
              <div className="absolute inset-0 bg-white rounded-[60px_90px_40px_80px/80px_70px_70px_100px]">
                <div className="flex flex-col items-center justify-center w-full rotate-[-30deg]">
                  <Image src="/customer.png" alt="customer review" width="76" height="76" className="flex justify-center  mt-[-30px]" />
                  <h4 className="font-sans font-bold text-[#525252] text-lg">Hannah Schmitt</h4>
                  <p className="font-sans font-normal text-[#525252] text-xs mt-2 mb-4">Lead designer</p>
                  <p className="flex flex-wrap w-[230px] font-sans text-xs text-[#525252]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, 
                    nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. 
                    Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus 
                    pellentesque enim 
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-72 h-72 rotate-[30deg]">
              {/* <!-- Bottom navy layer --> */}
              <div className="absolute inset-0 bg-[#FFC700] -translate-x-[10px] translate-y-[15px] rounded-[60px_90px_40px_80px/80px_70px_70px_100px]"></div>
              {/* <!-- Top white layer --> */}
              <div className="absolute inset-0 bg-white rounded-[60px_90px_40px_80px/80px_70px_70px_100px]">
                <div className="flex flex-col items-center justify-center w-full rotate-[-30deg]">
                  <Image src="/customer2.png" alt="customer review" width="102" height="102" className="flex justify-center  mt-[-40px]" />
                  <h4 className="font-sans font-bold text-[#525252] text-lg">Hannah Schmitt</h4>
                  <p className="font-sans font-normal text-[#525252] text-xs mt-2 mb-4">Lead designer</p>
                  <p className="flex flex-wrap w-[230px] font-sans text-xs text-[#525252]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, 
                    nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. 
                    Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus 
                    pellentesque enim 
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-72 h-72 rotate-[30deg]">
              {/* <!-- Bottom navy layer --> */}
              <div className="absolute inset-0 bg-[#1b1d36] -translate-x-[10px] translate-y-[15px] rounded-[60px_90px_40px_80px/80px_70px_70px_100px]"></div>
              {/* <!-- Top white layer --> */}
              <div className="absolute inset-0 bg-white rounded-[60px_90px_40px_80px/80px_70px_70px_100px]">
                <div className="flex flex-col items-center justify-center w-full rotate-[-30deg]">
                  <Image src="/customer3.png" alt="customer review" width="76" height="76" className="flex justify-center  mt-[-30px]" />
                  <h4 className="font-sans font-bold text-[#525252] text-lg">Hannah Schmitt</h4>
                  <p className="font-sans font-normal text-[#525252] text-xs mt-2 mb-4">Lead designer</p>
                  <p className="flex flex-wrap w-[230px] font-sans text-xs text-[#525252]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, 
                    nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. 
                    Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus 
                    pellentesque enim 
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
        {/* what our client are saying end */}
        {/* upload doc here start */}
        <div className="flex flex-col items-center bg-[#183B560D] py-10">
            <h4 className="font-sans font-semibold text-4xl text-[#1B1F3B]">Upload your company logo</h4>
            <p className="font-sans font-medium text-3xl text-[#686868] mt-5">Recommended size: 256x256px, PNG or JPG</p>
            <div className="flex flex-col items-center  justify-center my-20 w-[882px] h-[256px] border-2 border-[#686868] rounded-md  border-dashed bg-[#fff]">
              <p className="font-sans font-medium text-3xl text-[#16192F] mb-5" >Drag and drop a file here, or</p>
              <label className="flex justify-center items-center font-normal text-3xl text-[#16192F] rounded-md w-[220px] h-[59px] flex items-center cursor-pointer border-2 border-[#16192F]" onClick={handleClick}>
                  Browse
              </label>
              <input 
                  type="file"  
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  accept="image/*" 
                  name="image" 
                  style={{ visibility: "hidden" }}  
                  className="border-2 border-red-500 w-full" 
              />
            </div>
            <button className="cursor-pointer w-[126px] h-[39px] bg-[#1B1F3B] font-sans font-semibold text-2xl rounded-[10px] text-[#fff]" type="button">Save</button>
        </div>
        {/* upload doc here ends */}
      <Footer />
    </>
  )
}
export default Home;
