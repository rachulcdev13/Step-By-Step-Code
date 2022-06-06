import React from 'react' 
import { Button } from 'react-bootstrap'
import { NavLink, Outlet } from "react-router-dom";


const PageNotFound = () => {
  return (
    <>
    
    <div className='container text-center'> <br /><br /><br /><br />
        <h3>Page Not Found 404 Error..! </h3> 
        <NavLink className="Nav-Link" to="/"> 
        <Button variant="danger">Back To Home Page</Button>
        </NavLink> 
    </div>
    
    <Outlet /> 
    </>
     
  )
}

export default PageNotFound
