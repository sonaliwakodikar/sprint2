import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import tourimg from '../assets/bgimg4.jpg';
import '../cssfiles/AvailTours.css'
import CustomerMenu from './CustomerMenu';
import AdminMenu from './AdminMenu';
import Header from './Header';
// import '../cssfiles/DashBoardCustomer.css';
function AvailTour() {
    const user = JSON.parse(localStorage.getItem("Details"));
    // const userid=user.userId;
    const [tour, setTour] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8085/ViewTours").then(resp => setTour(resp.data));
    }, [])
    return (
        <div className='availTours'>
            <Header/>
            <div className='menubar'>
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
            </div>
            <h3 className='ATHeading' align="center">Available Tours</h3>
            <div className='roww'>
                {
                    tour.map(t =>
                        <div className='card stylee' style={{ width: "200px" }}>
                            <Link to={`/tour/details/${t.tourId}`}><img className="card-img-top" src={tourimg} alt="Tour Image" /></Link>
                            {/* <img src={tourimg} alt="Tour Image"/> */}
                            <div className='card-body'>
                                <h4 className='card-title' style={{color:"white"}}>{t.tourName}</h4>
                            </div>
                        </div>
                        // <tr key={t.tourId}>
                        //     <td>{t.tourId}</td>
                        //     <td>{t.tourName}</td>
                        //     <td>{t.tourLocation}</td>
                        //     <td>{t.tourDetails}</td>
                        //     <td>{t.tourPrice}</td>
                        //     <td>{t.tourStartDate}</td>
                        //     <td>{t.tourEndDate}</td>
                        //     <td>{t.tourIsActive ? "Active" : "Not Active"}</td>
                        //     <td><Link to={`/tour/update/${t.tourId}`}>Update</Link></td>
                        //     <td><Link to={`/tour/details/${t.tourId}`}>Details</Link></td>
                        // </tr>
                    )
                }
            </div>
        </div>
    )
}
export default AvailTour;