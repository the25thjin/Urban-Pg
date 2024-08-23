import logo from "../assets/logo.png"
import { useState ,useRef} from "react"

function Contact(){
    const url = "https://script.google.com/macros/s/AKfycbw7iWaSfQ6qN_b4ffBcyF7jajUMVgxliNRPgdYnTIQH5AxXTqsjkaLEJ91ZA1mU0pr2SA/exec"
    const [form, setForm] = useState({name:"",email:"",message:""})
    const [loading, setLoading] = useState(false)
    const formRef = useRef("")
    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({...form,[name]:value})
      };

    const handleSubmit = (e)=>{
        e.preventDefault()
        setLoading(true)
        fetch(url,{method:'POST',mode:'no-cors',body: new FormData(formRef.current)})
        .then(res=>{
            alert("Thanks for contacting us! We will get back to you soon.")
            setLoading(false)
        })
        .catch(err=> {
            alert("Some error occurred")
            console.log(err)
            setLoading(false)
        })
    }
    return(<>
    <form ref={formRef}
          onSubmit={handleSubmit} >
    <div className="text-[#d4d4d4]  relative top-80 xl:top-0 font-Poppins mb-16">
        <div>
            <h1 className="text-[#d4d4d4] z-[-1] font-Poppins text-center  font-extrabold text-[50px]">Contact Us</h1>
        </div>
        <div className="flex justify-around  items-center mt-20 ">
            <div className=" w-[350px] m-4  xl:h-[440px] xl:w-[400px] bg-[#793406] flex-col  p-6 rounded-3xl">
                <div>
                    <h1 className="">What's your name?</h1>
                    <input  onChange={handleChange} type="Name" required name="Name" value={form.name} className=" bg-[#0e0901bd] mt-2 w-[300px] xl:w-[350px] h-[40px] rounded p-1 outline-none"  placeholder="Name"/>
                </div>
                <div className="mt-7">
                    <h1>What's your email?</h1>
                    <input  onChange={handleChange} type="Email" required name="Email" value={form.email} className="  bg-[#0e0901bd] w-[300px] mt-2 xl:w-[350px] h-[40px] rounded p-1 outline-none"  placeholder="Email"/>
                </div>
                <div className="mt-7 mb-5">
                    <h1>Your Message</h1>
                    <textarea  onChange={handleChange} name="Message" required value={form.message} className=" resize-none bg-[#0e0901bd] mt-2  w-[300px] xl:w-[350px] h-[90px] rounded p-1 outline-none"  placeholder="Message"/>
                </div>
                <div>
                    <button className=" w-[300px] xl:w-[350px] shadow-2xl bg-yellow-700 h-[35px] rounded hover:bg-yellow-800 transition ease-in-out duration-300 hover:scale-y-110"> {loading ? "Sending..." : "Send"}</button>
                </div>
            </div>
            <div className="hidden md:block">
                <img alt="logo" src={logo}/>
            </div>
        </div>
    </div>
    </form>
    </>
    )
}
export default Contact