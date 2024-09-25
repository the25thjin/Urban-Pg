import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="bg-black z-[2] font-Poppins text-white flex justify-between items-center h-[93px]  w-screen fixed ">
        <div>
          {" "}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {" "}
            <img
              src={logo}
              className="w-[140px] h-[60px] ml-4 cursor-pointer"
              alt="logo"
            />{" "}
          </Link>
        </div>
        <div className="sm:block hidden">
          <ul className="flex justify-evenly text-xl gap-7 mr-10 ">
            {/* <NavLink to="/home">  <li className="cursor-pointer transition ease-in-out duration-200 hover:text-yellow-500">Home</li></NavLink> */}
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
              onClick={(e) => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {" "}
              <li className="cursor-pointer transition ease-in-out duration-200 hover:text-yellow-500">
                About Us
              </li>
            </NavLink>
            <NavLink
              to="/testimonials"
              className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
              onClick={(e) => {
                const aboutSection = document.getElementById("testimonials");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {" "}
              <li className="cursor-pointer transition ease-in-out duration-200 hover:text-yellow-500">
                Testimonials
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
              onClick={(e) => {
                const aboutSection = document.getElementById("contact");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {" "}
              <li className="cursor-pointer transition ease-in-out duration-200 hover:text-yellow-500">
                Contact
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sm:hidden flex  flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" mr-9 size-[30px] cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-orange-800  `}
          >
            <ul className=" text-[#F2C046] list-none flex flex-col gap-4 justify-end items-start ">
              {/* <li className="cursor-pointer " onClick={()=>{
                        setToggle(!toggle)
                    }}>Home</li> */}
              <NavLink
                to="/about"
                onClick={(e) => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {" "}
                <li
                  className="cursor-pointer "
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  About Us
                </li>
              </NavLink>
              <NavLink
                to="/testimonials"
                onClick={(e) => {
                  const aboutSection = document.getElementById("testimonials");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {" "}
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Testimonials
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                onClick={(e) => {
                  const aboutSection = document.getElementById("contact");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {" "}
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
