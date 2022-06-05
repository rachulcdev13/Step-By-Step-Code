import React, { useEffect } from "react";

const UseEffects = (props) => {

    useEffect(() => {
        // console.log("UseEffect...!");
        // alert("useEffect :" + props.data);
    },[props.data,props.count]);

    return (
        <>
            <strong><p>Date: <span style={{ color: "red" }}>{props.data}</span> & Count :  <span style={{ color: "red" }}>{props.count}</span></p></strong> 
        </>
    )
}
export default UseEffects;