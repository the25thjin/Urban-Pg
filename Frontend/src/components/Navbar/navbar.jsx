import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"


function NavBar(){
    return(
        <>
            <div>
                <div className="w-screen h-18 border-solid border-white border">
                    <div className="h-full w-full flex items-center justify-between ">
                            <div>
                                <Link to={"/hoe"}>
                                 <img src={logo} className="w-[180px] cursor-pointer mt-2 ml-5 h-[80px]" alt="logo" /></Link>
                            </div>
                            <div className="bg-red-500 w-[500px] h-full ">d
                                    
                            </div>          
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar