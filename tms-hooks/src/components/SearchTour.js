import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import CustomerMenu from './CustomerMenu';
import Header from './Header';

function SearchTour() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [tourId, setTourId] = useState("");
    const [tour, setTour] = useState();
    const navigate = useNavigate();
    const handleButton = () => {
        axios.get("http://localhost:8085/FindTour/" + tourId).then(resp => {
            setTour(resp.data);
            navigate(`/tour/details/${tourId}`);
        })
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
            <div align='center' className="SearchUser">
                <h3>Searching Tour</h3>
                <div>
                    <input type='text' className="sInput" name='tourId' value={tourId} placeHolder='Enter id to search' onChange={(event) => setTourId(event.target.value)} /><br></br><br></br>
                    <button onClick={handleButton} className="SearchButton">Search</button>
                </div>

            </div>
        </div>
    )
}
export default SearchTour;