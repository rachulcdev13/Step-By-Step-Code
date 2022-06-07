import React from 'react' 
import { Table } from 'react-bootstrap';  
import { Link } from 'react-router-dom';
import GetApi from './API/GetApi';

const DyanamicRouting = () => {

    const users = [
        { id: 1, firstName: "Rahul", Lastname: "Chavan", Username: "Rahul88064", Age: 22 },
        { id: 2, firstName: "Samat", Lastname: "Chavan", Username: "Chavan88064", Age: 22 },
        { id: 3, firstName: "Ajinkya", Lastname: "gulhane", Username: "ajinkya88064", Age: 28 },
        { id: 4, firstName: "Yogya", Lastname: "Sabnakar", Username: "Yogya88064", Age: 22 },
        { id: 5, firstName: "Santosh", Lastname: "bhosale", Username: "Santya88064", Age: 28 },
        { id: 6, firstName: "Prashnat", Lastname: "patil", Username: "Patils88064", Age: 28 }
    ]; // array of the object multiple record 

    return (
        <>
            <div> 
                <h6>Dyanamic Routing With Param :</h6><br /> 
                <Table striped bordered hover size="sm" >
                    <tbody style={{textAlign:"center"}}>
                        <tr style={{fontWeight:"bold"}}>
                            <td>Id</td>
                            <td>firstName</td>
                            <td>Lastname</td>
                            <td>Username</td>
                            <td>Age</td>
                        </tr>
                        {
                            users.map((currVal, ind) => {
                                return (
                                    <tr key={ind}> 
                                        <td>{currVal.id}</td>
                                        <Link to={"/RouterComponent/About/"+currVal.id+"/"+currVal.firstName}>{currVal.firstName}</Link>
                                        {/* <td>{currVal.firstName}</td> */}
                                        <td>{currVal.Lastname}</td>
                                        <td>{currVal.Username}</td>
                                        <td>{currVal.Age}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>  
            </div>
            <hr></hr>
            <GetApi />
            
        </>
    )
}

export default DyanamicRouting
