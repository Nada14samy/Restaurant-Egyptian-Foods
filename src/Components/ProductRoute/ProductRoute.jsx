import React from 'react'

import { Navigate } from 'react-router-dom';

import Cookies from "js-cookie";

function ProductRoute({children}) {
   return Cookies.get("token") ? <Navigate to="/not-found" /> : children 
}

export default ProductRoute;
