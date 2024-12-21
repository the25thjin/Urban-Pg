import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"


function NavBar(){
    return(
        <>
            <div>
                <div className="w-screen h-18 border-solid border-white bordr">
                    <div className="h-full w-full flex items-center justify-between ">
                            <div>
                                <Link to={"/hoe"}>
                                 <img src={logo} className="w-[180px] cursor-pointer mt-2 ml-5 h-[80px]" alt="logo" /></Link>
                            </div>
                            <div className=" hidden text-gray-300 w-[500px] h-full md:flex justify-between mr-6 text-lg font-medium ">
                                    <Link>abc</Link>
                                    <Link>abc</Link>
                                    <Link to={'/profile'} >Profile</Link>
                                    <Link type="submit" className="bg-red-700  rounded-lg hover:bg-red-600 hover:scale-105 text-center h-[30px] w-[90px] transition duration-150 ease-in-out delay-75" to={'/login'}>Logout</Link>
                            </div>          
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar