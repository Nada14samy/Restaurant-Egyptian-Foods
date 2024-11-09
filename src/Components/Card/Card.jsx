import React, { useState } from "react";
// icons
import { FaHeart , FaShoppingCart , FaRegStar } from "react-icons/fa";

// images
// import imgCard from  "../../Image/home-page/card-img-1.png";
const Card = (props)=>{
    const[clickHeart , setClickHeart] = useState(false);
    return(
        <>
            <article className="border-[1px] flex flex-col solid border-[#fff] h-[330px] p-5 w-[250px] rounded-[25px] shadow-[0px_0px_10px_#666666]">
                <div className="icon flex justify-between items-center">
                    <span className="text-2xl text-lightRed font-medium">{props.Salary}L.E</span>
                    <span className={`text-xl cursor-pointer ${clickHeart? "text-lightRed" : "text-gray"}`} onClick={()=>setClickHeart(!clickHeart)}><FaHeart /></span>
                </div>
                <div className="w-1/2 h-1/2 flex justify-center items-center m-auto mb-1" >
                    <img className="w-full" src={props.Image} alt="" />
                </div>
                <div className="flex flex-col items-center mb-5">
                    <b className="text-[30px]">{props.Name}</b>
                    <p className="text-[15px] text-center text-gray">{props.Description}</p>
                    <p className="text-center flex gap-2 justify-center">
                        {
                            Array.from({length : 5} , (_,index)=>(
                                <span className="text-yellow" key={index}>
                                    <FaRegStar  />
                                </span>
                            ))
                        }
                    </p>
                </div>
                <div className="w-full flex justify-center ">
                    <div className="w-fit flex justify-center items-center  rounded-[25px]">
                    <select className="rounded-s-[25px] py-[1px] px-[5px] border-[1px] border-black solid">
                        {
                           Array.from({length : props.TotalRating},(_ , index)=>(
                           <option key={index} value={index}>{index}</option>
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