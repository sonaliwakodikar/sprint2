import React from "react";
import '../cssfiles/MenuCustomer.css';
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle, IoIosHome, IoMdPerson } from "react-icons/io";

const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem("Details"));
    const userid = user.userId;
    return (
        <div className="sidebar2">
            <ul className="ulitem">
                <li>
                    <IoMdPerson className="icon" />
                    <p className="text">Customer</p>
                </li>
                <li>
                    <IoIosHome className="icon" />
                    <p className="text">Home</p>
                </li>
                <li>
                    <IoIosArrowDroprightCircle className="icon" />
                    <Link to={`/tour/avail`} style={{ textDecoration: 'none' }}><p className="text">All Tours</p></Link>
                </li>
                <li>
                    <IoIosArrowDroprightCircle className="icon" />
                    <div><Link to={`/reservation/details/list/${userid}`} style={{ textDecoration: 'none' }}><p className="text">View Reservation</p></Link></div>
                </li>
                <li>
                    <IoIosArrowDroprightCircle className="icon" />
                    <div><Link to={`/user/update/${userid}`} style={{ textDecoration: 'none' }}><p className="text">Update Profile</p></Link></div>
                </li>
                <li>
                    <IoIosArrowDroprightCircle className="icon" />
                    <div><Link to={`/tour/search/location/`} style={{ textDecoration: 'none' }}><p className="text">Search Locations</p></Link></div>
                </li>
            </ul>
            <div>

            </div>
        </div>
    )
}
export default Sidebar;



