import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
// import './AllReservation.css';
import '../cssfiles/AllReservation.css';
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";
import Header from "./Header";

function UReservedDetails() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [reservations, setReservations] = useState([]);
    const { uid } = useParams();
    // const [userId,setUserId]=useState(uid);
    useEffect(() => {
        axios.get("http://localhost:8085/ViewReservation/" + uid).then(resp => {
            // console.log(resp);
            setReservations(resp.data);
        })
    }, [])
    return (<div align="center">
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
        <div>
            <h3 className="URHeading">User Reservations</h3>
            {
                <table border={5} className="tStyle">
                    <thead>
                        <tr>
                            <th style={{ color: "black" }}>ReservationId</th>
                            <th style={{ color: "black" }}>ReservedDate</th>
                            <th style={{ color: "black" }}>PaymentDate</th>
                            <th style={{ color: "black" }}>PaymentInfo</th>
                            <th style={{ color: "black" }}>PaymentStatus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservations.map(r =>
                                <tr key={r.reservationId}>
                                    <td>{r.reservationId}</td>
                                    <td>{r.reservedDate}</td>
                                    <td>{r.paymentDate}</td>
                                    <td>{r.paymentInfo}</td>
                                    <td>{r.paymentStatus}</td>
                                    <td><Link to={`/reservations/modify/${r.reservationId}`}><p style={{ color: "greenyellow" }}>Update</p></Link></td>
                                    <td><Link to={`/reservation/cancel/${r.reservationId}`}><p style={{ color: "greenyellow" }}>Cancel</p></Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    </div>)
}
export default UReservedDetails;