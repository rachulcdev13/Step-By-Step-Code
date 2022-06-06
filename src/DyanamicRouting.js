import React from 'react'
import { Link } from 'react-router-dom';

const DyanamicRouting = () => {



    const users = [
        { id:1,firstName: "Rahul", Lastname: "Chavan", Username: "Rahul88064", Age: 22 },
        { id:2,firstName: "Samat", Lastname: "Chavan", Username: "Chavan88064", Age: 22 },
        { id:3,firstName: "Ajinkya", Lastname: "gulhane", Username: "ajinkya88064", Age: 28 },
        { id:4,firstName: "Yogya", Lastname: "Sabnakar", Username: "Yogya88064", Age: 22 },
        { id:5,firstName: "Santosh", Lastname: "bhosale", Username: "Santya88064", Age: 28 },
        { id:6,firstName: "Prashnat", Lastname: "patil", Username: "Patils88064", Age: 28 }
    ]; // array of the object multiple record 

  return (
    <>
     <div>
         <h6>Dyanamic Routing With Param</h6>
            {
                users.map((currVal,ind)=>{
                    return(
                        <div>
                            <Link to={"/RouterComponent/About/"+currVal.id}>{currVal.firstName}</Link>
                        </div>
                    )
                })
            }
     </div> 
    </>
  )
}

export default DyanamicRouting
