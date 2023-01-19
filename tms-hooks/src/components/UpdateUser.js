import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import './UpdateUser.css'
import '../cssfiles/UpdateUser.css';
import user2 from '../assets/user2.jpg'
import CustomerMenu from './CustomerMenu';
import AdminMenu from './AdminMenu';
import Header from './Header';

function UpdateUser() {
    const { userid } = useParams();
    const user = JSON.parse(localStorage.getItem("Details"));
    const [userId, setUserId] = useState("");
    const [userName, setuserName] = useState("");
    const [userContact, setuserContact] = useState("");
    const [userUserId, setuserUserId] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [userType, setuserType] = useState("");
    const [addressId, setAddressId] = useState("");
    const [locality, setlocality] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [dno, setdno] = useState("");
    const [country, setcountry] = useState("");
    const [pincode, setpincode] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8085/FindUserById/" + userid).then(resp => {
            setUserId(resp.data.userId);
            setuserName(resp.data.userName);
            setuserContact(resp.data.userContact);
            setuserUserId(resp.data.userUserId);
            setuserPassword(resp.data.userPassword);
            setuserType(resp.data.userType);

            setAddressId(resp.data.address.addressId);
            setlocality(resp.data.address.locality);
            setcity(resp.data.address.city);
            setstate(resp.data.address.state);
            setcountry(resp.data.address.country);
            setpincode(resp.data.address.pincode);
            setdno(resp.data.address.dno);
        });
    }, [])

    const handleUpdate = () => {
        const user = {
            userId: userId,
            userName: userName,
            userContact: userContact,
            userUserId: userUserId,
            userPassword: userPassword,
            userType: userType,
            address: {
                addressId: addressId,
                pincode: pincode,
                locality: locality,
                city: city,
                state: state,
                country: country,
                dno: dno
            }
        }
        axios.put("http://localhost:8085/UpdateUserDetails", user).then(resp => alert(resp.data));
    }
    return (
        <div>
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
            <div align='center' className='UpdateUser'>
                <h3 id="heading">Update Profile</h3>
                <div className='card' style={{ width: "150px" }}>
                    <img className='card-img-top' src={user2} alt="Card image" id="userimg" style={{ height: "125px" }}></img>
                </div>
                <table className='spacing'>
                    <tr>
                        <td>
                            <label className='llabel'>UserId:</label>
                            <input type='text' className="uInput" name='userId' value={userId} placeHolder='User Id' onChange={(event) => setUserId(event.target.value)} disabled /><br></br>
                        </td>
                        <td>
                            <label className='llabel'>UserName:</label>
                            <input type='text' className="uInput" name='userName' value={userName} placeHolder='Name' onChange={(event) => setuserName(event.target.value)} /><br></br></td>
                    </tr>
                    <tr>
                        <td>
                            <label className='llabel'>UserContact:</label>
                            <input type='text' className="uInput" name='userContact' value={userContact} placeHolder='Contact' onChange={(event) => setuserContact(event.target.value)} /><br></br></td>
                        <td>
                            <label className='llabel'>LoginId:</label>
                            <input type='text' className="uInput" name='userUserId' value={userUserId} placeHolder='UserId' onChange={(event) => setuserUserId(event.target.value)} disabled /><br></br>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='llabel'>Door no:</label>
                            <input type='text' className="uInput" name='dno' value={dno} placeholder='Door No' onChange={(event) => setdno(event.target.value)} /><br></br></td>
                        <td>
                            <label className='llabel'>Locality:</label>
                            <input type='text' className="uInput" name='locality' value={locality} placeholder='Locality' onChange={(event) => setlocality(event.target.value)} /><br></br></td>
                    </tr>
                    <tr>
                        <td>
                            <label className='llabel'>City:</label>
                            <input type='text' className="uInput" name='city' value={city} placeholder='City' onChange={(event) => setcity(event.target.value)} /><br></br></td>
                        <td>
                            <label className='llabel'>State:</label>
                            <input type='text' className="uInput" name='state' value={state} placeholder='State' onChange={(event) => setstate(event.target.value)} /><br></br></td>
                    </tr>
                    <tr>
                        <td>
                            <label className='llabel'>Country:</label>
                            <input type='text' className="uInput" name='country' value={country} placeholder='Country' onChange={(event) => setcountry(event.target.value)} /><br></br>
                        </td>
                        <td>
                            <label className='llabel'>Pincode:</label>
                            <input type='text' className="uInput" name='pincode' value={pincode} placeholder='Pincode' onChange={(event) => setpincode(event.target.value)} /><br></br></td>
                    </tr>
                </table>
                {/* <input type='password' name='userPassword' value={userPassword} placeHolder='Password' onChange={(event)=>setuserPassword(event.target.value)} /><br></br> */}
                {/* <label>Type</label>
                <input type='text' name='userType' value={userType} placeHolder='Type of User' onChange={(event)=>setuserType(event.target.value)} /><br></br> */}
                {/* <label id="label">AddressId:</label>
                <input type='text' name='addressID' value={addressId} placeHolder='AddressId' onChange={(event)=>setAddressId(event.target.value)} /><br></br> */}
                <button onClick={handleUpdate} id="user-btn">Update</button><br></br>
            </div>
        </div>
    )
}
export default UpdateUser;