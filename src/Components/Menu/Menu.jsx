import React ,{useState , useEffect} from 'react';
import {Link} from "react-router-dom";
// api
import axios from "axios";
import API_BASE_URL from '../../API.jsx';
// component
import Card from "../Card/Card.jsx";

function Menu() {
    const [card, setCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category , setCategory] = useState([]);
    const [Button , setButton] = useState("");
    const [Error , setError] = useState("");
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/items/menu/${Button}`);
        setCard(res.data.result);
        let categoryFilter = [...new Set(res.data.result.map(item => item.Category))];
        setCategory(categoryFilter);
      } catch (err) {
        setError("please try again later");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

    const HandleClickButton = (event)=>{
        setButton(event.target.textContent);
    }
    
  
  return (
    <>
      
        <section className="w-full h-fit my-5 py-5 flex flex-col justify-center items-center">
            <div className="w-10/12 flex flex-col justify-center items-center  max-lg:w-full max-md:w-11/12">
            <div className="w-full flex justify-center items-center gap-5 flex-wrap mb-10">
                {
                    category.map((item , index)=>(
                        <button onClick={HandleClickButton} key={index} className={`btn-${index} px-10 text-[20px] font-medium py-1 rounded-[25px] border-yellow border-[2px] border-solid `}>
                            {item}
                        </button>
                    ))
                }
                <Link to="/menu" className={`px-10 text-[20px] font-medium py-1 rounded-[25px] bg-darkRed text-lightWhite border-darkRed border-[2px] border-solid `}>
                    All
                </Link>
            </div>
            <div className="w-full flex items-center lg:justify-center gap-10 flex-wrap my-5 max-md:gap-5 max-lg:justify-center  ">
            {
                Error ? (
                    <>
                    Error
                    </>
                ) : isLoading ? (
                    <>
                    Loading...
                    </>
                ) : (
                    card.slice(0 , 8).map((item, index) => (
                    <Card 
                        key={index} 
                        Id={item._id}
                        Salary={item.Salary} 
                        Image={item.Image} 
                        Name={item.Name} 
                        Description={item.Description} 
                        TotalRating={item.TotalRating} 
                    />
                    ))
                )
                }
            </div>
            </div>
        </section>
    </>
  )
}

export default Menu;
