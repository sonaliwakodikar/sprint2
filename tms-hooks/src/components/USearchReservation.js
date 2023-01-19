import React, { useState } from "react";
import axios from "axios";
// import './SearchReservation.css';
import '../cssfiles/SearchReservation.css';
import search from '../assets/search.jpg';
import { useNavigate } from 'react-router-dom';
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";
import Header from "./Header";

function SearchReservationById() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [userId, setUserId] = useState("");
    const [reservations, setReservation] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = () => {
        axios.get("http://localhost:8085/ViewReservation/" + userId)
            .then(resp => {
                setReservation(resp.data);
                navigate("/reservation/details/list/" + userId)
            })
            .catch(error => {
                setReservation([]);
                //setMessage(error.response.data)
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
            <h3 style={{ color: "whitesmoke" }}>Search Reservation</h3>
            <div>
                <img className='card-img-top' src={search} alt="Card image" id="user1img" style={{ height: "125px" }}></img>
            </div>
            <div>
                <input type="text" className="SInput" name="userId" value={userId} placeholder="Enter UserId" onChange={(event) => setUserId(event.target.value)} /><br></br>
                <button onClick={handleSubmit}>Search</button>
                {
                    reservations.map(reservation => <div key={reservation.reservationId}>
                        <p>reservationId: {reservation.reservationId}</p>
                        <p>paymentDate: {reservation.paymentDate}</p>
                        <p>paymentInfo: {reservation.paymentInfo}</p>
                        <p>paymentStatus: {reservation.paymentStatus}</p>
                        <p>reservedDate: {reservation.reservedDate}</p>
                        <p>userId: {reservation.user.userId}</p>
                        <p>tourId: {reservation.tour.tourId}</p>
                    </div>)
                }
            </div>
        </div>
    </div>)
}
export default SearchReservationById;