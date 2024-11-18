import React, { useState } from 'react';
import {Link , useNavigate} from "react-router-dom"; 
import img from "../../Image/auth/Sign-up-page.png";
// component 
import InputComponent from "../../Components/Generics/InputComponent.jsx";
import ButtonComponent from "../../Components/Generics/ButtonComponent.jsx";
// api
import axios from "axios";
import API_BASE_URL from "../../API.jsx";
// cookie
import Cookies from "js-cookie";
// loading 
import ClipLoader from "react-spinners/ClipLoader.js";
// toast notifaction
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    let navigate = useNavigate();

    const [from , setFrom] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const [err , setErr] = useState("");
    const [accept , setAccept] = useState(false);
    // loading
    const [isLoading , setIsLoading] = useState(false);
    // handle change inputs
    const HandleChange = (e)=> setFrom({...from , [e.target.name] : e.target.value });
    // regular experision
    let regEmail = /^[A-Za-z0-9_-]+@gmail\.com$/;
    let regPassword = /^[A-Za-z\d@$!%*?&]{8,}$/;
    // fetch data
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        setAccept(true);
        setIsLoading(true);
        setErr("");
        let flag = true;
        ( from.fullName === "" || !regEmail.test(from.email) || !regPassword.test(from.password) ) ? flag= false : flag=true;
        try{
            if(flag){
                let res = await axios.post(`${API_BASE_URL}/users/signin` ,{
                    "Name" : from.fullName,
                    "Email": from.email,
                    "Password": from.password
                });
               
                if(res.status === 200){
                    toast.success('Successfully Registered',
                        {position: "top-center"} , {autoClose : 2000});
                    let token = res.data.token;
                    let userId = res.data.data._id;
                     Cookies.set("token" , token , { expires: 365, path: '/' });
                     Cookies.set("userId" , userId , { expires: 365, path: '/' });
                    setTimeout(()=>{
                        navigate("/");
                    } , 2000);
                }
            }
        }catch(err){
            if(err.status === 400){
                toast.error("User found already , please enter different email" ,
                    {position: "top-center"} , {autoClose : 2000});
                setErr("User found already , please enter different email");
            }
            if(err.message === "Network Error"){
                navigate("/not-found");
            }
        }finally{
            setIsLoading(false);
        }
    }
  return (
    <>
      <section  className='h-screen w-full flex flex-col justify-center max-sm:items-center relative bg-center bg-cover bg-no-repeat' style={{backgroundImage : `url(${img})`}}>
            {/* toast */}
            <ToastContainer stacked  />
           {/* buttons auth */}
           <div className="absolute right-7 top-5 mx-2 flex gap-2">
             <button className="rounded-[25px] text-xl flex items-center py-1 px-5 text-lightWhite bg-darkRed duration-500 hover:bg-lightRed"><Link to="/sign-up-page">Sign Up</Link></button>
             <button className="rounded-[25px] text-xl flex items-center py-1 px-5  duration-500 hover:bg-darkRed hover:text-lightWhite"><Link to="/login-page">Login</Link></button>
           </div>
           {/* end button auth */}
            <div className="w-[25%] max-sm:w-11/12 max-[1100px]:w-[30%] max-lg:w-1/2 h-fit flex flex-col justify-center items-center absolute right-1/4 max-lg:right-11 max-sm:static">
                <h3 className="text-5xl mb-6 ">
                    Sign Up to
                    <span className="text-lightRed"> House</span> foods
                </h3>
                <form className="w-full mt-5" onSubmit={HandleSubmit}>
                    {/* start name */}
                    <div className="mb-3">
                        <InputComponent label="Your Full Name" htmlFor="fullName" name="fullName"
                        id="fullName" type="text" placeholder="Your Full Name" 
                        className={(from.fullName === "" && accept) ? 'border-lightRed focus:border-lightRed' : "border-gray focus:border-gray" }
                        onChange={HandleChange} />
                        { from.fullName === "" && accept && (<p className="px-2 text-lightRed">your Name is reguired</p>)}
                    </div>
                    {/* end name */}
                    {/* start email */}
                    <div className="mb-3">
                        <InputComponent label="Your Email Address" htmlFor="email" name="email"
                        id="email" type="email" placeholder="Your Email Address"
                        onChange={HandleChange} className={(!regEmail.test(from.email) && accept) ? 'border-lightRed focus:border-lightRed' : "border-gray focus:border-gray"} />
                        {!regEmail.test(from.email) && accept && ( <p className="px-2 text-lightRed">Your email must be a valid gmail address</p>)}
                        {err.errEmail && (<p className="px-2 text-lightRed">{err.errEmail}</p>)}
                    </div>
                    {/* end email */}
                    {/* start password */}
                    <div className="mb-3">
                        <InputComponent label="Creare Your Password" htmlFor="password" name="password"
                        id="password" type="password" placeholder="Create Your Password"
                        onChange={HandleChange} className={(!regPassword.test(from.password) && accept) ? 'border-lightRed focus:border-lightRed' : "border-gray focus:border-gray"} />
                        {!regPassword.test(from.password) && accept && (<p className="px-2 text-lightRed">Use a strong password: 8+ chars, A-Z, a-z, 0-9, special.</p>)}
                    </div>
                    {/* end password */}
                    <ButtonComponent isLoading={isLoading}>Create Account</ButtonComponent>
                </form>
            </div>
      </section>
    </>
  )
}

export default SignUp;
