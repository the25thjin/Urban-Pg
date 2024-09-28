import { Link } from "react-router-dom"

function Signup(){
    return(
        <>
        <div className="overflow-hidden font-Roboto">
            <div className="bg-loginHero bg-cover xl:bg-loginHero2 flex justify-center items-center h-screen w-screen">
               <div className=" h-[400px] w-[300px] sm-0:w-[400px] sm:w-[450px]  sm:h-[400px] md:w-[450px]  bg-white/15 backdrop-blur-sm shadow-xl border border-white/20 rounded-3xl p-6">
               <h1 className="text-center text-white   font-semibold text-3xl">Sign Up</h1>
               <form className="mt-4">
                   <div className="flex-col flex  gap-4">
                   <input className="rounded  placeholder:text-white shadow-sm text-black bg-white/10 text-[15px] border border-white/10 w-full p-3 h-[40px] outline-none " type="text" placeholder="Username"/>
                   <input className="rounded  placeholder:text-white shadow-sm text-black bg-white/10 text-[15px] border border-white/10 w-full p-3 h-[40px] outline-none " type="text" placeholder="First Name"/>
                    <input className="rounded  placeholder:text-white shadow-sm text-black bg-white/10 text-[15px] border border-white/10 w-full p-3 h-[40px] outline-none " type="email" placeholder="Email"/>
      
                    <input className="rounded text-black w-full shadow-sm placeholder:text-white  bg-white/10 text-[15px] p-3 h-[40px] outline-none " type="password" placeholder="Password"/>
                    </div> 
                    {/* <div className="flex mt-9 justify-between text-[15px] text-black  ">
                        <label>
                        <input type="checkbox" /> Remember Me
                        </label>
                       
                        <Link className="hover:text-blue-500" to='/forgot=password'>Forgot Password?</Link>
                       
                    </div> */}

                        <button type="submit" className="bg-white w-full hover:shadow-yellow-600 transition delay-75 ease-in-out duration-300 hover:shadow-xl mt-3 rounded-2xl h-[35px] ">Sign Up</button>

                        <div className="text-[15px] text-center mt-4">
                            Already have an account? <Link className="hover:text-blue-500 font-bold" to='/login'>Login</Link>
                        </div>
                        
                </form>
               </div>
            </div>
        </div>
        </>
    )
}

export default Signup
