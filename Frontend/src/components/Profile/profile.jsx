function Profile() {
  return (
    <>
      <div className="overflow-hidden font-Roboto">
        <div className="bg-profileHero p-10 text-white bg-cover w-screen h-screen">
          <div className="flex h-screen flex-col   justify-center items-center">
            <h1 className="text-center p-4 font-semibold text-2xl sm:text-3xl">
              My Profile
            </h1>
            <div className="flex  w-full h-full   gap-4 mb-16  justify-center items-center ">
              <div className="w-[300px] sm:w-[400px] md:w-[300px] xl:w-[400px] h-[500px]  bg-white/15 backdrop-blur-sm border border-white/15  shadow-2xl text-center rounded-2xl">
                <div className="flex justify-around">
                  <div className="bg-white w-[100px] h-[100px] absolute left-5 top-3.5 rounded-full">
                    <img />
                  </div>
                </div>
              </div>
              <div className="hidden md:block   w-[360px] h-[500px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] bg-white/15 backdrop-blur-sm border border-white/15  shadow-2xl text-center rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
