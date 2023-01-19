import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../cssfiles/UpdateTour.css';
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";
import Header from "./Header";

function UpdateTour() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const { tid } = useParams();
    const [tId, setTId] = useState("");
    const [tName, setTName] = useState("");
    const [tLocation, setTLocation] = useState("");
    const [tDetails, setTDetails] = useState("");
    const [tPrice, setTPrice] = useState("");
    const [tStartDate, setTStartDate] = useState("");
    const [tEndDate, setTEndDate] = useState("");
    const [tIsActive, setTIsActive] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8085/FindTour/" + tid).then(resp => {
            setTId(resp.data.tourId);
            setTName(resp.data.tourName);
            setTLocation(resp.data.tourLocation);
            setTDetails(resp.data.tourDetails);
            setTPrice(resp.data.tourPrice);
            setTStartDate(resp.data.tourStartDate);
            setTEndDate(resp.data.tourEndDate);
            setTIsActive(resp.data.tourIsActive);
        });
    }, [])
    const handleUpdate = () => {
        const tour = {
            tourId: tId,
            tourName: tName,
            tourLocation: tLocation,
            tourDetails: tDetails,
            tourPrice: tPrice,
            tourStartDate: tStartDate,
            tourEndDate: tEndDate,
            tourIsActive: tIsActive
        }
        axios.put("http://localhost:8085/UpdateTourDetails", tour).then(resp => alert(resp.data));
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
            <div align='center' className='UpdateTour'>
                <h3 className="UTHeading"><b>Update Tour</b></h3>
                <br></br>
                <table>
                    <tr>
                        <td><label className="labell">Tour Id</label>
                            <input type='text' name='tId' value={tId} className="UTInput" id="tId" onChange={(event) => setTId(event.target.value)} disabled />
                        </td>
                        <td><label className="labell">TourName</label>
                            <input type='text' name='tName' value={tName} className="UTInput" id="tName" onChange={(event) => setTName(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td><label className="labell">TourLocation</label>
                            <input type='text' name='tLocation' value={tLocation} className="UTInput" id="tLocation" onChange={(event) => setTLocation(event.target.value)} />
                        </td>
                        <td>
                            <label className="labell">TourDetails</label>
                            <input type='text' name='tDetails' value={tDetails} className="UTInput" id="tDetails" onChange={(event) => setTDetails(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td><label className="labell">TourStartDate </label>
                            <input type='date' name='tStartDate' value={tStartDate} className="UTInput" id="tStartDate" onChange={(event) => setTStartDate(event.target.value)} />
                        </td>
                        <td><label className="labell">TourEndDate</label>
                            <input type='date' name='tEndDate' value={tEndDate} className="UTInput" id="tEndDate" onChange={(event) => setTEndDate(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td> <label className="labell">TourPrice</label>
                            <input type='text' name='tPrice' value={tPrice} className="UTInput" id="tPrice" onChange={(event) => setTPrice(event.target.value)} />
                        </td>
                        <td>
                            <label className="labell">TourIsActive</label>
                            <input type='text' name='tIsActive' value={tIsActive ? "Active" : "Not Active"} className="UTInput" id="tIsActive" onChange={(event) => setTIsActive(event.target.value)} />
                        </td>
                    </tr>
                </table>
                <button onClick={handleUpdate} className="UTBtn">Save</button><br></br>
                <br></br>
                {/* <Link to="/">Back To Home</Link> */}
            </div>
        </div>
    )
}
export default UpdateTour;