import React , {Suspense, useState ,useEffect} from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css';

// components
import Home from "./Pages/Home/Home.jsx";
import MenuPage from "./Pages/Menu-page/MenuPage.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import SignUp from "./Pages/Sign-up/SignUp.jsx";
import Login from "./Pages/Log-in/Login.jsx";
import ProductRoute from "./Components/ProductRoute/ProductRoute.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";

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
                
                  <Route path="/sign-up-page" element={
                    <ProductRoute>
                      <SignUp />
                    </ProductRoute>} />
                  <Route path="/login-page" element={
                    <ProductRoute>
                      <Login />
                    </ProductRoute>
                    } />
                
                {/* no route */}
                <Route path="*" element={<NotFound />} />
                {/* navigate */}
                <Route path="/not-found" element={<NotFound />} />
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
