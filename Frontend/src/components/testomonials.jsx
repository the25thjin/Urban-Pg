import img1 from "../assets/Testimonials/one.png"
import img2 from "../assets/Testimonials/two.png"
import img3 from "../assets/Testimonials/three.png"
import img4 from "../assets/Testimonials/four.png"


function Testimonials(){
    return(
        <>
        <div className="relative z-[-1] top-[-200px]">
            <div>
                <h1 className="text-[#d4d4d4] font-Poppins text-center  font-extrabold text-[50px]">Our Testimonials</h1>
            </div>
            <div className="flex mt-10 text-white font-Crimson justify-around">
           
                <div className=" h-[345px] w-[268px] bg-[#010101]  bg-opacity-50 rounded-3xl">
                    <img src={img1} className="size-[150px] mx-auto mt-4 "/>
                    <p className="text-center mt-2 p-4 ">"I found the perfect PG near my college through this site. The process was quick, easy, and stress-free. Highly recommend to all students!"</p>
                </div>
                
                
                <div className=" h-[345px] w-[268px] bg-[#010101] bg-opacity-50 rounded-3xl">
                    <img src={img2} className="size-[150px] mx-auto mt-4 "/>
                    <p className="text-center mt-2 p-4">"No more endless searches! I discovered a hidden gem that fits my budget perfectly. Thanks to this platform, I’m now settled in a great place close to campus."</p>
                </div>
                <div className=" h-[345px] w-[268px] bg-[#010101] bg-opacity-50 rounded-3xl">
                    <img src={img3} className="size-[150px] mx-auto mt-4 "/>
                    <p className="text-center mt-2 p-4">"The no-brokerage policy was a lifesaver. I saved so much money and found a great flat with all the amenities I needed."</p>
                </div>
                <div className=" h-[345px] w-[268px] bg-[#010101] bg-opacity-50 rounded-3xl">
                    <img src={img4} className="size-[150px] mx-auto mt-4 "/>
                    <p className="text-center mt-2 p-4 ">"This website made finding accommodation so simple. The verified listings and genuine reviews helped me choose the best option without any doubts."</p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Testimonials