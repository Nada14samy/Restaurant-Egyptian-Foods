import React from "react";

// images
import img from "../../Image/home-page/girl.png";
import img_icon from "../../Image/home-page/Vodafone-Logo.svg";
import img_text from "../../Image/home-page/pay-now.png";
const Pay = ()=>{
    return(
        <>
         <section className="w-full h-80vh flex justify-center items-center ">
            <div className="container w-11/12 h-full flex justify-center items-center flex-wrap max-lg:flex-col max-sm:w-[95%]">
                <div className="w-1/2 h-full max-lg:w-3/4">
                    <span className="w-1/2">
                        <img className="w-full h-[100px]" src={img_icon} alt="" />
                    </span>
                    <span className="">
                        <img height="100px" src={img} alt="" />
                    </span>
                </div>
                <div className="w-1/2 max-lg:w-3/4 bg-darkRed rounded-md flex flex-col h-full px-4 pt-5 shadow-[3px_3px_8px_gray]">
                    <div className="flex flex-col w-full px-3">
                        <span className="text-[35px] max-md:text-xl max-[418px]:text-sm text-white font-medium">Now You can</span>
                        <span className="text-[40px] max-md:text-2xl max-[418px]:text-lg text-white font-medium">Pay By Vodafone Cash</span>
                        
                    </div>
                    <div className="flex justify-around w-full">
                        <button className="bg-white font-medium shadow-[3px_3px_8px_gray] max-[418px]:text-sm max-[418px]:px-3 rounded-md h-fit w-fit px-5 py-2 my-10 mx-10 max-md:mx-0 max-sm:px-2">Pay Now</button>
                        <img className="w-2/3 max-[418px]:w-1/2" src={img_text} alt="" />
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default Pay;