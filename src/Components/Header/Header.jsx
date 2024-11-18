import React, { useEffect, useState } from 'react';
import "./Header.css";
import {Link , NavLink , useNavigate} from "react-router-dom";
// image
import homeImage from "../../Image/groupHome.png";
import bgHomeImage from "../../Image/bgHome.png";
// icon
import { GoArrowDown } from "react-icons/go";
import {  FaCartPlus } from "react-icons/fa";
// cookies
import Cookies from "js-cookie";

const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
       
    const HandleClick = ()=>{
      if(Cookies.get("token")){
        Cookies.remove("token");
        Cookies.remove("userId");
        setTimeout(()=>{
          navigate("/");
        } , 1000)
      }
    }

    // make rotation and animation on home when onload the site
    const [rotation, setRotation] = useState(0);
    
    useEffect(() => {
      setRotation(90);
    }, []);
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <section className='bg-local overflow-hidden allSecHome' style={{backgroundImage: `url(${bgHomeImage})`}}>
      
      {/* NavBar */}
      <header>    
        <nav className='flex justify-between px-[7%] items-center md:h-14 h-14 mx-auto text-white'>
            <div>

            <a href="/" className='cursor-pointer font-bold size-10 w-[337px] text-3xl leading-10'><p><span className='text-[#ED0707]'>House</span> foods</p></a>

            </div>
            <div className={ `md:static absolute md:min-h-fit  min-h-[30vh] left-0 transition-all duration-500 md:duration-0 md:z-0  opacity-90 ease-in-out md:w-auto w-full flex text-center items-center ${open?'top-[8%] mb-5 z-[1] bg-black':'top-[-100%]'}`}>

            <ul className='flex md:flex-row mx-auto flex-col md:items-center md:gap-[4vw] gap-6 font-sans font-medium item-center'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/order">Best order</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
            </ul>

            </div>
            <div className='flex items-center gap-4'>
            {
                Cookies.get("token") ?
                <>
                  <span className="text-3xl cursor-pointer">
                    <FaCartPlus />
                  </span>
                  <button onClick={HandleClick} className="rounded-2xl h-[27px] px-5 bg-[#A30114] duration-500 hover:bg-[#ED0707]">
                     Log Out
                  </button>
                </>
                :
                <>
                   <button className="rounded-2xl h-[27px] px-5 bg-[#A30114] duration-500 hover:bg-[#ED0707]"><Link to="/login-page">Login</Link></button>
                   <button className="rounded-2xl h-[27px] px-5 bg-[#A30114] duration-500 hover:bg-[#ED0707]"><Link to="/sign-up-page">Sign Up</Link></button>
                </>
            }
            <button onClick={()=>setOpen(!open)} className="cursor-pointer text-2xl md:hidden"><ion-icon name={open ? 'close':'menu'}></ion-icon></button>

            </div>
        </nav>
      </header>

      {/* Home */}
      <section className='lg:flex lg:my-[10%] gird lg:justify-between lg:grid-cols-2 text-white px-[7%]'>
        <div className='col-span-1 py-14'>
          <p className='text-4xl max-md:text-3xl max-lg:place-content-center font-bold text-center place-content-start overflow-hidden'  style={{ transform: isVisible ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 1s ease-in-out'}}>Welcome To <br />
          Our <span className='text-[#ED0707] border-solid border-b-2 rounded border-yellow'>House</span> Foods</p>
          <div className='text-1xl text-center mt-5 lg:float-end'  style={{ transform: isVisible ? 'translateY(0)' : 'translateY(400%)', transition: 'transform 1s ease-in-out'}}>
            <p>Order Now</p>
            <br />
            <p className='place-self-center'><GoArrowDown/></p>         
          </div>        
        </div>
        <div className='col-span-1'>
          {/* Add in src ==> Group for images */}
          <img className='w-8/12 max-lg:place-self-center place-self-end mt-[-10%] duration-700' style={{transform: `rotate(${rotation}deg)`, transition: `transform 1s ease-in-out`}} src={homeImage} alt="..." />
        </div>
      </section>

    </section>
  )
}

export default Header
