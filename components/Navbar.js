    "use client"
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";


export function Navbar () {
    const [dropDown,setDropDown] = useState(false);

    const toggleMenu = ()=>{
        setDropDown(!dropDown)
    }
    return(
        <main className="bg-white shadow shadow-gray-300 w-full">
            <div className="flex justify-between h-[50px] pt-3 px-5">
                <p className="text-blue-500 font-bold text-2xl">Rentify</p>
                <ul className="hidden md:flex gap-10 font-semibold cursor-pointer ">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/dashboard/tenant-form"><li>Tenant-Form</li></Link>
                    <li>Rent-List</li>
                </ul>
                <div className="hidden md:flex gap-3">
                <p className="w-[60px] h[30px] bg-blue-500 text-white flex justify-center items-center rounded">Login</p>
                <CgProfile className="text-3xl"/>
                </div>
                <div className="block md:hidden">
                    <RxHamburgerMenu onClick={toggleMenu} className="text-blue-500 text-3xl"/>
                </div>
            </div>
            {dropDown && (
            <div className="px-5 pb-1 md:hidden">
                <ul>
                    <li>Home</li>
                    <li>tenant-form</li>
                    <li>Rent-List</li>
                </ul>
                <p className="w-[60px] h[30px] bg-blue-500 text-white flex justify-center items-center rounded">Login</p>
                <CgProfile className="text-3xl"/>
            </div>
            )}
        </main>
    
    )
}