import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import td from '../assets/tour1.jpg';
import "../cssfiles/LocationDetails.css";
import Header from "./Header";

function TourLocations() {

    const [tours, setTours] = useState([]);
    const { tourLocation } = useParams();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("Details"));
    // const handleButton = () => {
    //     navigate("/reservations/new/" + tour.tourId);
    // }
    useEffect(() => {
        axios.get("http://localhost:8085/FindTour/Location/" + tourLocation).then(resp => {
            console.log(resp.data)
            setTours(resp.data);
        })
    }, [])
    return (<div align="center" className="availTours">
        <Header/>
        <div>
            <h3 className="LDHeading">Tours to {tourLocation}</h3>
            {
                <div className="row">
                    {
                        tours.length>0 &&
                        tours.map(tour =>
                            <div>
                                <div className='card cardStyle' style={{ width: "150px" }}>
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
                                    user!==null&&
                                    <Link to={`/reservations/new/${tour.tourId}`}><button>Reserve</button></Link>
                                }
                                
                            </div>
                        )
                    }
                </div>
            }
        </div>
    </div>)
}
export default TourLocations;
