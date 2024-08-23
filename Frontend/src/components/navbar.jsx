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
        
        <div className="sm:hidden flex flex-1 justify-end items-center ">
                <img src={toggle?close:menu} alt="menu" className=" mr-9 size-[30px] cursor-pointer" onClick={()=>{setToggle(!toggle)}}/>
                <div className={`${!toggle ? 'hidden':'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-orange-800  `} >
                    <ul className="text-[#F2C046] list-none flex flex-col gap-4 justify-end items-start ">
                    <li className="cursor-pointer " onClick={()=>{
                        setToggle(!toggle)
                    }}>Home</li>
                    <li className="cursor-pointer "  onClick={()=>{
                        setToggle(!toggle)
                    }} >About Us</li>
                    <li className="cursor-pointer"  onClick={()=>{
                        setToggle(!toggle)
                    }}>Testimonials</li>
                    <li className="cursor-pointer"  onClick={()=>{
                        setToggle(!toggle)
                    }}>Contact</li>
                    </ul>
                </div>
        </div>
    </div>
    </>
    )
}

export default Navbar