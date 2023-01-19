import React from 'react';
import CustomerMenu from './CustomerMenu';
import AvailTour from './AvailabaleTours';
import Login from './Login';

function CustomerDashBoard(){
    const user = JSON.parse(localStorage.getItem("Details"));
    if (user !== null) {
        if (user.userType !== "Customer") {
            alert("Please Login as Customer");
        }
        return (
            <div>
                <div className='CDashBoard'>
                <CustomerMenu/>
                </div>
                <div><AvailTour /></div>
            </div>)
    }
    else {
        // navigate(`/user/login`);
        return (<Login />);
    }
    // if(user.userType!=="Customer"){
    //     alert("Please Login as Customer");
    //     navigate(`/user/login`)
    // }
    // return(<div>
    //     <div className='CDashBoard'>
    //         <CustomerMenu/>
    //     </div>
    //     <AvailTour/>
    // </div>)
}
export default CustomerDashBoard;