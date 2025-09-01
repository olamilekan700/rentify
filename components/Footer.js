import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:px-5 lg:bg-black">
            <div>
                <p className="text-2xl text-blue-500 font-bold">Rentify</p>
                <p className="text-xs text-gray-100"> &copy; {year} Rental Management</p>
            </div>
            <div>
                <p className="text-md text-gray-700">Head Office</p>
                <p className="text-md text-gray-700">Umaru Musa Way, Asokoro</p>
            </div>
            <div>
                <ul className="flex lg:justify-end items-center gap-8">
                    <li><Link href="#"><FaSquareFacebook className="text-3xl text-blue-500"/></Link></li>
                    <li><Link href="#"><FaGithub className="text-3xl text-blue-500"/></Link></li>
                    <li><Link href="#"><FaLinkedin className="text-3xl text-blue-500" /></Link></li>

                </ul>
                <ul className="flex lg:justify-end item-center gap-8">
                    <li><Link href="#" className="text-sm text-white">Glossary</Link></li>
                    <li><Link href="#" className="text-sm text-white">Policies</Link></li>
                    <li><Link href="#" className="text-sm text-white">Cookies</Link></li>
                </ul>
            </div>
        </footer>
    ) 
}