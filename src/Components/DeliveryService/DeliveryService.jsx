import React from 'react'
// icons
import { FaMapMarkerAlt , FaPhone } from "react-icons/fa";

// images
import image from "../../Image/home-page/delivery.png"
// css
import "./DeliveryService.css";
function DeliveryService() {
  return (
    <>
      <section className="Delivery w-full h-fit my-10 py-10 flex justify-center">
        <div className="container w-11/12 flex justify-between max-lg:block">
            <div className='text-delivery w-1/2 max-lg:w-full flex flex-col items-center justify-center flex-wrap'>
                <div className="title-delivery w-full ">
                    <h5 className='text-[70px] w-full font-medium  flex flex-col'>
                        <span className="text-start">
                            Delivery
                        </span>
                        <span className='text-lightRose text-center'>
                            Service
                        </span>
                    </h5>
                </div>
                <div className="listDelivery w-full flex flex-col items-end ">
                    <ul className="list-disc marker:text-lightRose">
                        <li className="text-3xl mb-5 ">Fast Delivery</li>
                        <li className="text-3xl mb-5 ">Door Step</li>
                        <li className="text-3xl mb-10 ">24/7 Service</li>
                    </ul>
                </div>
                <div className=' flex flex-col items-end '>
                    <ul>
                        <li className=" text-2xl mb-5 flex items-center gap-2">
                            <span className="text-lightRose"><FaPhone /></span>
                            <span>(+20) 0123 456 7891</span>
                        </li>
                        <li className=" text-2xl mb-5 flex items-center gap-2">
                            <span className="text-lightRose"><FaMapMarkerAlt /></span>
                            <span>30 abdel aziz strit</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-lg:w-full">
                <img src={image} className="w-full" alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default DeliveryService
