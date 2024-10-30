import React, { useState } from 'react';
import homeImage from "../Image/home.png";
import { GoArrowDown } from "react-icons/go";



const Header = () => {

    const [open, setOpen] = useState(false);
    
    return (
      <section className='bg-gradient-to-r from-[#000000] max-h-screen to-[#666666] overflow-hidden'>
      
      {/* NavBar */}
      <header>    
        <nav className='flex justify-between px-[7%] items-center md:h-14 h-14 mx-auto text-white'>
            <div>

            <a href="/" className='cursor-pointer font-bold size-10 w-[337px] text-3xl leading-10'><p><span className='text-[#ED0707]'>House</span> foods</p></a>

            </div>
            <div className={ `md:static absolute md:min-h-fit  min-h-[30vh] left-0 transition-all duration-500 md:duration-0 md:z-0  opacity-90 ease-in-out md:w-auto w-full flex text-center items-center ${open?'top-[8%] mb-5 z-[1] bg-black':'top-[-100%]'}`}>

            <ul className='flex md:flex-row mx-auto flex-col md:items-center md:gap-[4vw] gap-6 font-sans font-medium item-center'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Best order</a></li>
                <li><a href="#">Menu</a></li>
            </ul>

            </div>
            <div className='flex items-center gap-4'>

            <button className="rounded-2xl h-[27px] px-5 bg-[#A30114] duration-500 hover:bg-[#ED0707]"><p>Login</p></button>
            <button onClick={()=>setOpen(!open)} className="cursor-pointer text-2xl md:hidden"><ion-icon name={open ? 'close':'menu'}></ion-icon></button>

            </div>
        </nav>
      </header>

      {/* Home */}
      <section className='lg:flex lg:my-[10%] gird lg:justify-between lg:grid-cols-2 text-white px-[7%]'>
        <div className='col-span-1 py-7'>
          <p className='text-4xl font-bold text-center'>Welcome To <br />
          Our <span className='text-[#ED0707]'>House</span> Foods</p>
          <div className='text-1xl text-center mt-5 lg:float-end'>
            <p>Order Now <br /><p className='place-self-center'><GoArrowDown/></p></p>         
          </div>        
        </div>
        <div className='col-span-1'>
          {/* Add in src ==> Group for images */}
          <img className='w-96 place-self-center mt-[-10%]' src={homeImage} alt="..." />
        </div>
      </section>

    </section>
  )
}

export default Header
