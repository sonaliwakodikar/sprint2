import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LocationDetails from "./LocationDetails";
import CustomerMenu from "./CustomerMenu";
import AdminMenu from "./AdminMenu";
import Header from "./Header";

function SearchLocation() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [tourLocation, setTourLocation] = useState("");
    const [tours, setTours] = useState([]);
    const navigate = useNavigate();
    const handleButton = () => {
        axios.get("http://localhost:8085/FindTour/Location/" + tourLocation).then(resp => {
            console.log(resp.data);
            setTours(resp.data);
            navigate(`/tour/search/location/details/${tourLocation}`);
            // return <LocationDetails tours={tours}/>
        })
            .catch(error => {
                setTours([]);
                alert(error.response.data);
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
        <div align='center' className="SearchUser">
            <h3>Search Location</h3>
            <div>
                <input type='text' name='tourId' className="sInput" value={tourLocation} placeHolder='Enter Location to search' onChange={(event) => setTourLocation(event.target.value)} /><br></br>
                <button onClick={handleButton} className="SearchButton">Search</button>
            </div>
        </div>
    </div>)
}
export default SearchLocation;
