import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../cssfiles/AddTour.css';
import AdminMenu from './AdminMenu';
import CustomerMenu from './CustomerMenu';
import Header from './Header';

function AddTour() {
    const user = JSON.parse(localStorage.getItem("Details"));

    const [tName, setTName] = useState("");
    const [tLocation, setTLocation] = useState("");
    const [tDetails, setTDetails] = useState("");
    const [tPrice, setTPrice] = useState("");
    const [tStartDate, setTStartDate] = useState("");
    const [tEndDate, setTEndDate] = useState("");
    const [tIsActive, setTIsActive] = useState("");

    const handleSubmit = () => {
        const payload = {
            tourName: tName,
            tourLocation: tLocation,
            tourDetails: tDetails,
            tourPrice: tPrice,
            tourStartDate: tStartDate,
            tourEndDate: tEndDate,
            tourIsActive: tIsActive
        }
        axios.post("http://localhost:8085/NewTour", payload).then(resp =>
            // alert("Tour is saved with id: " + resp.data.tourId));
            alert(resp.data))
    }
    return (
        <div>
            <Header/>
            {
                user.userType === "Admin" &&
                <AdminMenu />
            }
            {
                user.userType === "Customer" &&
                <CustomerMenu />
            }
            {
                user.userType === "Staff" &&
                <CustomerMenu />
            }
            <div className="AddTour" align="center">
                <h3><b>Add Tour</b></h3>
                <table>
                    <tr>
                        <td>
                            <div>
                                {/* <label htmlFor="userName">UserName</label> */}
                                <input type='text' className="ATInput" name='tName' required value={tName} placeHolder='Name' onChange={(event) => setTName(event.target.value)} />
                            </div>
                        </td>
                        <td>
                            <div>
                                {/* <label htmlFor="userContact">UserContact:</label> */}
                                <input type='text' className="ATInput" name='tLocation' value={tLocation} placeHolder='Location' onChange={(event) => setTLocation(event.target.value)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><div>
                            <input type='text' className="ATInput" name='tDetails' value={tDetails} placeHolder='Details' onChange={(event) => setTDetails(event.target.value)} />
                        </div></td>
                        <td> <div>
                            {/* <label htmlFor="pincode">Pincode:</label> */}
                            <input type='text' className="ATInput" name='tPrice' value={tPrice} placeholder='Price' onChange={(event) => setTPrice(event.target.value)} />
                        </div></td>
                    </tr>
                    <tr>
                        <td><div>
                            {/* <label htmlFor="userType">UserType:</label> */}
                            <input type='date' className="ATInput" name='tStartDate' value={tStartDate} placeHolder='Start date' onChange={(event) => setTStartDate(event.target.value)} />
                        </div></td>
                        <td> <div>
                            {/* <label htmlFor="dno">Dno:</label> */}
                            <input type='date' className="ATInput" name='tEndDate' value={tEndDate} placeholder='End date' onChange={(event) => setTEndDate(event.target.value)} />
                        </div></td>
                    </tr>
                </table>
                <div style={{ width: "160px" }}>
                    {/* <label htmlFor="locality">Locality:</label> */}
                    <input type='text' className="ATInput" name='tIsActive' value={tIsActive} placeholder='Activation' onChange={(event) => setTIsActive(event.target.value)} />
                </div>
                <br></br>
                <div>
                    <button type='submit' onClick={handleSubmit} className="ATbtn">Add</button>
                </div>
                <br></br> <br></br>
                {/* <div style={{ color: "white" }}><Link to={"/tour/all"} style={{ color: "blue" }}><h4><b>Go to All Tours Details</b></h4></Link></div> */}
            </div></div>
    )
}
export default AddTour;

