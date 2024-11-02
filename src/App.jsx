import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css';

// components
import Home from "./Pages/Home/Home.jsx";
import MenuPage from "./Pages/Menu-page/MenuPage.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
