import React from "react";
import Home from "./Home";
import User from "./User"; 

const CodeStepBYStep = (props) => { 

    const myFun =()=>{
        alert('Pass Function as Props');
    }

    return (
        <>
            <div className="container"><br />
                <h4 className="containerss" style={{ textTransform: "Uppercase" }}>Code Step By Step {props.name}</h4><hr></hr>
                <User  /><hr></hr>
                <Home data={myFun} /><hr></hr>
            </div>
        </>
    )
}
export default CodeStepBYStep;