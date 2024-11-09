import React , {useState , useEffect} from 'react'
// images
import Card from "../Card/Card.jsx";
// api
import API_BASE_URL from '../../API.jsx';
import axios from "axios";
function Menu() {
    const Button = ["Drinks" , "japenas" , "Lunch" , "Dinner" , "italin"];
    const [card , setCard] = useState([]);
    const [IsLoading , setIsLoading] = useState(true);
    const ShowData = card.map((item , index)=>(
        <Card key={index} Salary={item.Salary} Image={item.Image} Name={item.Name} Description={item.Description} TotalRating={item.TotalRating}  />
    ));
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`https://api-nodejs-production-26be.up.railway.app/items/menu`);
                setCard(res.data.result);
                console.log(res.data.result);
            }catch(err){
                console.log(err);
            }finally{
                setIsLoading(false);
            }
        };
        fetchData()
    }, [])
  return (
    <>
        <section className="w-full h-fit my-5 py-5 flex flex-col justify-center items-center">
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
            <div className="w-full flex  items-center gap-10 flex-wrap my-5 max-md:gap-5 max-lg:justify-center  ">
                {
                    IsLoading
                    ?
                    <div>
                        Loading...
                    </div>
                    :
                    (ShowData)
                }
            </div>
            </div>
        </section>
    </>
  )
}

export default Menu;
