import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";
// import './ReservationDetails.css'
import '../cssfiles/ReservationDetails.css';
import Header from "./Header";

function ReservationDetails() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [reservation, setReservation] = useState(null);
    const { rid } = useParams();
    const navigate = useNavigate();
    const handleButton = () => {
        navigate("/reservations/modify/" + reservation.reservationId);
    }

    useEffect(() => {
        axios.get("http://localhost:8085/ViewReservationById/" + rid).then(resp => setReservation(resp.data));
    }, [])
    return (<div>
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
        <div align="center" className="ReservationDetails">
            {
                reservation !== null &&
                <div>
                    <h3 id="DHeading" style={{ color: "wheat" }}>Reservation Details</h3>
                    <div className="RDetails">
                        <p><b>Reservation Id:</b> {reservation.reservationId}</p>
                        <p><b>User Id:</b> {reservation.user.userId}</p>
                        <p><b>Tour Id:</b> {reservation.tour.tourId}</p>
                        <p><b>Reservation Date:</b> {reservation.reservedDate}</p>
                        <p><b>Payment Date: </b>{reservation.paymentDate}</p>
                        <p><b>Payment Info: </b>{reservation.paymentInfo}</p>
                        <p><b>Payment Status:</b> {reservation.paymentStatus}</p>
                        <button onClick={handleButton}>Update</button>
                    </div>
                </div>
            }
        </div>
    </div>)
}
export default ReservationDetails;