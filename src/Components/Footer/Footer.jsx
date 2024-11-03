import React from 'react'
import {Link} from "react-router-dom";
// icons
import { FaMapMarkerAlt , FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <>
        <footer className="bg-black-gray-gradient w-full h-[80vh] py-5 max-lg:h-fit flex justify-center items-center">
            <div className="container w-11/12 h-fit  flex flex-col  justify-center items-center">
            <div className="w-full h-fit flex justify-between flex-wrap">
                <div className="title-footer max-[767px]:w-[336.5px] max-[767px]:my-10 flex flex-col max-[767px]:w-full max-[767px]:items-center max-[767px]:justify-center">
                    <h6 className="text-lightWhite text-3xl font-medium">
                        <span className="text-lightRed mr-2">
                            House
                        </span>
                        foods
                    </h6>
                    <p className="text-gray mt-2 text-xl">
                        Platform for Healthy & fast foods
                    </p>
                </div>
                <div className="find max-[767px]:w-[336.5px] flex flex-col mb-10 max-[767px]:w-full max-[767px]:items-center max-[767px]:justify-center">
                    <h6 className="text-lightWhite text-2xl mb-5">Find Us</h6>
                    <ul>
                        <li className="text-gray text-xl mb-5">
                            <Link to="/About-Us">About Us</Link>
                        </li>
                        <li className="text-gray text-xl mb-5">
                            <Link to="/Help">Help</Link>
                        </li>
                    </ul>
                </div>
                <div className="contact max-[767px]:w-[336.5px] flex flex-col mb-10 max-[767px]:w-full max-[767px]:items-center max-[767px]:justify-center">
                    <h6 className="text-lightWhite text-2xl mb-5">Contact Us</h6>
                    <ul>
                        <li className="text-gray text-xl mb-5 flex items-center gap-2">
                            <span><FaPhone /></span>
                            <span>(+20) 0123 456 7891</span>
                        </li>
                        <li className="text-gray text-xl mb-5 flex items-center gap-2">
                            <span><FaMapMarkerAlt /></span>
                            <span>30 abdel aziz strit</span>
                        </li>
                    </ul>
                </div>
                </div>
                <div>
                    <button className="bg-lightRed text-2xl rounded-[50px] py-2 px-10 mt-10 text-lightWhite">
                        Subscrip
                    </button>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
