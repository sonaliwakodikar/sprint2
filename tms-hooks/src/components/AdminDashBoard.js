import React, { useState } from 'react';
import AdminMenu from './AdminMenu';
import AvailTour from './AvailabaleTours';
import Login from './Login';

function AdminDashBoard() {
    const user = JSON.parse(localStorage.getItem("Details"));
    if (user !== null) {
        if (user.userType !== "Admin") {
            alert("Please Login as Admin");
        }
        return (
            <div>
                <div className='ADashBoard'>
                    <AdminMenu />
                </div>
                <div><AvailTour /></div>
            </div>)
    }
    else {
        // navigate(`/user/login`);
        return (<Login />);
    }
}
export default AdminDashBoard;