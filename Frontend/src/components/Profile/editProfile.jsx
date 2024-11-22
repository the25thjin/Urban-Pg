import user from "../../assets/userImage.jpg";
import { profileAtom } from "../../assets/atoms";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
function EditProfile(){
    const [profile, setProfile] = useAtom(profileAtom)

    return(
        <>
         <div className="overflow-x-hidden overflow-y-hidden font-Roboto">
        <div className="bg-profileHero p-10 text-white bg-cover w-screen h-screen">
          <div className="flex h-screen flex-col  gap-10  items-center">
            <h1 className="text-center p-4 font-semibold text-2xl sm:text-3xl">
              My Profile
            </h1>
            <div className="flex     gap-4 mb-16  justify-center items-center ">
              <div className="w-[300px] sm:w-[400px] md:w-[300px] xl:w-[400px] h-[500px]  bg-white/15 backdrop-blur-sm border border-white/15  shadow-2xl text-center rounded-2xl">
                <div className="flex md:flex-col gap-12">
                  <img
                    src={user}
                    className="bg-cover w-[100px] md:w-[230px] xl:w-[300px]  md:h-[230px] h-[100px] md:left-[35px] xl:left-[50px] xl:h-[300px] md:top-[50px] xl:top-[40px] relative left-5 top-3.5 rounded-full"
                  />
                  <div className="sm:ml-9 md:ml-0 ">
                    <h1 className="text-lg md:text-2xl mt-10 ">Mann Rana</h1>
                    <div>
                      <span className="text-sm md:text-lg">the25thjin | he/him</span>
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex mt-3 ml-1">
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
                    <svg
                      className="size-6 mt-4 ml-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      viewBox="0 0 64 64"
                      id="email"
                    >
                      <path d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path>
                      <path d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path>
                      <path d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path>
                    </svg>
                  </div>
                  <div className=" mt-7 flex justify-between flex-col ">
                    <h1 className="text-left"> 1234567890</h1>
                    <h1> abc@gmail.com</h1>
                    
                  </div>
                </div>

                <div className="mt-4 ml-7 md:hidden">
                  {/* <h1 className="text-left">My Social's -</h1> */}
                  <div className="flex gap-4">
                    <div>
                      <svg
                        className="mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        width="20"
                        height="20"
                        viewBox="0 0 2476 2476"
                        id="instagram"
                      >
                        <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                      </svg>
                      <svg
                        className="w-[20px] h-[20px] mt-6 "
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        viewBox="0 0 16 16"
                        id="facebook"
                      >
                        <path
                          fill="#ffffff"
                          fill-rule="evenodd"
                          d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex mt-2 text-sm justify-between flex-col">
                      <a href="#" target="_blank">
                        _mann.15_
                      </a>
                      <a href="#" target="_blank" className="text-left">
                        Mann
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:hidden">
                  <textarea
                    maxLength={50}
                    value={profile.bio}
                    onChange={(e)=>setProfile({...profile, bio:e.target.value})}
                    className="text-black shadow-xl border  text-sm resize-none w-[250px] sm:w-[350px] md:w-[250px] xl:w-[350px] h-[100px] rounded-md bg-white/45 text-left p-2 outline-none"
                  />
                </div>
                <div className="md:hidden absolute right-6 bottom-6">
                  <Link to={"/profile"}>
                  <button className="bg-white/45 hover:bg-white/10 text-sm duration-200 transition ease-in-out hover:scale-110 border cursor-pointer shadow-lg p-2 w-[110px]  rounded-3xl">
                    Save
                  </button></Link>
                </div>
              </div>
 {/* --------------------------------------------2nd block------------------------------------- */}
              <div className="hidden md:block   w-[360px] h-[500px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] bg-white/15 backdrop-blur-sm border border-white/15  shadow-2xl text-center rounded-2xl">
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
                    <svg
                      className="size-6 mt-4 ml-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      viewBox="0 0 64 64"
                      id="email"
                    >
                      <path d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path>
                      <path d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path>
                      <path d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path>
                    </svg>
                  </div>
                  <div className=" mt-7 flex justify-between flex-col ">
                    <h1 className="text-left"> 1234567890</h1>
                    <h1> abc@gmail.com</h1>
                  </div>
                </div>

                <div className="mt-4 ml-7">
             
                  <div className="flex gap-4">
                    <div>
                      <svg
                        className="mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ffffff"
                        width="20"
                        height="20"
                        viewBox="0 0 2476 2476"
                        id="instagram"
                      >
                        <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                      </svg>
                      <svg
                        className="w-[20px] h-[20px] mt-6 "
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                        viewBox="0 0 16 16"
                        id="facebook"
                      >
                        <path
                          fill="#ffffff"
                          fill-rule="evenodd"
                          d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex mt-2 text-base justify-between flex-col">
                      <a className="hover:text-orange-400 transition duration-200 ease-in-out" href="#" target="_blank">
                        _mann.15_
                      </a>
                      <a  href="#" target="_blank" className="hover:text-orange-400 transition duration-200 ease-in-out text-left">
                        Mann
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <textarea
                    
                    maxLength={50}
                    value={profile.bio}
                    onChange={(e)=>setProfile({...profile, bio:e.target.value})}
                    className="text-black shadow-xl border text-base resize-none w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] h-[200px] rounded-md bg-white/45 text-left p-2 outline-none"
                  />
                </div>
                <div className=" absolute right-6 bottom-6">
                  <Link to={"/profile"}>
                  <button  className="bg-white/45 text-sm duration-200 transition ease-in-out hover:scale-110 border hover:bg-white/10 cursor-pointer shadow-lg p-2 w-[110px]  rounded-3xl">
                    Save
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default EditProfile;