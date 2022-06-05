import React, { Component, createRef } from 'react'
import { Form, Button } from 'react-bootstrap' 
import UseRef from "./UseRef";

export default class UseRefHooks extends Component {
    constructor() {
        super();
        this.inpurRef = createRef();
    }
    componentDidMount() {
        // console.log(this.inpurRef.current.value = "Rahul Chavan");
    }
    getValue() {
        // console.log(this.inpurRef.current.value);
        this.inpurRef.current.style.color = "red"
        this.inpurRef.current.style.fontWeight = "bold"
        this.inpurRef.current.style.backgroundColor = "gold"
    }
    render() {

        return (
            <>
                <div>
                    <h6>useRef in Class component</h6>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter Samething..." ref={this.inpurRef} />
                        </Form.Group>
                        <Button variant="primary" onClick={() => this.getValue()}>
                            Check Ref
                        </Button>
                    </Form>
                </div> <br />
                <UseRef />
            </>
        )
    }
}
