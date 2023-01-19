import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AllUsers() {
    const [users, setUsers] = useState([])
    //useEffect is similar to componentDidMount and componentDidUpdate methods of stateful components
    useEffect(() => {
        axios.get("http://localhost:8085/DisplayAllUsers").then(resp => setUsers(resp.data));
    }, [])
    return (
        <div>
            <h3 align='center'>Existed Users</h3>
            <table border={10} align='center'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>Contact</th>
                        <th>LogId</th>
                        <th>Password</th>
                        <th>User Type</th>
                        <th>Address</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.userId}>
                                <td>{user.userId} </td>
                                <td>{user.userName}</td>
                                <td>{user.userUserId}</td>
                                <td>{user.userContact}</td>
                                <td>{user.userPassword}</td>
                                <td>{user.userType}</td>
                                <td>{user.address.addressId}</td>
                                <td><Link to={`/UserDetails/${user.userId}`}>Details</Link></td>
                                <td><Link to={`/UpdateUser/${user.userId}`}>Update</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <hr />
        </div>
    )
}
export default AllUsers;