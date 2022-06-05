import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import UseEffects from './UseEffects';

const LifeCycle = () => {
    const [myColor, setMyColor] = useState('Change Color');
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "Red"
    });
    const [count, setCount] = useState(50);
    const [data, setData] = useState(100)

    const updateObjectArr = () => {
        setCar(previosState => {
            return { ...previosState, color: "Pink" }
        })
    };

    // useEffect(() => {
    //     console.log("called the state Data..!");
    // }, [data]);

    // useEffect(() => {
    //     console.log("called the state Count..!");
    // }, [count]);

    useEffect(() => {
        // console.log("useEffect..!");
    }, []);

    return (
        <>
            <div className="container">
                <h5>Lifecycle of Components : Class Components</h5>
                <h6><strong style={{ color: "red" }}>Mounting:</strong></h6>
                <li>constructor()</li>
                <li>render()</li>
                <li>componentDidMount()</li>

                <h6><strong style={{ color: "red" }}>Updating:</strong></h6>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>componentDidUpdate()</li>

                <h6><strong style={{ color: "red" }}>Unmounting:</strong></h6>
                <li>componentWillUnmount()</li>

            </div><hr></hr>
            
            <div className="container">
                <h5>Hooks in React : Lifecycle of Components</h5>
                <p>- Hooks were added to React in version 16.8.<br />
                    - Hooks is allow us to "hook" into React features such as state and lifecycle methods.<br />
                    <strong>There are 3 rules for hooks:</strong><br />
                    <li>Hooks can only be called inside React function components.</li>
                    <li>Hooks can only be called at the top level of a component.</li>
                    <li>Hooks cannot be conditional</li><br />
                    <strong>Note:</strong> Hooks will not work in React class components.</p>
                <p><strong>Example</strong> : My favorite color is <strong>{myColor}!</strong></p>
                <Button variant="danger" size="sm" onClick={() => setMyColor('Red')}>Danger</Button> &nbsp;
                <Button variant="primary" size="sm" onClick={() => setMyColor('Primary')}>Primary</Button> &nbsp;
                <Button variant="warning" size="sm" onClick={() => setMyColor('Warning')}>Warning</Button> &nbsp;
                <Button variant="info" size="sm" onClick={() => setMyColor('info')}>Info</Button> &nbsp; <br /><br />
                <p><strong>Types of hooks</strong> : <li>useSate</li><li>useEffect</li><li>useContext</li><li>useRef</li><li>useReducer</li><li>useCallback</li><li>useMemo</li><li>Custmoe Hooks</li></p>

                <h6 style={{ color: "red" }}>useSate()</h6>
                <p> <Button variant="info" size="sm" onClick={() => setCar({ color: "Yellow" })}>useSate</Button> &nbsp; It is a {car.color} {car.model} from {car.year}.</p>
                <h6>Updating Objects and Arrays in State</h6>
                <p> It is a {car.color} {car.model} from {car.year}.</p>
                <Button variant="primary" size="sm" onClick={updateObjectArr}>Object</Button> <br /><br />

                <h6 style={{ color: "red" }}>useEffect()</h6>
                <li>The useEffect Hook allows you to perform side effects in your components.</li>
                <li><strong>Example</strong> : fetching data, directly updating the DOM, and timers.</li>
                <li>useEffect accepts two arguments. The second argument is optional.</li>
                <li>useEffect( function, dependency )</li>
                <li>If you not passed second parameter : Runs on every render</li>
                <li>We should always include the second parameter which accepts an array : Runs only on the first render</li><br />

                <strong>Props or state values:</strong> :
                <li>Runs on the first render</li> <li>And any time any dependency value changes</li>
                <Button variant="info" size="sm" onClick={() => setCount(count + 1)}>Update Counter : {count} </Button><br /><br />

                <p>Bootstrap Library Like :
                    <li><strong>Material-ui</strong> is highly used in React</li>
                    <li>Ant design</li>
                    <li>Tailwind css</li>
                    <li>Chakra UI</li>
                </p>

                <h6>How to use useEffect with specific state and props</h6>
                <UseEffects data={data} count={count} />
                {/* <strong><p>Date: <span style={{color:"red"}}>{data}</span> & Count :  <span style={{color:"red"}}>{count}</span></p></strong> */}
                <Button variant="primary" size="sm" onClick={() => setData(data + 1)}>Update Data </Button> &nbsp;&nbsp;
                <Button variant="primary" size="sm" onClick={() => setCount(count + 1)}>Update Count </Button>  

            </div> 
        </>
    )
}
export default LifeCycle;
