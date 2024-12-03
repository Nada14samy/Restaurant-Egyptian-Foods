import React from 'react'
import "./Loading.css";

function Loading() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="loader">
        <div className="panWrapper">
            <div className="pan">
            <div className="food"></div>
            <div className="panBase"></div>
            <div className="panHandle"></div>
            </div>
            <div className="panShadow"></div>
        </div>
      </div>
    </main>
  )
}

export default Loading;
