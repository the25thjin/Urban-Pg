import hero from "../assets/hero.jpg"

function Hero(){
    return(
        <>
        <div>
            <div className="h-screen bg-cover bg-no-repeat bg-center grid place-items-center" style={{backgroundImage: `url(${hero})`}}>
                <div className="text-[#b9b8b8] font-Poppins text-center ">
                <h1 className="font-bold text-[43px] ">Can't find your perfect place?</h1>
                <h1 className="font-bold text-[43px] ">We've got you covered!</h1>

                <h2 className="font-normal mt-20 text-lg">Need affordable hostels, PGs, or flats near your college?</h2><br/>
                <h2 className="font-normal text-lg">We’ve got you covered!  </h2><br/>
                <h2 className="font-normal text-lg">Discover hidden gems for your perfect college home.</h2><br/>

                <button className="bg-orange-700 text-white  h-10 w-40 rounded-xl mt-10 hover:bg-orange-800 hover:scale-[0.9] ease-in-out">Your Next Home</button>

                </div>
            </div>
        </div>
        </>
    )
}
export default Hero