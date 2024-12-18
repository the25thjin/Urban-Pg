import { Link } from "react-router-dom";
import NavBar from "../Navbar/navbar";



function HomePage(){
    return(
        <>
            <div className="text-white bg-black w-screen h-screen ">
                <NavBar/>
            </div>
        </>
    )
}

export default HomePage;