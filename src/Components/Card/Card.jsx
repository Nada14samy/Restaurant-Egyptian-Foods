import React, { useState } from "react";
// icons
import { FaHeart , FaShoppingCart } from "react-icons/fa";

// images
import imgCard from  "../../Image/home-page/card-img-1.png";
const Card = ()=>{
    const[clickHeart , setClickHeart] = useState(false);
    return(
        <>
            <article className="border-[1px] flex flex-col  solid border-[#fff] w-[250px] h-[330px] p-5 rounded-[25px] shadow-[0px_0px_10px_#666666]">
                <div className="icon flex justify-between items-center">
                    <span className="text-2xl text-lightRed font-medium">$10</span>
                    <span className={`text-xl cursor-pointer ${clickHeart? "text-lightRed" : "text-gray"}`} onClick={()=>setClickHeart(!clickHeart)}><FaHeart /></span>
                </div>
                <div className="w-full flex justify-center mb-1" >
                    <img className="w-[160px]" src={imgCard} alt="" />
                </div>
                <div className="flex flex-col items-center mb-5">
                    <b className="text-[30px]">Molokhia</b>
                    <p className="text-[15px] text-center text-gray">Get 20% discount on first order</p>
                </div>
                <div className="w-full flex justify-center ">
                    <div className="w-fit flex justify-center items-center  rounded-[25px]">
                    <select className="rounded-s-[25px] py-[1px] px-[5px] border-[1px] border-black solid">
                        {
                           Array.from({length : 11},(_ , index)=>(
                           <option key={index} value={index+1}>{index+1}</option>
                           ))
                        }
                    </select>
                    <span className="text-lightWhite cursor-pointer border-[1px] border-black solid px-5 py-[2.5px] text-xl bg-black hover:bg-yellow rounded-e-[25px]"><FaShoppingCart /></span>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card;