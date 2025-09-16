"use client";
import Image from "next/image";
import Link from "next/link";
const Navbar = ()=>{
    return(
        <>
            <div className="flex justify-between items-center px-16">
                <Image src="/onada.png" alt="onada docs" width={104} height={104} />
                <nav className="flex justify-evenly font-sans font-medium text-sm text-[#000] w-[500px]">
                    <Link href="#home">Home</Link>
                    <Link href="#features">Features</Link>
                    <Link href="#pricing">Pricing Plans</Link>
                    <Link href="#testimony">Testimonial</Link>
                </nav>
                <Link href="/sign-up" className="flex justify-center items-center font-sans font-bold text-sm text-[#fff] !bg-[#1B1F3B] w-[194px] h-[53px] rounded-[10px]">
                    Get Started Free
                </Link>
            </div>
        </>
    );
}
export default Navbar;