import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import user2 from '../assets/user2.jpg';
// import bg from '../assets/bgimage.jpg';
// import './login.css';
import '../cssfiles/login.css';
import Header from "./Header";
function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    // const[msg,setMessage]=useState("");
    const navigate = useNavigate();

    const handleButton = () => {
        let errors = {};
        if (!userName)
            errors['userNameError'] = "UserName is required";
        if (!password)
            errors['passwordError'] = "Password is required";
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const login = {
                userUserId: userName,
                password: password
            }
            axios.post("http://localhost:8085/auth/login", login).then(resp => {
                //alert("Succesfully logged in");
                const obj = {
                    userId: resp.data.userId,
                    userUserId: resp.data.userUserId,
                    userName: resp.data.userName,
                    userType: resp.data.userType
                }
                localStorage.setItem("Details", JSON.stringify(obj));
                if (resp.data.userType === 'Customer')
                    navigate("/customer/dashBoard");
                if (resp.data.userType === 'Admin')
                    navigate("/admin/dashboard");
                // if(resp.data.userType==='Staff')
                //     navigate("/staff/dashboard");
            })
                .catch(error => {
                    alert("Login Failed")
                    //setMessage(error.response.data);
                })
        }
    }
    return (
        <div className="lBackground">
            <Header/>
            <div align='center' className="login">
                <h2 id="loginhead">Login</h2>
                <img className='card-img-top' src={user2} alt="Card image" id="user1img" style={{ height: "125px" }}></img>
                <div>
                    {/* <label>UserId</label> */}
                    <input className="tInput" type='text' placeHolder='Enter Login Id' name='userName' value={userName} onChange={(event) => setUserName(event.target.value)} />
                    {
                        formErrors.userNameError && <div style={{ color: "red" }}>{formErrors.userNameError}</div>
                    }
                </div>
                <div>
                    {/* <label>Password</label> */}
                    <input className="tInput" type='password' placeHolder='Enter Password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    {
                        formErrors.passwordError && <div style={{ color: "red" }}>{formErrors.userNameError}</div>
                    }
                </div>
                <div>
                    <button className="btnLogin" onClick={handleButton}>SignIn</button>
                </div>
                <div>
                    <p style={{ color: "white" }}>Not a User? <Link to={"/user/add"} style={{ color: "blue" }}>Register</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login;