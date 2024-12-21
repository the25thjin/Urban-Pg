import { Link } from "react-router-dom"

function Login(){
    return(
        <>
        <div className="overflow-hidden font-Roboto">
            <div className="bg-orange-800/25 bg-cover xl:bg-orange-800/25 flex justify-center items-center h-screen w-screen">
               <div className=" h-[350px] w-[300px] sm-0:w-[400px] sm:w-[450px]  sm:h-[370px] md:w-[450px]  bg-white/15 backdrop-blur-sm shadow-xl border border-white/20 rounded-3xl p-6">
               <h1 className="text-center text-white   font-semibold text-3xl">Login</h1>
               <form className="mt-4">
                   <div className="flex-col flex  gap-4">
                    <input required className="rounded  placeholder:text-white shadow-sm text-black bg-white/10 text-[15px] border border-white/10 w-full p-3 h-[40px] outline-none " type="email" placeholder="Email"/>
      
                    <input required className="rounded text-black w-full shadow-sm placeholder:text-white  bg-white/10 text-[15px] p-3 h-[40px] outline-none " type="password" placeholder="Password"/>
                    </div> 
                    <div className="flex mt-9 justify-between text-[15px] text-black  ">
                        <label>
                        <input type="checkbox" /> Remember Me
                        </label>
                       
                        <Link className="hover:text-blue-500" to='/forgot=password'>Forgot Password?</Link>
                        {/* <Link className="hover:text-blue-500" to='/sign-up'>Sign up</Link> */}
                    </div>
                    {/* <Link></Link> */}
                        <button type="submit" className="bg-white w-full hover:shadow-orange-600 transition delay-75 ease-in-out duration-300 hover:shadow-xl mt-3 rounded-2xl h-[35px] ">Login</button>

                        <div className="text-[15px] text-center mt-4">
                            Don't have an account? <Link className="hover:text-blue-500 font-bold" to='/sign-up'>Sign up</Link>
                        </div>
                        
                </form>
               </div>
            </div>
        </div>
        </>
    )
}

export default Login
