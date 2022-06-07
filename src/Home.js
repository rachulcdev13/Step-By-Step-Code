import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import LifeCycle from "./LifeCycle";
import Hooks from "./Hooks"

const Home = (props) => {
    const [show, setshow] = useState(true);

    const [getData, setGetData] = useState("");
    const [getOption, setGetOption] = useState("");
    const [tnc, setTnc] = useState(false);

    // const [loggin, setloggin] = useState(3);
    const loggin = 2;

    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setpasswordErr] = useState(false);


    // ==========================================================

    const getFormData = (e) => {
        console.log(getData, getOption, tnc);
        e.preventDefault();
    }
    const LoginHandle = (e) => {
        // console.log(email,password);
        e.preventDefault();
    }

    const emailhandler = (e) => {
        // console.log(e.target.value.length);
        const emailval = e.target.value;
        if (emailval.length < 6) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
    }

    const passwordhandler = (e) => {
        // console.log(e.target.value);
        const passval = e.target.value;
        if (passval.length < 6) {
            setpasswordErr(true)
        } else {
            setpasswordErr(false)
        }
    }


    return (
        <>
            <div className="container">
                <h5>Element or Div Hide , Show and Toggle in ReactJs :</h5>
                {show ? <h6 style={{ color: "red" }}>Show and hide Data and toggle also is here...!</h6> : null}
                <Button variant="info" onClick={() => setshow(false)}>Hide</Button>&nbsp;&nbsp;
                <Button variant="info" onClick={() => setshow(true)} >Show</Button>&nbsp;&nbsp;
                <Button variant="info" onClick={() => setshow(!show)} >Toggle</Button>
            </div><hr></hr>

            <div className="container">
                <h5>Handle Form | checkbox | input field | select :</h5>
                <Form onSubmit={getFormData}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            value={getData}
                            placeholder="Enter email"
                            onChange={(e) => { setGetData(e.target.value) }}
                        />

                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose..." onChange={(e) => { setGetOption(e.target.value) }} >
                            <option>--Select Your State--</option>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                        </Form.Select>
                    </Form.Group><br />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="Accept and term condition"
                            onChange={(e) => { setTnc(e.target.checked) }} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>&nbsp;&nbsp;
                    <Button variant="danger">
                        Clear
                    </Button>
                </Form> <br />
                <h6 style={{ color: "red" }}>{getData}  <span>{getOption}</span> </h6>
            </div><hr></hr>

            <div className="container">

                <h5>Conditional rendering | If Condition :</h5>
                <h6>This if else two Condition </h6>
                <h6 style={{ color: "red" }}>{loggin ?
                    <span>Login Successfully</span>
                    : <h6>Login Failed</h6>}
                </h6>

                <h6>This else if three Condition</h6>
                <h6 style={{ color: "red" }}>{loggin === 1 ?
                    <h6>Login Successfully</h6>
                    : loggin === 2 ?
                        <span>Try to login once </span>
                        : <h6>Login Failed</h6>}
                </h6>

            </div><hr></hr>

            <div className="container">
                <h5>Basic Form validation :</h5>
                <Form onSubmit={LoginHandle}>
                    <Row>
                        {/* <Col xs={5}>
                            <Form.Control placeholder="User name" />
                        </Col> */}
                        <Col>
                            <Form.Control type="email" placeholder="Email" onChange={emailhandler} required />
                            <Form.Text className="text-muted">
                                {emailErr ? <span style={{ color: "red" }}>Invalied user name..</span> : ""}
                            </Form.Text>
                        </Col>
                        <Col>
                            <Form.Control type="Password" placeholder="Password" onChange={passwordhandler} required />
                            <Form.Text className="text-muted">
                                {passwordErr ? <span style={{ color: "red" }}>Invalied password..</span> : ""}
                            </Form.Text>
                        </Col>
                    </Row><br />
                    <Button variant="primary" type="submit">Login</Button>
                </Form>
            </div><hr></hr>

            <div className="container">
                <h5>Pass Function as Props :</h5>
                <Button onClick={props.data}>Pass function</Button>
            </div><hr></hr>

            <div className="container">
                <h5>What is life cycle method in React:</h5>
                <p>Each component in React has a lifecycle which you can monitor and manipulate during three main phases.<br />
                    The three phases are:<strong> Mounting, Updating, and Unmounting.</strong></p>
            </div><hr></hr>

            <div className="container">
                <LifeCycle />
            </div><hr></hr>

            <div className="container">
                <Hooks />
            </div> 
            <br /><br /><br /><br />
        </>
    )
}
export default Home;