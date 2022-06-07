import React from 'react'
import { Card } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div className='container'><br /><br />
      <strong className='text-center'><h3 style={{ letterSpacing: "3px" }}>Code Step By Step Mr.Rahul</h3></strong>
      <hr style={{ border: "2px solid red", marginLeft: "500px", marginRight: "500px" }}></hr><br />

      <Card>
        <Card.Header>Redux</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              <li>A redux is a container where you can store your whole application data.</li>
              <li>So we call it to state Management</li>
              <li>It does not belong to component state</li>
              <li><strong style={{color:"red"}}>In Redux application we can only one Store used. </strong></li> 
              <br />
              <h6>Redux Architecture </h6>
              <h6><span style={{color:"green"}}>VIEW</span> [React Component] == <span style={{color:"red"}}>ACTION</span> [Collect Data from component or API] == <span style={{color:"blue"}}>REDUCER</span> [Get Data From Action and send to Store] == <span style={{color:"Orange"}}>STORE</span> [Sate of complete Application] == React View</h6>
            </p>
            
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomePage
