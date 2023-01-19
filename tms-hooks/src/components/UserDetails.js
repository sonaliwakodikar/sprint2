import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Anusha from '../assets/user3.jpg';
// import './UserDetails.css'
import '../cssfiles/UserDetails.css';
import AdminMenu from './AdminMenu';
import CustomerMenu from './CustomerMenu';
import Header from './Header';

function UserDetails() {
    const userr = JSON.parse(localStorage.getItem("Details"));
    const [user, setUser] = useState(null);
    const { id } = useParams();
    // const user1 = JSON.parse(localStorage.getItem("Details"));
    const navigate = useNavigate();
    const handleButton = () => {
        navigate("/user/update/" + user.userId);
    }

    useEffect(() => {
        axios.get("http://localhost:8085/FindUserById/" + id).then(resp => setUser(resp.data));
    }, [])
    return (
        <div>
            <Header/>
            {
                userr.userType === "Admin" &&
                <AdminMenu />
            }
            {
                userr.userType === "Customer" &&
                <CustomerMenu />
            }
            {
                userr.userType === "Staff" &&
                <CustomerMenu />
            }
            <div align='center' className="UserDetails">
                {
                    user !== null &&
                    <div style={{ color: "white" }}>
                        <p><h3 id="heading">{user.userName}</h3></p>
                        <div className='card' style={{ width: "150px" }}>
                            <img className='card-img-top' src={Anusha} alt="Card image" id="userimg" style={{ height: "125px" }}></img>
                        </div>
                        <p><b>UserId:</b>{user.userId}</p>
                        <p><b>UserName:</b>{user.userName}</p>
                        <p><b>User Contact:</b>{user.userContact}</p>
                        {/* <p><b>Login Id:</b>{user.userUserId}</p> */}
                        {/* <p><b>Password:</b>{user.userPassword}</p> */}
                        <p><b>Type:</b>{user.userType}</p>
                        <p><b>Address:</b>{user.address.locality}</p>
                        {
                            userr.userType === "Customer" &&
                            <button id="user-btn" onClick={handleButton}>Update</button>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default UserDetails;

