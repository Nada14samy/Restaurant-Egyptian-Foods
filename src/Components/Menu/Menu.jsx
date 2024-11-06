import React from 'react'
// images
import Card from "../Card/Card.jsx";


function Menu() {
    const Button = ["Drinks" , "japenas" , "Lunch" , "Dinner" , "italin"]
  return (
    <>
        
        <section className="w-full h-fit my-5 py-5 flex flex-row justify-center items-center">
            <div className="w-10/12 flex flex-col justify-center items-center  max-lg:w-full max-md:w-11/12">
            <div className="w-full flex justify-center items-center gap-10 flex-wrap mb-10">
                {
                    Button.map((item , index)=>(
                        <button key={index} className={`px-10 text-[20px] font-medium py-2 rounded-[25px] border-yellow border-[2px] border-solid `}>
                            {item}
                        </button>
                    ))
                }
            </div>
            <div className="w-full flex items-center lg:justify-center gap-10 flex-wrap my-5 max-md:gap-5 max-lg:justify-center  ">
                {
                    Array.from({length : 10} , (_ , index)=>(
                        <Card key={index} />
                    ))
                }
            </div>
            </div>
        </section>
    </>
  )
}

export default Menu;
