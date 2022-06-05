import React, { useRef } from 'react'
import { Form, Col, Row } from 'react-bootstrap';

const UnControlledComp = () => {
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    function saveForm(e) {
        e.preventDefault();
        console.log("input 1", inputRef.current.value);
        console.log("input 2", inputRef2.current.value);
        const input3 = document.getElementById('input3').value
        console.log("input 3", input3);

    }
    return (
        <>
            <div>
                <h6>UnControlled Component</h6>
                <li>An uncontrolled components, form data is handled by the DOM itself</li>
                <li>An uncontrolled component is a component that renders form elements,
                    where the form element's data is handled by the DOM (default DOM behavior)
                </li><br />
                <Form onSubmit={saveForm}>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" ref={inputRef} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" ref={inputRef2} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Nick name" id="input3" ref={inputRef2} />
                        </Col>
                        <Col>
                            <button className="btn btn-danger">Uncontrolled</button>
                        </Col>
                    </Row>
                </Form>
            </div><br />
            <p>
                <strong>
                    <li>Controlled component is component that get the changed value from the callback function </li>
                    <li> And uncontrolled component is component that have the one from the DOM</li>
                </strong>
            </p>
            <p><strong style={{ color: "red" }}>For example :</strong> When input value is changed,we can use onChange
                function in Controlled Component and also we can get the value using DOM like ref.</p>
        </>
    )
}

export default UnControlledComp
