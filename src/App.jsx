import React , {Suspense, useState ,useEffect} from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css';

// components
import Home from "./Pages/Home/Home.jsx";
import MenuPage from "./Pages/Menu-page/MenuPage.jsx";
import Loading from "./Components/Loading/Loading.jsx";

function App() {
  const [isLoading , setIsLoading] = useState(true);
  useEffect(()=>{
      setIsLoading(true);
      setTimeout(()=>{
        setIsLoading(false);
      } , 5000);
  } , []);
  return (
    <>
    {
      isLoading ? 
      <Loading />
      :
      (
        <> 
        <Suspense fallback={<Loading />}>
           <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
         
        </>
      )
    }
    </>
  )
}

export default App;
