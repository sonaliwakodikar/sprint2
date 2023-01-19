import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./ModifyReservation.css"
import '../cssfiles/ModifyReservation.css';
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";
import Header from "./Header";

function ModifyReservation() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const { rid } = useParams();
    const [rId, setRId] = useState("");
    const [pDate, setPDate] = useState("");
    const [pInfo, setRInfo] = useState("");
    const [pStatus, setRStatus] = useState("");
    const [rDate, setRDate] = useState("");
    const [uId, setUId] = useState("");
    const [tId, setTId] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8085/ViewReservationById/" + rid).then(resp => {
            setRId(resp.data.reservationId);
            setPDate(resp.data.paymentDate);
            setRInfo(resp.data.paymentInfo);
            setRStatus(resp.data.paymentStatus);
            setRDate(resp.data.reservedDate);
            setUId(resp.data.user.userId);
            setTId(resp.data.tour.tourId);
        });
    }, [])
    const updateReservationSubmit = () => {
        const payload = {
            reservationId: rId,
            paymentDate: pDate,
            paymentInfo: pInfo,
            paymentStatus: pStatus,
            reservedDate: rDate,
            userDto: { userId: uId },
            tourDto: { tourId: tId }
        }
        axios.put("http://localhost:8085/ModifyReservation", payload).then(resp => alert(resp.data));
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
        <div className="MReservation">
            <h3 align="center">Modify Reservation</h3>
            <div>
                <label className="llabell">Reservation Id</label>
                <input type="text" className="mInput" name="rId" value={rId} onChange={(event) => setRId(event.target.value)} disabled />
            </div>
            <div>
                <label className="llabell">Payment Date</label>
                <input type="date" className="mInput" name="pDate" value={pDate} onChange={(event) => setPDate(event.target.value)} />
            </div>
            <div>
                <label className="llabell">Payment Info</label>
                <input type="text" className="mInput" name="pInfo" value={pInfo} onChange={(event) => setRInfo(event.target.value)} />
            </div>
            <div>
                <label className="llabell">Payment Status</label>
                <input type="text" className="mInput" name="pStatus" value={pStatus} onChange={(event) => setRStatus(event.target.value)} />
            </div>
            <div>
                <label className="llabell">Reservation Date</label>
                <input type="date" className="mInput" name="rDate" value={rDate} onChange={(event) => setRDate(event.target.value)} />
            </div>
            {/* <div>
                <label>User Id</label>
                <input type="text" className="mInput" name="uId" value={uId} onChange={(event)=>setUId(event.target.value)} />
            </div> */}
            {/* <div>
                <label>Tour Id</label>
                <input type="text" className="mInput" name="tId" value={tId} onChange={(event)=>setTId(event.target.value)} />
            </div> */}
            <button onClick={updateReservationSubmit} className="btnModify"><p style={{ align: "center" }}>Update</p></button>
        </div>
    </div>)
}
export default ModifyReservation;