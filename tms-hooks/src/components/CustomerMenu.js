import React, { useState } from "react";
import { IoIosArrowDroprightCircle, IoMdMenu, IoIosHome } from "react-icons/io"
import AvailTour from './AvailabaleTours';
import UpdateUser from './UpdateUser';
import UReservedDetails from './UReservedDetails';
import '../cssfiles/DashBoardCustomer.css';
import { Link } from "react-router-dom";

const CustomerMenu = () => {
    const [url, setUrl] = useState("");
    const [active, setActive] = useState(false);
    const user = JSON.parse(localStorage.getItem("Details"));
    const userid = user.userId;
    const activateNav = () => {
        setActive(!active)
    }
    return (
        <div>
            <div className={active ? "header" : "header-mobile"}>
                <nav>
                    <div className="menu-icon" onClick={activateNav}>
                        {
                            !active ? <IoMdMenu className="menu" /> : <button className="menu1" style={{ width: 'fit-content' }}>CUSTOMER</button>
                        }
                    </div>
                    <ul className={active ? "ul-item" : "ul-item oicon"}>
                        <li>
                            <IoIosHome className="icon" />
                            {/* <p className="text" style={{color:"whitesmoke"}}>Home</p> */}
                            <div><Link to={`/`} style={{ textDecoration: 'none' }}>Home</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/tour/avail`} style={{ textDecoration: 'none' }}>All Tours</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/reservation/details/list/${userid}`}>View Reservations</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/user/update/${userid}`}>Update Profile</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/tour/search/location/`}>SearchLocation</Link></div>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <div>
                {
                    url === "alltours" &&
                    <div><AvailTour /></div>
                }
                {
                    url === "viewreservations" &&
                    <div><UReservedDetails uid={user.userId} /></div>
                }
                {
                    url === "updateprofile" &&
                    <div><UpdateUser uid={user.userId} /></div>
                }
            </div> */}
        </div>
    )
}
export default CustomerMenu;