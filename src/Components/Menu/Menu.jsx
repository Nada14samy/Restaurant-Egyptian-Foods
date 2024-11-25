import React ,{useState , useEffect} from 'react';
import {Link} from "react-router-dom";
// api
import axios from "axios";
import API_BASE_URL from '../../API.jsx';
// component
import Card from "../Card/Card.jsx";

function Menu(props) {
    const [card, setCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category , setCategory] = useState([]);
    const [allData, setAllData] = useState([]); 
    const [filteredData, setFilteredData] = useState([]);
    const [Button , setButton] = useState("");
    const [Error , setError] = useState("");
   console.log(Button);
   console.log(category);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/items/menu`);
        let data = res.data.result;
        setCard(data);
        setAllData(data);
        let categoryFilter = [...new Set(data.map(item => item.Category))];
        setCategory(categoryFilter);
      } catch (err) {
        setError("please try again later");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Button) {
      // تطبيق الفلتر عند اختيار زر
      setFilteredData(allData.filter((item) => item.Category === Button));
    } else {
      // عرض كل البيانات عند عدم اختيار فلتر
      setFilteredData(allData);
    }
  }, [Button, allData]);

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
                        <button onClick={HandleClickButton} key={index} className={`btn-${index}
                          ${
                            Button === item ?
                            "bg-yellow border-yellow text-lightWhite":
                            "border-yellow text-black"
                          }
                         px-10 text-[20px] font-medium py-1 rounded-[25px]  border-[2px] border-solid `}>
                            {item}
                        </button>
                    ))
                }
                <Link to="/menu" className={`${props.Style} px-10 text-[20px] font-medium py-1 rounded-[25px] bg-darkRed text-lightWhite border-darkRed border-[2px] border-solid `}>
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
                    filteredData.slice(0 , 8).map((item, index) => (
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
                )}
            </div>
            </div>
        </section>
    </>
  )
}

export default Menu;
