import React, { useState } from "react";
import { FaHeart , FaShoppingCart , FaRegStar } from "react-icons/fa";

// api
import axios from "axios";
import Cookies from "js-cookie";
import API_BASE_URL from "../../API.jsx";
const Card = (props)=>{
    const[clickHeart , setClickHeart] = useState(false);
    let userId = Cookies.get("userId"); 

    const handleHeartClick = async () =>{
        try{
            if(clickHeart){
              let resDelet = await axios.post(`${API_BASE_URL}/users/DeleteFavorite/${userId}/${props.Id}`);
              console.log(resDelet);
            }else{
              let resAdd = await axios.post(`${API_BASE_URL}/users/AddFavorite/${userId}/${props.Id}`);
              console.log(resAdd);
            }
            setClickHeart(!clickHeart);
        }catch (err){
            console.log(err);
        }
    }

    return(
        <>
            <article id={props.Id} className="border-[1px] flex flex-col justify-between flex-shrink solid border-[#fff] h-[330px] p-3 w-[250px] rounded-[25px] shadow-[0px_0px_10px_#666666]">
                <div className="icon flex justify-between items-center">
                    <span className="text-2xl text-lightRed font-medium">{props.Salary}$</span>
                    <span className={`text-3xl cursor-pointer ${clickHeart ? "text-lightRed" : "text-gray"}`}
                        onClick={handleHeartClick} ><FaHeart /></span>
                </div>
                <div className="w-1/2 h-[120px] flex justify-center items-center my-0 m-auto" >
                    <img className="w-full" src={props.Image} alt="" />
                </div>
                <div className="flex flex-col items-center">
                    <b className="text-[30px]">{props.Name}</b>
                    <p className="text-[15px] text-center text-gray">{props.Description}</p>
                    <p className="text-center flex gap-2 justify-center">
                        {
                            Array.from({ length: 5 }, (_, index) => (
                                <span className="text-yellow" key={index}>
                                    <FaRegStar />
                                </span>
                            ))
                        }
                    </p>
                </div>
                <div className="w-full flex justify-center ">
                    <div className="w-fit flex justify-center items-center  rounded-[10px]">
                        <select className="rounded-s-[10px] py-[1px] px-[5px] border-[1px] border-black solid">
                            {
                                Array.from({ length: props.TotalRating }, (_, index) => (
                                    <option key={index} value={index}>{index}</option>
                                ))
                            }
                        </select>
                        <span className="text-lightWhite cursor-pointer border-[1px] border-black solid px-3 py-[2.5px] text-xl bg-black hover:bg-yellow rounded-e-[10px]"><FaShoppingCart /></span>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Card;