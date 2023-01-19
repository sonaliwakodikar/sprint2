import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import user1 from '../assets/user1.jpg';
// import './SearchUser.css'
import '../cssfiles/SearchUser.css'
import Header from "./Header";

function FindUser() {
    const [userId, setuserId] = useState("");
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleButton = () => {
        axios.get("http://localhost:8085/FindUserById/" + userId).then(resp => {
            setUser(resp.data);
            navigate(`/user/details/${resp.data.userId}`);
        })
            .catch(error => {
                setUser(null);
                //setMessage(error.response.data)
                alert(error.response.data)
            })
    }
    return (
        <body className="Background">
            <Header/>
            <div align='center' className="SearchUser">
                <h3>Searching User</h3>
                <div>
                    <div>
                        <img className='card-img-top' src={user1} alt="Card image" id="user1img" style={{ height: "125px" }}></img>
                    </div>
                    <div>
                        <input type='text' className="sInput" name='userId' value={userId} placeHolder='Enter id to search' onChange={(event) => setuserId(event.target.value)} /><br></br><br></br>
                        <button onClick={handleButton} className="SearchButton">Search</button>
                    </div>
                    {
                        user !== null ? <div>
                            {/* <Link to={`/UserDetails/${user.userId}`}>Details</Link> */}
                            {/* <p><b>User Details</b></p>
                <p>UserId:{user.userId}</p>
                <p>UserName:{user.userName}</p>
                <p>User Contact:{user.userContact}</p>
                {/* <p>Login Id:{user.userUserId}</p>
                <p>Password:{user.userPassword}</p> */}
                            {/* <p>Type:{user.userType}</p>
                <p>Address:{user.address.addressId}</p> */}
                        </div> : <p>{message}</p>
                    }
                </div>
            </div>
        </body>
    )
}
export default FindUser;