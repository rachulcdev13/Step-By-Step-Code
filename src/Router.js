import React from "react";
import { Routes,Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import LifeCycle from "./LifeCycle";

const Router =()=>{
    return(
        <>
             <Header />
            <div className="app">
                <Routes>
                        <Route path="/" element={<Home />} /> 
                        <Route path="/LifeCycle" element={<LifeCycle />} />  
                </Routes>
            </div>
        </>
    )
}
export default Router;