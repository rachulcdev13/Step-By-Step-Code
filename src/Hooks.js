import React, { useMemo, useState } from "react";
import { Button, Table } from "react-bootstrap";
import ChildComp from "./ChildComp";
import ReuseComp from "./ReuseComp";
import PureComponents from "./PureComponents";
import UseRefHooks from "./UseRefHooks";

const Hooks = () => {
    const myArr = ['Rahul Chavan', 'Ajinkya Gulhane', 'Vinya Wagh', 'Yogya Sabankar', 'Santya Bhosale', 'Harshya Sonkamble']; // Simple Array

    const dataArr = [
        { firstName: "Rahul", Lastname: "Chavan", Username: "Rahul88064", Age: 22 },
        { firstName: "Samat", Lastname: "Chavan", Username: "Chavan88064", Age: 22 },
        { firstName: "Ajinkya", Lastname: "gulhane", Username: "ajinkya88064", Age: 28 },
        { firstName: "Yogya", Lastname: "Sabnakar", Username: "Yogya88064", Age: 22 },
        { firstName: "Santosh", Lastname: "bhosale", Username: "Santya88064", Age: 28 },
        { firstName: "Prashnat", Lastname: "patil", Username: "Patils88064", Age: 28 }
    ]; // array of the object multiple record 

    const nestedArr = [
        {
            firstName: "Rahul", Lastname: "Chavan", Username: "Rahul88064",
            Address: [
                { flat_no: "201", building: "Dhamal complex", area: "Bekrainager", city: "Pune", pincode: "354251" },
                { flat_no: "202", building: "Patil complex", area: "Bhosale village", city: "Mumbai", pincode: "981251" },
                { flat_no: "203", building: "Rahul complex", area: "Fursuingi", city: "Nashik", pincode: "431321" },
                { flat_no: "204", building: "Samat complex", area: "Hadapsar", city: "Thane", pincode: "465251" },
            ]
        },
        // {
        //     firstName: "Samat", Lastname: "Chavan", Username: "Chavan88064",
        //     Address: [
        //         { flat_no: "201", building: "Dhamal complex", area: "Bekrainager", city: "Pune", pincode: "354251" },
        //         { flat_no: "202", building: "Patil complex", area: "Bhosale village", city: "Mumbai", pincode: "981251" },
        //         { flat_no: "203", building: "Rahul complex", area: "Fursuingi", city: "Nashik", pincode: "431321" },
        //         { flat_no: "204", building: "Samat complex", area: "Hadapsar", city: "Thane", pincode: "465251" },
        //     ]
        // },
        // {
        //     firstName: "Ajinkya", Lastname: "gulhane", Username: "ajinkya88064",
        //     Address: [
        //         { flat_no: "201", building: "Dhamal complex", area: "Bekrainager", city: "Pune", pincode: "354251" },
        //         { flat_no: "202", building: "Patil complex", area: "Bhosale village", city: "Mumbai", pincode: "981251" },
        //         { flat_no: "203", building: "Rahul complex", area: "Fursuingi", city: "Nashik", pincode: "431321" },
        //         { flat_no: "204", building: "Samat complex", area: "Hadapsar", city: "Thane", pincode: "465251" },
        //     ]
        // },
        // {
        //     firstName: "Yogya", Lastname: "Sabnakar", Username: "Yogya88064",
        //     Address: [
        //         { flat_no: "201", building: "Dhamal complex", area: "Bekrainager", city: "Pune", pincode: "354251" },
        //         { flat_no: "202", building: "Patil complex", area: "Bhosale village", city: "Mumbai", pincode: "981251" },
        //         { flat_no: "203", building: "Rahul complex", area: "Fursuingi", city: "Nashik", pincode: "431321" },
        //         { flat_no: "204", building: "Samat complex", area: "Hadapsar", city: "Thane", pincode: "465251" },
        //     ]
        // },
        // {
        //     firstName: "Santosh", Lastname: "bhosale", Username: "Santya88064",
        //     Address: [
        //         { flat_no: "201", building: "Dhamal complex", area: "Bekrainager", city: "Pune", pincode: "354251" },
        //         { flat_no: "202", building: "Patil complex", area: "Bhosale village", city: "Mumbai", pincode: "981251" },
        //         { flat_no: "203", building: "Rahul complex", area: "Fursuingi", city: "Nashik", pincode: "431321" },
        //         { flat_no: "204", building: "Samat complex", area: "Hadapsar", city: "Thane", pincode: "465251" },
        //     ]
        // },
        {
            firstName: "Prashnat", Lastname: "patil", Username: "Patils88064",
            Address: [
                { flat_no: "201", building: "Dhamal complex", area: "Bekrainager", city: "Pune", pincode: "354251" },
                { flat_no: "202", building: "Patil complex", area: "Bhosale village", city: "Mumbai", pincode: "981251" },
                { flat_no: "203", building: "Rahul complex", area: "Fursuingi", city: "Nashik", pincode: "431321" },
                { flat_no: "204", building: "Samat complex", area: "Hadapsar", city: "Thane", pincode: "465251" },
            ]
        }
    ]; // nested list with array listed and array of the object multiple record 

    const Parentalert = (names) => {
        alert(names);
        console.log(names);
    }
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    // const multiCount=()=>{
    //     console.log("multiCount function called");
    //     return count*5 ;
    // }

    // Using useMemo Hooks
    const multiCountfinal = useMemo(
        function multiCount() 
        {
            // console.log("multiCount function called");
            return count * 5;
        }, [count]);

    return (
        <>
            <div className="container">
                <h6> Handle Array With Listing And Map function : </h6>

                <Table striped bordered hover size="sm" variant="default" style={{ textAlign: "center" }}>
                    <tbody>
                        <tr style={{ backgroundColor: "gray", fontWeight: "bold" }}>
                            <th>#</th>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Username</td>
                            <td>Age</td>
                        </tr>
                        {
                            dataArr.map((data, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{ind + 1}</td>
                                        <td>{data.firstName}</td>
                                        <td>{data.Lastname}</td>
                                        <td>{data.Username}</td>
                                        <td>{data.Age}</td>
                                    </tr>
                                );
                            }

                                // if condition wise data showing :
                                // data.Age === 22 ?
                                //     <tr key={ind}>
                                //         <td>{ind}</td>
                                //         <td>{data.firstName}</td>
                                //         <td>{data.Lastname}</td>
                                //         <td>{data.Username}</td>
                                //         <td>{data.Age}</td>
                                //     </tr> : null

                            )
                        }
                    </tbody>
                </Table>
            </div><hr></hr>

            <div className="container">
                <h6> Nested List with nested array in ReactJs : </h6>
                <Table striped bordered hover size="sm" variant="dark" style={{ textAlign: "center" }}>
                    <tbody>
                        <tr style={{ fontWeight: "bold" }}>
                            <th>#</th>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Username</td>
                            <td>Address</td>
                        </tr>
                        {
                            nestedArr.map((nesArrData, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{nesArrData.firstName}</td>
                                        <td>{nesArrData.Lastname}</td>
                                        <td>{nesArrData.Username}</td>
                                        <td>
                                            <Table variant="dark" striped bordered hover size="sm" >
                                                <tbody>
                                                    {
                                                        nesArrData.Address.map((addressdata, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>Address {i + 1} :</td>
                                                                    <td>{addressdata.flat_no},</td>
                                                                    <td>{addressdata.building},</td>
                                                                    <td>{addressdata.area},</td>
                                                                    <td>{addressdata.city},</td>
                                                                    <td>{addressdata.pincode}.</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </td>
                                    </tr>


                                )

                            })
                        }
                    </tbody>
                </Table>
            </div><hr></hr>

            <div className="container">
                <h6>Reuse component in loop:</h6>
                {
                    myArr.map((reuse, i) => {
                        return <ReuseComp key={i} data={reuse} />
                    })
                }

            </div><hr></hr>

            <div className="container">
                <h6>React Fragment :</h6>
                <p>React Fragments <strong> allow you to wrap or group multiple elements without adding an extra node to the DOM.</strong>
                    <br /> This can be useful when rendering multiple child elements/components in a single parent component.</p>
            </div><hr></hr>

            <div className="container">
                <h6>Send Data Child to Parent Component [ Lifting state Up ] :</h6>
                <ChildComp data={Parentalert} />
            </div><hr></hr>

            <div className="container">
                <h6>Pure component in ReactJs :</h6>
                <li>the components which do not re-renders when the value of state and props has been updated with the same values</li>
                <li>Pure Componnet are used in only class Component</li>
                <PureComponents />
            </div><hr></hr>

            <div className="container">
                <h6>useMemo Hooks in ReactJs :</h6>
                <li>The React <strong>useMemo</strong> Hook returns a memoized value.</li>
                <li>The <strong>useMemo</strong> Hook only runs when one of its dependencies update.</li>
                <li>The <strong>useMemo</strong> and <strong>useCallback</strong>  Hooks are similar.</li>
                <li>The main difference is that <strong>useMemo</strong> returns a memoized value and
                    <strong>useCallback</strong> returns a memoized function</li> <br />
                <h6>Count: {count} & Item: {item} & MultiCount : {multiCountfinal}</h6>
                <Button onClick={() => setCount(count + 1)}>Update Count</Button> &nbsp;
                <Button onClick={() => setItem(item * 10)}>Update Item</Button><br /><br />

                <h6><strong style={{color:"red"}}>useMemo hook :</strong> If you use the use memo hook on top of your component it’s triggered before the updated render has it dependent on all your props,
                     it runs before everything every time props change.</h6>
                <h6><strong style={{color:"red"}}>useEffect hook :</strong> if you use the use effect hook on top of your component it’s triggered after the updated render and since dependent on all props
                     it triggers after a rerender depending on all props.</h6>     
            </div><hr></hr>

            <div className="container">
                <h6>useRef Hooks in React JS :</h6>
                <li>The useRef Hook allows you to persist values between renders.</li>
                <li>It can be used to access a DOM element directly.</li>
                <li>useRef() only returns one item. It returns an Object called current.</li>
                <li>When we initialize useRef we set the initial value: useRef(0).</li> <br />
                <UseRefHooks />
            </div><hr></hr>


        </>
    )
}
export default Hooks;