    "use client"
import { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";


export default function LoginPage() {
const [count,setCount] = useState (0);

 useEffect(()=>{
    const handleFetch = async ()=>{
        const response = await fetch("https://dummyjson.com/products")
    }
 })
    return (
        <main className="flex flex-col gap-3 justify-center items-center py-10">
            <FaFacebookSquare className="text-4xl text-red-500 rounded" />
            <p>count: {count} </p>
            <button onClick={()=>{setCount(count + 1)}} className="w-[100px] h-[70px] rounded bg-blue-500  
            text-white">Increment</button> 
        </main>
    )
}