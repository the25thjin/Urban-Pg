import logo from "../assets/logo.png"

function Contact(){
    return(<>
    <div className="text-[#d4d4d4] font-Poppins mb-16">
        <div>
            <h1 className="text-[#d4d4d4] font-Poppins text-center  font-extrabold text-[50px]">Contact Us</h1>
        </div>
        <div className="flex justify-around items-center mt-20 ">
            <div className="h-[420px] w-[400px]  flex-col  p-6 rounded-3xl">
                <div>
                    <h1 className="">What's your name?</h1>
                    <input className="text-black mt-2 w-[350px] h-[40px] rounded p-1 outline-none"  placeholder="Name"/>
                </div>
                <div className="mt-7">
                    <h1>What's your email?</h1>
                    <input className="text-black mt-2 w-[350px] h-[40px] rounded p-1 outline-none"  placeholder="Email"/>
                </div>
                <div className="mt-7 mb-4">
                    <h1>Your Message</h1>
                    <textarea className="text-black mt-2 w-[350px] h-[90px] rounded p-1 outline-none"  placeholder="Message"/>
                </div>
                <div>
                    <button className="w-[350px] bg-orange-800 h-[35px] rounded hover:bg-orange-900 ">Submit</button>
                </div>
            </div>
            <div>
                <img className=" " src={logo}/>
            </div>
        </div>
    </div>
    </>
    )
}
export default Contact