import React, { useEffect, useState } from "react";
import { Table, Form, Col, Row, Button } from "react-bootstrap";

const GetApi = () => {
    const [getapi, setGetApi] = useState([]);
    const [name, setName] = useState('');
    const [cityname, setCity] = useState('');

    //Get method
    useEffect(() => { 
        getList();
    }, []); 

    //Once Delte no need to refresh portal using useEffect
    const getList = () => {
        fetch("http://localhost:8000/Apidata/").then((result) => {
            result.json().then((resp) => {
                // console.log("API",response);
                setGetApi(resp)
            })
        })
    } 

    //Post method
    const PostApi = () => {
        // console.log(name, cityname);
        const apidata = { name, cityname };
        fetch("http://localhost:8000/Apidata/", 
        {
            method: "POST",
            headers: 
            {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify(apidata)
        }).then((results) => {
            // console.log(results);
            results.json().then((resp) => {
                console.log(resp);
            })
        })
    }

    //Delete method :
    const DeleteApi = (id) => { 
        fetch(`http://localhost:8000/Apidata/${id}`, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getList();
            })
        })
    }

    return (
        <>
            <div>
                <h6> API</h6>
                <li>The <strong>fetch() method</strong> is used to send the requests to the server without refreshing the page. It is an alternative to the XMLHttpRequest object.</li>
                <li><strong>GET Method</strong> is used to request data from a specified resource.</li>
                <li><strong>POST Method</strong> is used to send data to a server to create/update a resource.</li>
                <li>For <strong>GET Method</strong> : Data is visible to everyone in the URL</li>
                <li>For <strong>POST Method</strong> : Data is not displayed in the URL</li>
                <li>An <strong>PATCH method</strong> is used to update information partially or completely (May be) of already existing resource at server and produces a new version of resource with updated information</li><br />

                <h6 style={{ color: "red" }}> fetch API | GET method :</h6>
                <Table striped bordered hover size="sm" >
                    <tbody style={{ textAlign: "center" }}>
                        <tr style={{ fontWeight: "bold" }}>
                            <td>ID</td>
                            <td>Name</td>
                            <td>City</td>
                            <td>Action</td>
                        </tr>
                        {
                            getapi.map((currVal, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{currVal.id}</td>
                                        <td>{currVal.name}</td>
                                        <td>{currVal.cityname}</td>
                                        <td><Button variant="danger" onClick={() => DeleteApi(currVal.id)}><span>Delete</span></Button>&nbsp;
                                            {/* <Button onClick={() => SelectUser(currVal.id)}><span>Edit</span></Button> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div><br />

            <div>
                <h6 style={{ color: "red" }}>POST Method in Rest API :</h6>
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
                    <Button variant="success" onClick={PostApi} >Submit</Button>
                </Form>
            </div><br />

            <div>
                <h6>Pre-filled form Data And Update Data With API</h6>

            </div>
        </>
    )
}
export default GetApi;