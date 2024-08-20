import{logo , menu , close}  from "../assets/logo.png"

function Navbar(){
    return(
    <>
    <div className="bg-black font-Poppins text-white flex justify-between items-center h-[93px]  w-screen fixed ">
        <div> <img src={logo} className="w-[140px] h-[60px] ml-4 cursor-pointer" alt="logo"  /> </div>
        <div><ul className="sm:flex hidden  justify-evenly text-xl gap-7 mr-10 ">
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