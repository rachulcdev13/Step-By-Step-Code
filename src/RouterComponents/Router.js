import React from "react";
import { Routes,Route, Outlet } from "react-router-dom"; 
import HomePage from "./HomePage"; 
import About from "./About"; 
import CodeStepBYStep from "../CodeStepBYStep";
import Conatct from "./Contact";
import PageNotFound from "./PageNotFound";

const Router =()=>{
    return(
        <> 
            <div className="app">
                <Routes>
                        <Route path="/" element={<HomePage />} /> 
                        <Route path="/RouterComponent/About" element={<About /> } /> 
                        <Route path="/RouterComponent/Contact" element={<Conatct /> } /> 
                        <Route path="/CodeStepBYStep" element={<CodeStepBYStep /> } /> 
                        {/* <Route path="/Example   " element={<Example /> } />   */}
                        <Route path="*" element={<PageNotFound /> } > 
                        </Route> 
                </Routes>
                <Outlet />
            </div> 
        </>
    )
}
export default Router;