import user from "../../assets/userImage.jpg";
function Profile() {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden font-Roboto">
        <div className="bg-profileHero p-10 text-white bg-cover w-screen h-screen">
          <div className="flex h-screen flex-col  gap-10  items-center">
            <h1 className="text-center p-4 font-semibold text-2xl sm:text-3xl">
              My Profile
            </h1>
            <div className="flex     gap-4 mb-16  justify-center items-center ">
              <div className="w-[300px] sm:w-[400px] md:w-[300px] xl:w-[400px] h-[500px]  bg-white/15 backdrop-blur-sm border border-white/15  shadow-2xl text-center rounded-2xl">
                <div className="flex gap-12">
                  <img
                    src={user}
                    className="bg-cover w-[100px] h-[100px] relative left-5 top-3.5 rounded-full"
                  />
                  <div className="sm:ml-9 md:ml-0 xl:ml-9">
                    <h1 className="text-lg mt-10 ">Mann Rana</h1>
                    <div>
                      <span className="text-sm">the25thjin | he/him</span>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3 ml-1">
                  <div className="flex w-[60px] flex-col ">
                  <svg
                    className="size-6  mt-7 ml-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    viewBox="0 0 32 32"
                    id="phone"
                  >
                    <path d="M27.308,20.649l-2.2-2.2a3.521,3.521,0,0,0-4.938-.021,2.152,2.152,0,0,1-2.729.267A15.026,15.026,0,0,1,13.3,14.562a2.181,2.181,0,0,1,.284-2.739A3.521,3.521,0,0,0,13.553,6.9l-2.2-2.2a3.514,3.514,0,0,0-4.961,0l-.633.634c-3.3,3.3-3.053,10.238,3.813,17.1,4.14,4.141,8.307,5.875,11.686,5.875a7.5,7.5,0,0,0,5.418-2.061l.634-.634A3.513,3.513,0,0,0,27.308,20.649ZM25.894,24.2l-.634.634c-2.6,2.6-8.339,2.125-14.276-3.813S4.571,9.34,7.171,6.74L7.8,6.107a1.511,1.511,0,0,1,2.133,0l2.2,2.2a1.511,1.511,0,0,1,.021,2.11,4.181,4.181,0,0,0-.531,5.239,17.01,17.01,0,0,0,4.713,4.706,4.179,4.179,0,0,0,5.231-.517,1.512,1.512,0,0,1,2.118.013l2.2,2.2A1.51,1.51,0,0,1,25.894,24.2Z"></path>
                  </svg> 
                  <svg  className="size-6 mt-4 ml-6"  xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 64 64" id="email"> 
  <path  d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path>
  <path  d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path>
  <path  d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path>
</svg>
</div>
<div className=" mt-7 flex justify-between flex-col ">
  <h1 className="text-left"> 1234567890</h1>
  <h1> abc@gmail.com</h1>
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
