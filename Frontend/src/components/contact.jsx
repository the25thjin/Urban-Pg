import logo from "../assets/logo.png"
import { useState } from "react"
function Contact(){
    // const [form, setForm] = useState({name:"",email:"",message:""})
    const [loading, setLoading] = useState(false)
    return(<>
    <div className="text-[#d4d4d4]  relative top-80 xl:top-0 font-Poppins mb-16">
        <div>
            <h1 className="text-[#d4d4d4] z-[-1] font-Poppins text-center  font-extrabold text-[50px]">Contact Us</h1>
        </div>
        <div className="flex justify-around  items-center mt-20 ">
            <div className=" w-[350px] m-4  xl:h-[440px] xl:w-[400px] bg-[#793406] flex-col  p-6 rounded-3xl">
                <div>
                    <h1 className="">What's your name?</h1>
                    <input className=" bg-[#0e0901bd] mt-2 w-[300px] xl:w-[350px] h-[40px] rounded p-1 outline-none"  placeholder="Name"/>
                </div>
                <div className="mt-7">
                    <h1>What's your email?</h1>
                    <input className="  bg-[#0e0901bd] w-[300px] mt-2 xl:w-[350px] h-[40px] rounded p-1 outline-none"  placeholder="Email"/>
                </div>
                <div className="mt-7 mb-5">
                    <h1>Your Message</h1>
                    <textarea className=" resize-none bg-[#0e0901bd] mt-2  w-[300px] xl:w-[350px] h-[90px] rounded p-1 outline-none"  placeholder="Message"/>
                </div>
                <div>
                    <button className=" w-[300px] xl:w-[350px] shadow-2xl bg-yellow-700 h-[35px] rounded hover:bg-yellow-800 transition ease-in-out duration-300 hover:scale-y-110">Submit</button>
                </div>
            </div>
            <div className="hidden md:block">
                <img alt="logo" src={logo}/>
            </div>
        </div>
    </div>
    </>
    )
}
export default Contact