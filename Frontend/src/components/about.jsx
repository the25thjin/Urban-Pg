import image1 from "../assets/About us/1st.png"
import image2 from "../assets/About us/2nd.png"
import image3 from "../assets/About us/3rd.png"
import image4 from "../assets/About us/4th.png"

function About(){
    return(
        <>
        <div id="about">
            <div>
                <h1 className="text-[#d4d4d4] text-center font-Poppins xl:text-left font-extrabold text-[40px] xl:text-[50px] m-10 xl:m-28 relative z-[-1] xl:top-14 xl:left-[57%]">About Us</h1>
            </div>  
           <div className="font-Poppins  flex flex-col justify-center items-center xl:justify-start xl:items-start w-screen xl:h-[1400px] ">
        
                <div className=" text-white h-[353px] shadow-2xl w-[312px] sm:h-[535px] sm:w-[532px] relative z-[-1] xl:left-24 xl:top-[-200px]  rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img  src={image1}/>
                    <h1 className="p-2 sm:text-2xl font-medium sm:font-semibold text-center">Who are we?</h1>
                    <p className="sm:text-lg sm:p-2  text-center text-sm text-wrap">We're a team dedicated to helping students find the  best hostels, PGs, and flats near their colleges. With firsthand experience in student housing, we understand the challenges and are here to provide solutions.</p>
                </div>
                 <div className=" text-white shadow-2xl h-[353px] w-[312px]  sm:h-[535px]  sm:w-[532px] relative z-[-1] xl:left-[55%]  top-10   xl:top-[-500px] rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img  src={image2}/>
                    <h1 className="p-2 sm:text-2xl font-medium sm:font-semibold text-center">Our Mission</h1>
                    <p className="sm:text-lg text-sm sm:p-2 text-center text-wrap">At Urban PG, we make finding student accommodations easy, affordable, and hassle-free. Our mission is to connect students with the perfect living spaces that fit their needs and budgets.</p>
                </div>
                <div className=" text-white shadow-2xl h-[353px] w-[312px]  sm:h-[535px] sm:w-[532px] relative z-[-1] xl:left-24  xl:top-[-600px] top-20 rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img  src={image3}/>
                    <h1 className="p-2 sm:text-2xl font-medium sm:font-semibold text-center">What we Offer?</h1>
                    <p className="sm:text-lg text-sm sm:p-2 text-center text-wrap">We provide a comprehensive platform with a vast database of accommodations. From cozy hostels to spacious flats, our curated listings offer a variety of options to suit every preference and budget.</p>
                </div>
                    <div className=" text-white shadow-2xl h-[353px] w-[312px]  sm:h-[535px] sm:w-[532px] relative z-[-1] xl:left-[55%]  top-28 xl:top-[-900px] rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img  src={image4}/>
                    <h1 className="p-2 sm:text-2xl font-medium sm:font-semibold text-center">Our Promise</h1>
                    <p className="sm:text-lg sm:p-2 text-sm text-center text-wrap">We are committed to transparency and quality. Our platform features only verified listings with detailed descriptions, high-quality photos, and genuine reviews from other students.</p>      
                </div> 
            </div>
           
        </div>
        </>
    )
}

export default About 