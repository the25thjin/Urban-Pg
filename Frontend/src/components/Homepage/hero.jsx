import hero from "../../assets/hero.webp"
import hero3 from "../../assets/hero3.webp"

function Hero(){
    return(
        <>
        <div>
            <div className="h-screen bg-cover bg-no-repeat bg-center grid place-items-center" style={{backgroundImage: `url(${hero})`}}>
                <div className="text-[#b9b8b8] font-Poppins text-center ">
                <h1 className="font-bold mt-[100px] md:mt-0 text-[30px] md:text-[43px] ">Can't find your perfect place?</h1>
                <h1 className="font-bold text-[30px] md:text-[43px] ">We've got you covered!</h1>

                <img className="sm:hidden block " src={hero3} />

                <h2 className="sm:block hidden font-normal mt-20 text-lg">Need affordable hostels, PGs, or flats near your college?</h2><br/>
                <h2 className="sm:block hidden font-normal text-lg">We’ve got you covered!  </h2><br/>
                <h2 className="sm:block hidden font-normal text-lg">Discover hidden gems for your perfect college home.</h2><br/>

                <button className="bg-orange-700  text-white  h-14 w-36 rounded-xl sm:mt-10 transition duration-300 ease-in-out shadow-2xl  shadow-orange-700 hover:bg-orange-900 hover:scale-110">Your Next Home</button>

                </div>
            </div>
        </div>
        </>
    )
}
export default Hero