import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const HOC = () => {
    return (
        <>
            <div>
                <h6>Higher-Order Component (HOC)</h6>
                <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic</li>
                <li>HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.</li>
                <li>Concretely, a higher-order component is a function that takes a component and returns a new component.</li>
                <br /> 
                <HighOrderRed data={Counter} />
                <HighOrderGreen data={Counter} />
                <HighOrderOrange data={Counter} />
            </div>
        </>
    )
}
const HighOrderRed = (props) => {
    return (
        <h5 style={{ 
            backgroundColor: "red", 
            color: "white", 
            width: "8.2%", 
            padding: "10px",
            borderRadius:'6px' }}
            ><props.data /></h5>
    )
}
const HighOrderGreen = (props) => {
    return (
        <h5 style={{ 
            backgroundColor: "green", 
            color: "white", 
            width: "8.2%", 
            padding: "10px",
            borderRadius:'6px' }}
            ><props.data /></h5>
    )
}
const HighOrderOrange = (props) => {
    return (
        <h5 style={{ 
            backgroundColor: "orange", 
            color: "white", 
            width: "8.2%", 
            padding: "10px",
            borderRadius:'6px' }}
            ><props.data /></h5>
    )
}
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <h6>Counter : {count}</h6>
                <Button onClick={() => setCount(count + 1)} >Update</Button>
            </div>
        </>
    )
}

export default HOC
