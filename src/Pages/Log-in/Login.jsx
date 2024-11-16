import React, { useState } from 'react';
import {Link , useNavigate } from "react-router-dom"; 
// image
import img from "../../Image/auth/log-in-page.png";
// component 
import InputComponent from "../../Components/Generics/InputComponent.jsx";
import ButtonComponent from "../../Components/Generics/ButtonComponent.jsx";
// api
import axios from "axios";
import API_BASE_URL from "../../API.jsx";
// cookie
import Cookies from "js-cookie";
// toast notifaction
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    let navigate = useNavigate();
    // variables
    const [from , setFrom] = useState({
        email: "",
        password: ""
    });
    const [err , setErr] = useState({
        emailErr : "",
        passwordErr : ""
    });
    const [accept , setAccept] = useState(false);
    // loading
    const [isLoading , setIsLoading] = useState(false);
    // handle change inputs
    const HandleChange = (e)=> setFrom({...from , [e.target.name] : e.target.value });
    // regular experision email , password
    let regEmail = /^[A-Za-z0-9_-]+@gmail\.com$/;
    let regPassword = /^[A-Za-z\d@$!%*?&]{8,}$/;
    // fetch data 
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        setAccept(true);
        setIsLoading(true);
        setErr({...err , emailErr : "" , passwordErr : ""});
        let flag = true;
        (!regEmail.test(from.email) || !regPassword.test(from.password) ) ? flag= false : flag=true;
        try{
            if(flag){
                let res = await axios.post(`${API_BASE_URL}/users/login/${from.email}/${from.password}`);
                if(res.status === 200){
                    toast.success("Wellcome Back !" , 
                        {position: "top-center"} , {autoClose : 2000});
                    let token = res.data.JWT;
                    Cookies.set("token" , token , { expires: 365, path: '/' });
                    setTimeout(()=>{
                        navigate("/");
                    } , 3000);
                }
            }
        }catch(err){
            if(err.status === 400){
                if(err.response.data.message === "this email not found"){
                    toast.error("this email not found", 
                        {position: "top-center"} , {autoClose : 2000});
                    setErr({...err , emailErr : "this email not found"})
                }else if(err.response.data.message === "the password is wrong "){
                    toast.error("password is wrong", 
                        {position: "top-center"} , {autoClose : 2000});
                    setErr({...err , passwordErr : "password is wrong"})
                }
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
            <ToastContainer stacked  />
           <div className="absolute right-[28%] max-sm:right-3 top-5 mx-2 flex gap-2">
             <button className="rounded-[25px] text-xl flex items-center py-1 px-5 text-lightWhite bg-darkRed duration-500 hover:bg-lightRed"><Link to="/login-page">Login</Link></button>
             <button className="rounded-[25px] text-xl flex items-center py-1 px-5  duration-500 hover:bg-darkRed hover:text-lightWhite"><Link to="/sign-up-page"> Sign Up</Link></button>
           </div>
            <div className="w-[70%] max-sm:w-11/12 h-fit flex flex-col justify-center items-center" >
                <h3 className="w-[40%] max-sm:w-full max-lg:w-[55%] text-6xl max-[1100px]:text-[40px] max-lg:text-4xl max-sm:text-4xl mb-6 flex flex-col">
                    <span>Log in to</span>
                   <span><span className="text-lightRed "> House</span> foods </span>
                </h3>
                <form className=" w-[40%] max-sm:w-full max-lg:w-[55%] mt-5" onSubmit={HandleSubmit}>
                    {/* start email */}
                    <div className="mb-3">
                        <InputComponent label="Your Email Address" htmlFor="email" name="email"
                        id="email" type="email" placeholder="Your Email Address"
                        onChange={HandleChange} className={(!regEmail.test(from.email) && accept) ? 'border-lightRed focus:border-lightRed' : "border-gray focus:border-gray"} />
                        {!regEmail.test(from.email) && accept && ( <p className="px-2 text-lightRed">Your email must be a valid gmail address</p>)}
                        {err.emailErr && (<p className="px-2 text-lightRed">{err.emailErr}</p>)}
                    </div>
                    {/* end email */}
                    {/* start password */}
                    <div className="mb-3">
                        <InputComponent label="Creare Your Password" htmlFor="password" name="password"
                        id="password" type="password" placeholder="Create Your Password"
                        onChange={HandleChange} className={(!regPassword.test(from.password) && accept) ? 'border-lightRed focus:border-lightRed' : "border-gray focus:border-gray"} />
                        {!regPassword.test(from.password) && accept && (<p className="px-2 text-lightRed">Use a strong password: 8+ chars, A-Z, a-z, 0-9, special.</p>)}
                        {err.passwordErr && (<p className="px-2 text-lightRed">{err.passwordErr}</p>)}
                    </div>
                    {/* end password */}
                    <ButtonComponent isLoading={isLoading}>Log In</ButtonComponent>
                </form>
            </div>
      </section>
    </>
  )
}

export default Login;