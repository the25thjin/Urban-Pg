import { useState } from "react"

import  logo   from "../assets/logo.png"
import  close   from "../assets/close.svg"
import  menu   from "../assets/menu.svg"

function Navbar(){
    const [toggle, setToggle] = useState(false)

    return(
    <>
    <div className="bg-black font-Poppins text-white flex justify-between items-center h-[93px]  w-screen fixed ">
        <div> <img src={logo} className="w-[140px] h-[60px] ml-4 cursor-pointer" alt="logo"  /> </div>
        <div className="sm:block hidden"><ul className="flex justify-evenly text-xl gap-7 mr-10 ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">Contact</li>
            </ul> 
        </div>
        <div className="sm:hidden hidden h-[180px] w-[150px] bg-orange-700 top-16 right-10 pt-3 relative rounded-2xl">
        <img className=" ml-24  size-[30px] cursor-pointer" src={close}/>
       
            <ul className="list-none text-left p-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">Contact</li>
            </ul>
        
        </div>
    </div>
    </>
    )
}

export default Navbar