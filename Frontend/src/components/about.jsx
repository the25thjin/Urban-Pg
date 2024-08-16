import image1 from "../assets/About us/1st.png"
import image2 from "../assets/About us/2nd.png"
import image3 from "../assets/About us/3rd.png"
import image4 from "../assets/About us/4th.png"

function About(){
    return(
        <>
        <div>
            <div>
                <h1 className="text-[#d4d4d4] font-Poppins font-extrabold text-[50px] m-28 relative z-[-1] top-14 left-[57%]">About Us</h1>
            </div>  
            <div className="font-Poppins flex-col flex-wrap h-[1400px]">
                <div className=" text-white h-[535px] w-[532px] relative z-[-1] left-24 top-[-200px] rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img  src={image1}/>
                    <h1 className="p-2 text-2xl font-semibold text-center">Who are we?</h1>
                    <div className="text-lg text-center text-wrap">We're a team dedicated to helping students find the  best hostels, PGs, and flats near their colleges. With firsthand experience in student housing, we understand the challenges and are here to provide solutions.</div>
                </div>
                <div className=" text-white h-[535px] w-[532px] relative z-[-1] left-[55%] top-[-500px] rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img  src={image2}/>
                    <h1 className="p-2 text-2xl font-semibold text-center">Our Mission</h1>
                    <div className="text-lg text-center text-wrap">At Urban PG, we make finding student accommodations easy, affordable, and hassle-free. Our mission is to connect students with the perfect living spaces that fit their needs and budgets.</div>
                </div>
                <div className=" text-white h-[535px] w-[532px] relative z-[-1] left-24 top-[-600px] rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img  src={image3}/>
                    <h1 className="p-2 text-2xl font-semibold text-center">What we Offer?</h1>
                    <div className="text-lg text-center text-wrap">We provide a comprehensive platform with a vast database of accommodations. From cozy hostels to spacious flats, our curated listings offer a variety of options to suit every preference and budget.</div>
                </div>
                <div className=" text-white h-[535px] w-[532px] relative z-[-1] left-[55%] top-[-900px] rounded-3xl bg-[#653E3E] bg-opacity-45 ">
                    <img  src={image4}/>
                    <h1 className="p-2 text-2xl font-semibold text-center">Our Promise</h1>
                    <div className="text-lg text-center text-wrap">We are committed to transparency and quality. Our platform features only verified listings with detailed descriptions, high-quality photos, and genuine reviews from other students.</div>      
                </div>     
            </div>
           
        </div>
        </>
    )
}

export default About 