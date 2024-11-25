import React ,{useState , useEffect} from 'react';
// api
import axios from "axios";
import API_BASE_URL from '../../API.jsx';
import Card from "../Card/Card.jsx";
function FetchDataCard({onDataFetch}) {
    const [card , setCard] = useState([]);
    const [IsLoading , setIsLoading] = useState(true);
   
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`${API_BASE_URL}/items/menu`);
                setCard(res.data.result);
                if (onDataFetch) {
                    onDataFetch(res.data.result); 
                }
                console.log(res.data.result);
            }catch(err){
                console.log(err);
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
    }, [onDataFetch]);
    return (
        <>
            {
                IsLoading
                ?
                <div>
                    Loading...
                </div>
                :
                  card.map((item , index)=>(
                    <Card 
                        key={index} 
                        Salary={item.Salary} 
                        Image={item.Image} 
                        Name={item.Name} 
                        Description={item.Description} 
                        TotalRating={item.TotalRating}  
                    />
                ))
            }
        </>
    )
}

export default FetchDataCard;
