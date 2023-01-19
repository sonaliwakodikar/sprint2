import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import user1 from '../assets/user2.jpg';
import Header from './Header';
// import './allUsers.css'
import '../cssfiles/allUsers.css';
import AdminMenu from './AdminMenu';
import CustomerMenu from './CustomerMenu';
function FetchAllUsers() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const [users, setUsers] = useState([])
    //useEffect is similar to componentDidMount and componentDidUpdate methods of stateful components
    useEffect(() => {
        axios.get("http://localhost:8085/DisplayAllUsers").then(resp => setUsers(resp.data));
    }, [])
    return (
        <div className='availTours'>
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
            <div style={{ marginTop: "25px" }}>
                <h3 align='center' style={{ color: 'white' }} >Existed Users</h3><br></br>
            </div>
            <div className='roww'>
                {
                    users.map(user =>
                        <div className="card alignn" style={{ width: "200px" }}>
                            <Link to={`/user/details/${user.userId}`}><img className="card-img-top" src={user1} alt="Card image" /></Link>
                            <div class="card-body">
                                <h4 class="card-title" style={{ color: 'white' }}>{user.userName}</h4>
                                <p class="card-text" style={{ color: 'white' }}>Role: {user.userType}</p>
                                {/* <Link to={`/user/details/${user.userId}`} className='btn btn-success'>Details</Link> */}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default FetchAllUsers;