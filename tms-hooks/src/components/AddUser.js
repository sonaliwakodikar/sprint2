import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../cssfiles/Registration.css';
import Header from "./Header";
function NewUser() {
    const [userName, setuserName] = useState("");
    const [userContact, setuserContact] = useState("");
    const [userUserId, setuserUserId] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userType, setuserType] = useState("");

    const [pincode, setpincode] = useState("");
    const [locality, setlocality] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [country, setcountry] = useState("");
    const [dno, setdno] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const handleButton = () => {
        let errors = {};
        if (!userName)
            errors['userNameError'] = "UserName is required";
        if (!userContact)
            errors['userContactError'] = "Contact is required";
        if (!userUserId)
            errors['userUserIdError'] = "UserId is required";
        if (!userPassword)
            errors['userPasswordError'] = "Password is required";
        if (!userType)
            errors['userTypeError'] = "UserType is required";
        if (!pincode)
            errors['pincodeError'] = "Pincode is required";
        if (userPassword !== confirmPassword)
            errors['matchError'] = "Password and Confirm Password should be same";
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const user = {
                userName: userName,
                userContact: userContact,
                userUserId: userUserId,
                userPassword: userPassword,
                userType: userType,
                address: {
                    pincode: pincode,
                    locality: locality,
                    city: city,
                    state: state,
                    country: country,
                    dno: dno
                }
            }
            axios.post("http://localhost:8085/CreateNewUser", user).then(resp => alert(resp.data));
        }
    }
    return (
       <div>
         <Header/>
         <div className="registration" align='center'>
            <h3 className="registrationHeading">Registration</h3>
            <table>
                <tr>
                    <td>
                        <div>
                            {/* <label htmlFor="userName">UserName</label> */}
                            <input type='text' className="rInput" name='userName' value={userName} placeHolder='Name' onChange={(event) => setuserName(event.target.value)} />
                            {
                                formErrors.userNameError && <div style={{ color: "red" }}>{formErrors.userNameError}</div>
                            }
                        </div>
                    </td>
                    <td>
                        <div>
                            {/* <label htmlFor="userContact">UserContact:</label> */}
                            <input type='text' className="rInput" name='userContact' value={userContact} placeHolder='Contact' onChange={(event) => setuserContact(event.target.value)} />
                            {
                                formErrors.userContactError && <div style={{ color: "red" }}>{formErrors.userContactError}</div>
                            }
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><div>
                        {/* <label htmlFor="userUserId">UserId:</label> */}
                        <input type='text' className="rInput" name='userUserId' value={userUserId} placeHolder='UserId' onChange={(event) => setuserUserId(event.target.value)} required />
                        {
                            formErrors.userUserIdError && <div style={{ color: "red" }}>{formErrors.userUserIdError}</div>
                        }
                    </div></td>
                    <td> <div>
                        {/* <label htmlFor="pincode">Pincode:</label> */}
                        <input type='text' className="rInput" name='pincode' value={pincode} placeholder='Pincode' onChange={(event) => setpincode(event.target.value)} />
                        {
                            formErrors.pincodeError && <div style={{ color: "red" }}>{formErrors.pincodeError}</div>
                        }
                    </div></td>
                </tr>
                <tr>
                    <td><div>
                        {/* <label htmlFor="userType">UserType:</label> */}
                        <input type='text' className="rInput" name='userType' value={userType} placeHolder='Type of User' onChange={(event) => setuserType(event.target.value)} required />
                        {
                            formErrors.userTypeError && <div style={{ color: "red" }}>{formErrors.userTypeError}</div>
                        }
                    </div></td>
                    <td> <div>
                        {/* <label htmlFor="dno">Dno:</label> */}
                        <input type='text' className="rInput" name='dno' value={dno} placeholder='Door No' onChange={(event) => setdno(event.target.value)} />
                    </div></td>
                </tr>
                <tr>
                    <td>
                        <div>
                            {/* <label htmlFor="locality">Locality:</label> */}
                            <input type='text' className="rInput" name='locality' value={locality} placeholder='Locality' onChange={(event) => setlocality(event.target.value)} />
                        </div>
                    </td>
                    <td>
                        <div>
                            {/* <label htmlFor="city">City:</label> */}
                            <input type='text' className="rInput" name='city' value={city} placeholder='City' onChange={(event) => setcity(event.target.value)} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td> <div>
                        {/* <label htmlFor="state">State:</label> */}
                        <input type='text' className="rInput" name='state' value={state} placeholder='State' onChange={(event) => setstate(event.target.value)} />
                    </div></td>
                    <td><div>
                        {/* <label htmlFor="country">Country:</label> */}
                        <input type='text' className="rInput" name='country' value={country} placeholder='Country' onChange={(event) => setcountry(event.target.value)} />
                    </div></td>
                    <td></td>
                </tr>
                <tr>
                    <td> <div>
                        {/* <label htmlFor="userPassword">Password:</label> */}
                        <input type='password' className="rInput" name='userPassword' value={userPassword} placeHolder='Password' onChange={(event) => setuserPassword(event.target.value)} />
                        {
                            formErrors.userPasswordError && <div style={{ color: "red" }}>{formErrors.userPasswordError}</div>
                        }
                    </div></td>
                    <td><div>
                        {/* <label htmlFor="userPassword">Cofirm Password:</label> */}
                        <input type='password' className="rInput" placeHolder='Confirm Password' name='confirmPassword' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                        {
                            formErrors.matchError && <div style={{ color: "red" }}>{formErrors.matchError}</div>
                        }
                    </div></td>
                </tr>
            </table>
            <button type='submit' onClick={handleButton} className="btnRegister">Register</button>
            <div style={{ color: "white" }}>Existed User? <Link to={"/user/login"} style={{ color: "blue" }}>SignIn</Link></div>
        </div>
       </div>
    )
}
export default NewUser;