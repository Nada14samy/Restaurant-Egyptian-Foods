// import React, {useState , useEffect} from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// //  api
// import axios from "axios";
// import API_BASE_URL from '../../API.jsx';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

// // component 
// import Card from "../Card/Card.jsx";

// function Order() {
//   const [card , setCard] = useState([]);
//   const [IsLoading , setIsLoading] = useState(true);
 
//   useEffect(()=>{
//       const fetchData = async ()=>{
//           try{
//               const res = await axios.get(`${API_BASE_URL}/items/menu`);
//               setCard(res.data.result);
//               console.log(res.data.result);
//           }catch(err){
//               console.log(err);
//           }finally{
//               setIsLoading(false);
//           }
//       };
//       fetchData();
//   }, []);
  
//   return (
//     <>
//       <section className="w-full  h-screen flex flex-col justify-center items-center my-10">
//       <div className="w-[70%] flex flex-col justify-center items-center">
//         <h3 className="text-[50px] font-medium text-center max-md:text-2xl mb-8">
//           Our Popular <span className="text-lightRed">House</span> Foods
//         </h3>
//         <p className="font-medium text-gray text-[40px] max-md:text-2xl">Order Now</p>
//       </div>

//         <div className="flex w-[95%] h-full justify-around pl-9 max-md:pl-5 items-center gap-8 overflow-hidden">
        
//           <Swiper
//             slidesPerView={4}
//             spaceBetween={30}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination]}
//             className="mySwiper p-4"
//           >
//             {
//               IsLoading ?
//               <>Loading ...</>
//               :
//            card.map((item , index)=>{
//               <SwiperSlide >
//                 <Card key={index} Salary={item.Salary} Image={item.Image} Name={item.Name} Description={item.Description} TotalRating={item.TotalRating}  />
//               </SwiperSlide>
//             }) 
             
//             }
            
                 
                    
//             </Swiper>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Order;

import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// api
import axios from "axios";
import API_BASE_URL from '../../API.jsx';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


// import required modules
import { Pagination } from 'swiper/modules';

// component 
import Card from "../Card/Card.jsx";
import { FreeMode, Pagination } from 'swiper/modules';
// import { RxArrowBottomRight } from 'react-icons/rx';
import Card from "../Card/Card.jsx";

function Order() {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/items/menu`);
        setCard(res.data.result);
        console.log(res.data.result);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center my-10">
        <div className="w-[70%] flex flex-col justify-center items-center">
          <h3 className="text-[50px] font-medium text-center max-md:text-2xl mb-8">
            Our Popular <span className="text-lightRed">House</span> Foods
          </h3>
          <p className="font-medium text-gray text-[40px] max-md:text-2xl">Order Now</p>
        </div>
        <div className="flex w-[95%] h-full justify-around items-center gap-8 overflow-hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
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
              isLoading ? (
                <SwiperSlide>
                  <div>Loading ...</div>
                </SwiperSlide>
              ) : (
                card.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card 
                      Salary={item.Salary} 
                      Image={item.Image} 
                      Name={item.Name} 
                      Description={item.Description} 
                      TotalRating={item.TotalRating} 
                    />
                  </SwiperSlide>
                ))
              )
            }
          </Swiper>
        </div>

      </section>
    </>
  );
}

export default Order;