import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Card from "../Card/Card.jsx";


//handle width of screen 
// function useWindoSize () {
//   const [size, setSize] = useState([window.innerWidth]);
//   useEffect(() => {
//     const handleResize = () => {
//       setSize([window.innerWidth]);
//     };
//     window.addEventListener("resize", handleResize);
//   }, [])
//   return size;
// }

function Order() {
  // const [width] = useWindoSize();
  return (
    <>
    {/* vlue of width
    `<h4 className=' text-red-700'>
      width: ${width}
    </h4>` */}
      <section className="w-full  h-screen flex flex-col justify-center items-center my-10">
      <div className="w-[70%] flex flex-col justify-center items-center">
        <h3 className="text-[50px] font-medium text-center max-md:text-2xl mb-8">
          Our Popular <span className="text-lightRed">House</span> Foods
        </h3>
        <p className="font-medium text-gray text-[40px] max-md:text-2xl">Order Now</p>
      </div>

        <div className="flex w-[95%] h-full justify-around pl-9 max-md:pl-5 items-center gap-8 overflow-hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper p-4"
          >
            {
              Array.from({length: 10},(_,index)=>(                
                <div>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                </div>
              ))
            }
            </Swiper>
        </div>
      </section>
    </>
  );
}

export default Order;