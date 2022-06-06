import React from 'react'
import { Card } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div className='container'><br /><br />
      <strong className='text-center'><h3 style={{ letterSpacing: "3px" }}>Code Step By Step Mr.Rahul</h3></strong>
      <hr style={{ border: "2px solid red", marginLeft: "500px", marginRight: "500px" }}></hr><br />

      <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
              erat a ante.{' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomePage
