import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class StateWithClassComponent extends Component {

    constructor() {
        super();
        this.state = {
            data: 1
        }
    }

    ClcikMe() {
        this.setState({ data: this.state.data + 1 });
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>State With Class Component No : <span style={{ fontSize: "60px", color: "red" }}>{this.state.data}</span></h1>
                    <Button onClick={() => this.ClcikMe()} >Update Data</Button>
                </div>
            </>
        );
    }
}; 
