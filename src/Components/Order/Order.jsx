import React, { useState, useEffect } from 'react'; 
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/free-mode';  
import { Swiper, SwiperSlide } from 'swiper/react';  
import { FreeMode, Pagination } from 'swiper/modules'; 
import Card from "../Card/Card.jsx"; 
import axios from 'axios'; 
import API_BASE_URL from '../../API.jsx';

function Order() {
  const [card, setCard] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  const fetchData = async () => { 
    try { 
      const res = await axios.get(`${API_BASE_URL}/items/menu`); 
      console.log("API Response:", res.data); // Debug API response 
      setCard(res.data.result || []); // Fallback to an empty array 
    } catch (err) { 
      console.error("API Error:", err); // Log error details 
      setError('Failed to load menu items. Please try again.'); 
    } finally { 
      setIsLoading(false); 
    } 
  }; 
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center my-10">
        <div className="w-[90%] flex flex-col justify-center items-center">
          <h3 className="text-[50px] font-medium text-center max-md:text-2xl mb-8">
            Our Popular <span className="text-lightRed">House</span> Foods
          </h3>
          <p className="font-medium text-gray text-[40px] max-md:text-2xl">Order Now</p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
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
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper p-4"
            >
              {card.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card 
                    Salary={item.Salary}
                    Image={item.Image} 
                    Name={item.Name}
                    Description={item.Description}
                    TotalRating={item.TotalRating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </section>
    </>
  );
}

export default Order;