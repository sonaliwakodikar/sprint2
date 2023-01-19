import React, { useEffect, useState } from "react";
import axios from "axios";
import '../cssfiles/NewReservation.css';
import { useParams, Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";
import Header from "./Header";

function NewReservation() {
    const { tid } = useParams();
    const user = JSON.parse(localStorage.getItem("Details"));
    const [rDate, setRDate] = useState("");
    const [pDate, setPDate] = useState("");
    const [pInfo, setPInfo] = useState("");
    const [tId, setTId] = useState("");
    const [uId, setUId] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8085/FindTour/" + tid).then(resp => {
            setTId(resp.data.tourId);
        });
        // setTId({tid});
    }, [])

    const handleSubmit = () => {
        const payload = {
            paymentInfo: pInfo,
            reservedDate: rDate,
            paymentDate: pDate,
            user: { userId: uId },
            tour: { tourId: tId }
        }
        axios.post(`http://localhost:8085/NewReservation/${payload.user.userId}/${payload.tour.tourId}/${payload.paymentInfo}/${payload.reservedDate}/${payload.paymentDate}`).then(resp => {
            console.log(resp);
            // if(resp.data==='There is no User with Id: '+payload.user.userId){
            //    alert( <Link to={"/user/add"}>Register</Link>);

            // }
            alert(resp.data)
        })
        // .catch(error=>{
        //     alert( <Link to={"/user/add"}>Register</Link>);
        // })
    }
    return (<div>
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
        <div align="center" className="NReservation">
            <h3 className="NRHeading">New Reservation</h3>
            <div>
                <input type="text" placeholder="Payment Info" name="pInfo" value={pInfo} className="NRInput" onChange={(event) => setPInfo(event.target.value)} />
            </div>
            <div>
                <input type="date" placeholder="Payment Date" name="pDate" value={pDate} className="NRInput" onChange={(event) => setPDate(event.target.value)} />
            </div>
            <div>
                <input type="date" placeholder="Reservation Date" name="rDate" value={rDate} className="NRInput" onChange={(event) => setRDate(event.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="User ID" name="uId" value={uId} className="NRInput" onChange={(event) => setUId(event.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Tour ID" name="tId" value={tId} className="NRInput" onChange={(event) => setTId(event.target.value)} disabled />
            </div>
            <button onClick={handleSubmit} className="NRBtn">Save</button>
        </div>
    </div>
    )
}
export default NewReservation;