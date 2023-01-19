import React, { useState } from "react";
import { IoIosArrowDroprightCircle, IoMdMenu ,IoIosHome} from "react-icons/io"
import { Link } from "react-router-dom";

const AdminMenu = () => {
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
                            !active ? <IoMdMenu className="menu" /> : <button className="menu1" style={{ width: 'fit-content' }}>ADMIN</button>
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
                            <div><Link to={`/tour/avail`}>All Tours</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/tour/add`}>New Tour</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/tour/search`}>Search Tour</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/users/all`}>All Users</Link></div>
                        </li>

                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/reservations/all`}>All Reservations</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/reservations/search/user`}>Search User Reservation</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/reservations/search/reservation`}>Search Reservation</Link></div>
                        </li>
                        <li>
                            <IoIosArrowDroprightCircle className="icon" />
                            <div><Link to={`/user/update/${userid}`}>Update Profile</Link></div>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <div className='SideBar'>
                {
                    url === "alltours" &&
                    <div><AvailTour /></div>
                }
                {
                    url === "allusers" &&
                    <div><FetchAllUsers /></div>
                }
                {
                    url === "allreservations" &&
                    <div><ViewAllReservations /></div>
                }
                {
                    url === "addtour" &&
                    <div><AddTour /></div>
                }
                {
                    url === "searchtour" &&
                    <div><SearchTour /></div>
                }
                {
                    url === "searchreservationById" &&
                    <div><SearchReservationByReservedId /></div>
                }
                {
                    url === "searchreservationUser" &&
                    <div><SearchReservationById /></div>
                }
            </div> */}
        </div>
    )
}
export default AdminMenu;