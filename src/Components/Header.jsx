import React, { useState } from 'react';


const Header = () => {

    const [open, setOpen] = useState(false);
    
  return (
    <section className='bg-gradient-to-r from-[#000000] to-[#666666] h-[50vw] overflow-hidden'>
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

  </section>
  )
}

export default Header
