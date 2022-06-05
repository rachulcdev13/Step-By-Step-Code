import React from 'react'
import { Button } from 'react-bootstrap'

const ChildComp = (props) => {
    const names = {Name :"Samat Chavan",Email:"SamatChavan@gmail.com"} 
  return (
    <div>
      <h6>Child Component Name</h6>
      <Button onClick={()=>props.data(names)}>Click Me</Button>
    </div>
  )
}

export default ChildComp;
