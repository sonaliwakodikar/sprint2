import React, { useState } from "react";
import axios from "axios";
// import './SearchReservation.css';
import search from '../assets/search.jpg';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/SearchReservation.css';
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";
import Header from "./Header";

function SearchReservationByReservedId() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [reservationId, setReservationId] = useState("");
    const [reservation, setReservation] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.get("http://localhost:8085/ViewReservationById/" + reservationId)
            .then(resp => {
                setReservation(resp.data);
                navigate(`/reservation/details/${resp.data.reservationId}`)
            })
            .catch(error => {
                //setReservation(null);
                alert(error.response.data)
            })
    }
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
        <div align="center" className="SearchReservation">
            <h3>Search Reservation</h3>
            <div>
                <div><img className='card-img-top' src={search} alt="Card image" id="user1img" style={{ height: "125px" }}></img></div>
                <input type="text" className="SInput" placeholder="Enter ReservationId" name="reservationId" value={reservationId} onChange={(event) => setReservationId(event.target.value)} /><br></br>
                <button onClick={handleSubmit}>Search</button>
                {
                    reservation !== null ? <div>
                        <h2>Reservation Details</h2>
                        <p>reservationId: {reservation.reservationId}</p>
                        <p>paymentDate: {reservation.paymentDate}</p>
                        <p>paymentInfo: {reservation.paymentInfo}</p>
                        <p>paymentStatus: {reservation.paymentStatus}</p>
                        <p>reservedDate: {reservation.reservedDate}</p>
                        <p>userId: {reservation.user.userId}</p>
                        <p>tourId: {reservation.tour.tourId}</p>
                    </div>
                        : <h3>{message}</h3>
                }
            </div>
        </div>
    </div>)
}
export default SearchReservationByReservedId;