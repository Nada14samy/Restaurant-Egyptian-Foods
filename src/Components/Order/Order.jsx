import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Card from "../Card/Card.jsx";

function Order() {
   
  return (
    <>
      <section className="w-full  h-screen flex flex-col justify-center items-center my-10">
      <div className="w-[70%] flex flex-col justify-center items-center">
        <h3 className="text-[50px] font-medium text-center max-md:text-2xl mb-8">
          Our Popular <span className="text-lightRed">House</span> Foods
        </h3>
        <p className="font-medium text-gray text-[40px] max-md:text-2xl">Order Now</p>
      </div>
        <div className="flex w-[95%] h-full justify-around pl-9 max-md:pl-5 items-center gap-8 overflow-hidden">
            {
              Array.from({length: 10},(_,index)=>(
                <div className="">
                  <Card  />
                </div>
              ))
            }
        </div>
        <div>
        
        </div>
      </section>
    </>
  );
}

export default Order;