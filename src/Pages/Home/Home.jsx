import React from 'react'

// components
import Header from "../../Components/Header/Header.jsx";
import About from "../../Components/About/About.jsx";
import DeliveryService from "../../Components/DeliveryService/DeliveryService.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Menu from "../../Components/Menu/Menu.jsx";


function Home() {
  return (
    <>
      <Header />
      <About />
      <section className='w-full my-10 py-10 flex justify-center items-center flex-col '>
        <h3 className="text-[50px] font-medium text-center max-md:text-3xl ">
          Our Regular Menu Pack
        </h3>
        <Menu />
      </section>
      
      <DeliveryService />
      <Footer />
    </>
  )
}

export default Home
