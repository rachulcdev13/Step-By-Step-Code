import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

const User = () => {
    const [fullname, setName] = useState(0);
    const [fname, setFname] = useState('');
    const [printdata, setprintdata] = useState();

    const [getdata, setgetdata] = useState({
        email: "",
        password: "",
        address: "",
        address2: "",
        // city:"",
        // state:"",
        // zip:"",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // console.log(event);
        // setgetdata(finaldata);
        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } = event.target;

        setgetdata((preValue) => {

            // console.log(preValue);

            if (name === 'email') {
                const { email, ...remaining } = { ...preValue }
                return {
                    email: value,
                    ...remaining,
                    // mobileno:preValue.mobileno,
                    // lastName: preValue.lastName,
                    // emailid:preValue.emailid,
                };
            } else if (name === "password") {
                const { password, ...remaining } = { ...preValue }
                return {
                    // firstName: preValue.firstName,
                    // emailid:preValue.emailid,
                    // mobileno:preValue.mobileno,
                    password: value,
                    ...remaining,
                };
            } else if (name === "address") {
                const { address, ...remaining } = { ...preValue }
                return {
                    // firstName: preValue.firstName,
                    // lastName: preValue.lastName,
                    // mobileno:preValue.mobileno,
                    address: value,
                    ...remaining,
                };
            } else if (name === "address2") {
                const { address2, ...remaining } = { ...preValue }
                return {
                    // firstName: preValue.firstName,
                    // lastName: preValue.lastName,
                    // emailid:preValue.emailid,
                    address2: value,
                    ...remaining,
                };
            }
        });
    };

    const getSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="container">
                <h5>OnClick Event Increase Value : {fullname} </h5>
                <Button variant="danger" onClick={() => setName(fullname + 1)}>Update Number : {fullname}</Button> &nbsp;
                <hr />
                <h5>Get value on Button using State : {printdata ? <span style={{ color: "red" }}>{fname}</span> : null}</h5>
                <input style={{ padding: "5px" }}
                    type="text"
                    placeholder="Enter Your Name..."
                    onChange={(e) => {
                        const finalname = e.target.value;
                        setFname(finalname);
                    }}
                /> &nbsp;
                <Button variant="primary" onClick={() => setprintdata(true)}>Sumbit</Button>
                <br />
                <hr />

                <h5>Get Multiple onClick Button using   State</h5>
                <Form onSubmit={getSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text"
                                placeholder="Enter email"
                                onChange={inputEvent}
                                name="email"
                                value={getdata.email} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                placeholder="Password"
                                onChange={inputEvent}
                                name="password"
                                autoComplete="on"
                                value={getdata.password}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St"
                            onChange={inputEvent}
                            name="address"
                            value={getdata.address}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor"
                            onChange={inputEvent}
                            name="address2"
                            value={getdata.address2}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={() => setgetdata(true)} type="submit">
                        Submit
                    </Button>

                    {getdata ? <span style={{ color: "red" }}>{getdata.address2}</span> : null}

                </Form>


            </div>

        </>
    )
}
export default User;