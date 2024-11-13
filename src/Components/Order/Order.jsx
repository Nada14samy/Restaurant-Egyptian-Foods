import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// import { RxArrowBottomRight } from 'react-icons/rx';
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

        <div className="flex w-[95%] h-full justify-around items-center gap-8 overflow-hidden">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper p-4"
          >
            {
              Array.from({length: 10},(_,index)=>(                
                <div>
                    <SwiperSlide>
                      <div className='mx-9 mb-9'>
                        <Card />
                      </div>
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