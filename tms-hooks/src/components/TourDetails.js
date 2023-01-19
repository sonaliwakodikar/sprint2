import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../cssfiles/TourDetails.css';
import td from '../assets/tourdetails.jpg';
import DashBoardCustomer from './CustomerMenu';
import CustomerMenu from './CustomerMenu';
import AdminMenu from './AdminMenu';
import Header from './Header';

function TourDetails() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [tour, setTour] = useState(null);
    const { tid } = useParams();
    const navigate = useNavigate();
    const handleButton = () => {
        // console.log(user);
        navigate("/reservations/new/" + tid);
    }
    const handleUpdate = () => {
        navigate("/tour/update/" + tid);
    }
    useEffect(() => {
        axios.get("http://localhost:8085/FindTour/" + tid).then(resp => setTour(resp.data));
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
            <div align='center' className='row'>
                {
                    tour !== null &&
                    <div className='TourDetails'>
                        <h3 className='TDHeading'>{tour.tourName} Details</h3>
                        <div className='card' style={{ width: "150px" }}>
                            <img className='card-img-top' src={td} alt="Card image" id="userimg" style={{ height: "125px" }}></img>
                        </div>
                        <p className='left'><b>TourId:</b>{tour.tourId}</p>
                        <p className='left'><b>Tour Name:</b>{tour.tourName}</p>
                        <p className='left'><b>Tour Location:</b>{tour.tourLocation}</p>
                        {/* <p className='left'><b>Tour Details:</b>{tour.tourDetails}</p> */}
                        <p className='left'><b>Tour Price:</b>{tour.tourPrice}</p>
                        <p className='left'><b>Tour Start Date:</b>{tour.tourStartDate}</p>
                        <p className='left'><b>Tour End Date:</b>{tour.tourEndDate}</p>
                        <p className='left'><b>Tour Is Active:</b>{tour.tourIsActive ? "Active" : "Not Active"}</p>
                        {
                            user.userType === "Admin" &&
                            <button onClick={handleUpdate}>Update</button>
                        }
                        {
                            user.userType === "Customer" &&
                            <button onClick={handleButton}>Reserve</button>
                        }
                        {
                            user.userType === "Staff" &&
                            <button onClick={handleButton}>Reserve</button>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default TourDetails;