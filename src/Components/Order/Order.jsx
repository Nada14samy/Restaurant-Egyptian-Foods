import React, { useState, useEffect } from 'react';
import Card from "../Card/Card.jsx";
import  "./Order.css";
import axios from 'axios';
import API_BASE_URL from '../../API.jsx';

function Order() {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + card.length) % card.length);
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center my-10">
        <div className="w-[90%] flex flex-col justify-center items-center">
          <h3 className="text-[50px] font-medium text-center max-md:text-2xl mb-8">
            Our Popular <span className="text-lightRed">House</span> Foods
          </h3>
          <p className="font-medium text-gray text-[40px] max-md:text-2xl">Order Now</p>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="flex w-full h-full justify-center items-center gap-10">
              {card.map((item, index) => (
                  <Card
                   key={index}
                    Salary={item.Salary}
                    Image={item.Image}
                    Name={item.Name}
                    Description={item.Description}
                    TotalRating={item.TotalRating}
                  />
              ))}
          </div> 
        )}
      </section>
    </>
  );
}

export default Order;