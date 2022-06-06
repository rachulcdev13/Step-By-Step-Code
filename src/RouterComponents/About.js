import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap';


const About = () => {
  const navigate = useNavigate();

  // const GotoContact = () => {
  //   navigate('/Contact')
  // }
  return (
    <>
      <div className='container'><br /><br />
        <strong className='text-center'><h3 style={{ letterSpacing: "3px" }}>ABOUT US</h3></strong>
        <hr style={{ border: "2px solid red", marginLeft: "500px", marginRight: "500px" }}></hr><br />

        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            <h6>With supporting text below as a natural lead-in to additional content.</h6>
              <strong>What is Lorem Ipsum?</strong><br /><br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
      <Outlet />
    </>
  )
}

export default About
