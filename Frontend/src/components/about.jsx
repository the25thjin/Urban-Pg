import image1 from "../assets/About us/1st.png"
function About(){
    return(
        <>
        <div>
            <div>
                <h1 className="text-[#d4d4d4] font-Poppins font-bold text-[45px] m-28 relative z-[-1] top-10 left-[60%]">About Us</h1>
            </div>
            <div>
                <div className=" text-white h-[535px] w-[532px] relative z-[-1] left-24 top-[-200px] rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img src={image1}/>
                    <h1>Who are we?</h1>
                    <span>We're a team dedicated to helping students find the best hostels, PGs, and flats near their colleges. With firsthand experience in student housing, we understand the challenges and are here to provide solutions.</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default About