import React, { useRef } from 'react'
import { Form,Button } from 'react-bootstrap'
import ForwardRef from './ForwardRef'; 

const UseRef = () => {

    const inpurRef = useRef(null);
    const getValue=()=>{
        console.log(inpurRef);
        inpurRef.current.style.color="red";
        inpurRef.current.style.backgroundColor="gold";
        inpurRef.current.style.fontWeight="bold";
        inpurRef.current.style.fontSize="50px";
        inpurRef.current.focus();
        // inpurRef.current.style.display="none"; 
    }
    const inputForwardRef = useRef(null);
    const getRefValue=()=>{
        inputForwardRef.current.value="Aurangabad Pune 431133";
        inputForwardRef.current.style.color="pink"
        inputForwardRef.current.style.backgroundColor="black"
        inputForwardRef.current.style.fontWeight="pink" 
    } 
    
    return (
        <>  
            <div>
                <h6>useRef in Functional component</h6>
                <Form>
                    <Form.Group className="mb-3" size="sm">
                        <Form.Control type="text" placeholder="Enter Samething..." ref={inpurRef} />
                    </Form.Group>
                    <Button variant="primary" onClick={getValue}>
                        Check Ref
                    </Button>
                </Form>
            </div><br />

            <div>
            <ForwardRef ref={inputForwardRef} />
                <Button variant="primary" onClick={getRefValue}> Forward Ref</Button>
            </div>
        </>
    )
}

export default  UseRef
