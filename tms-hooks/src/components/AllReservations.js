import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
// import './AllReservation.css'
import '../cssfiles/AllReservation.css'
import CustomerMenu from "./CustomerMenu";
import AdminMenu from "./AdminMenu";
import Header from "./Header";

function ViewAllReservations() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [reservations, setReservations] = useState([]);
    //similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        axios.get("http://localhost:8085/ViewAllReservations").then(resp => setReservations(resp.data));
    }, [])
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
            <h1 align='center' className="AllRHeading">Reservations</h1>
            {
                <table className="tStyle" align='center'>
                    <thead>
                        <tr>
                            <th>ReservationId</th>
                            <th>User Id</th>
                            {/* <th>Tour Id</th>
                                <th>Reserved Date</th>
                                <th>Payment Date</th>
                                <th>Payment Info</th>
                                <th>Payment Status</th> */}
                            {/* <th>VIEW</th>
                                <th>MODIFY</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservations.map(r =>
                                <tr key={r.reservationId}>
                                    <td>{r.reservationId}</td>
                                    <td>{r.user.userId}</td>
                                    {/* <td>{r.tour.tourId}</td>
                                    <td>{r.reservedDate}</td>
                                    <td>{r.paymentDate}</td>
                                    <td>{r.paymentInfo}</td>
                                    <td>{r.paymentStatus}</td> */}
                                    <td><Link to={`/reservation/details/${r.reservationId}`}><p style={{ color: "greenyellow" }}>Details</p></Link></td>
                                    <td><Link to={`/reservations/modify/${r.reservationId}`}><p style={{ color: "greenyellow" }}>Update</p></Link></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>)
}
export default ViewAllReservations;