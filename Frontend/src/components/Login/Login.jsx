function Login(){
    return(
        <>
        <div className="overflow-hidden">
            <div className="bg-loginHero bg-cover xl:bg-loginHero2 flex justify-center items-center h-screen w-screen">
               <div className=" h-[500px] w-[300px] sm-0:w-[400px] sm:w-[450px] md:w-[540px]  bg-white/15 backdrop-blur-sm shadow-xl border border-white/20 rounded-3xl p-6">
               <h1 className="text-center text-white font-Roboto font-semibold text-3xl">Login</h1>
               <form className="mt-2 flex-col flex gap-4">
                    <label/>
                    <input className="rounded  w-full p-3 h-[40px] outline-none " type="email" placeholder="Email"/>
                    <input className="rounded w-full p-3 h-[40px] outline-none " type="password" placeholder="Password"/>
                </form>
               </div>
            </div>
        </div>
        </>
    )
}

export default Login
