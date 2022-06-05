import React,{useState} from 'react'
import { Form,Col,Row } from 'react-bootstrap';
import HOC from './HOC';
import UnControlledComp from './UnControlledComp';


const ControlledComp = () => {
    const [fname,seFname]=useState('Samat');
    const [lname,seLname]=useState('Chavan');
    return (
        <>
            <div>
                <h6>Controlled Component</h6>
                <li>A controlled component, form data is handled by a React component</li>
                <li>It takes its current value through props and makes changes through callbacks like onClick, onChange, etc.</li> <br />
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" onChange={(e)=>seFname(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" onChange={(e)=>seLname(e.target.value)} />
                        </Col>
                    </Row>
                </Form> <br />
                <p style={{color:"red",fontWeight:"bold"}}>Full Name : {fname} {lname}</p>
            </div><hr></hr>
            <UnControlledComp /><hr></hr>
            <HOC />
        </>
    )
}

export default ControlledComp;
