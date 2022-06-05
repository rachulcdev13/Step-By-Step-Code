import React from 'react'
// import { Button } from 'react-bootstrap';

const ReuseComp = (props) => {

    return (
        <>
            <div className='container'>
                <li>{props.data}</li>
                {/* <Button type="" onClick={()=>{alert(props.data)}}>Alert Me</Button> */}
            </div>
        </> 
    )
}
export default ReuseComp;
