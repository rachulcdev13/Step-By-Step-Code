import React, { useEffect, useState } from "react";
import { Table, Form, Col, Row, Button } from "react-bootstrap";

const GetApi = () => {
    const [getapi, setGetApi] = useState([]);
    const [name, setName] = useState('Rahul');
    const [cityname, setCity] = useState('Pune');

    useEffect(() => { 
        // run jsone server
        // json-server --watch db.json --port 8000 
        fetch("http://localhost:8000/Apidata/").then((result) => {
            result.json().then((response) => {
                // console.log("API",response);
                setGetApi(response)
            })
        })
    }, []);
    // console.log(getapi);

    const SaveForm = () => {

    }

    return (
        <>
            <h6> fetch API | GET method :</h6>
            <Table striped bordered hover size="sm" >
                <tbody style={{ textAlign: "center" }}>
                    <tr style={{ fontWeight: "bold" }}>
                        <td>Name</td>
                        <td>city</td>
                    </tr>
                    {
                        getapi.map((currVal, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{currVal.name}</td>
                                    <td>{currVal.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <br />
            <h6>POST Method in Rest API</h6>
            <Form>
                <Row>
                    <Col>
                        <Form.Control
                            placeholder="Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            value={cityname}
                            placeholder="City"
                            onChange={(e) => { setCity(e.target.value) }}
                        />
                    </Col>
                </Row> <br />
                <Button variant="success" onClick={SaveForm} >Success</Button>
            </Form>
        </>
    )
}
export default GetApi;