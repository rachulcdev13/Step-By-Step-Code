import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class PureComponents extends Component {
    constructor() {
        super();
        this.state = {
            count:1
        }
    }

    render() {
        // console.log("Check re-rendering");
        return (
            <>
            <div>
                <h6>Count : {this.state.count}</h6>
                <Button variant='primary'  onClick={()=>{this.setState({count:this.state.count+1})}}>
                Pure_C Count</Button>
            </div >
            </>
        )
    }
}
export default PureComponents;
