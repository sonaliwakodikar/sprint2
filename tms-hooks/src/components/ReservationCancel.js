import { useState } from "react";
import axios from "axios";
function Cancelreservation() {
    const [reservation, setReservation] = useState(null);
    const [reservationId, setReservationId] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        axios.get("http://localhost:8085/ViewReservationById/"+ reservationId)
            .then(resp => setReservation(resp.data))
            .catch(error => {
                setReservation(null)
                setMessage(error.response.data)
            })
    }

    function CancelReservation(id) {
        axios.delete("http://localhost:8085/DeleteReservation/" + id)
            .then(resp => {
                alert("Reservation deleted !!");
                handleSubmit();
            })
    }

    return (
        <div class="text-center"><center>
            {/* <Navbar/> */}
            {/* <Sidebar1/> */}
            <h2>Delete reservation By Id</h2>
            <div>
                <label>Enter ReservationId</label>
                <input type="text" name="reservationId" value={reservationId} onChange={(event) => setReservationId(event.target.value)} required />
            </div>
            <div>
                <button onClick={handleSubmit}> Search</button>
            </div>
            <div>
                {
                     reservation!== null ?
                        <table className="table table-striped">
                            <thead className="thead-dark">
                            </thead>
                            <tr>
                                <td>{reservation.reservationId}</td>
                                <td>{reservation.user.userId}</td>
                                <td>{reservation.tour.tourId}</td>
                                <td>{reservation.reservedDate}</td>
                                <td>{reservation.paymentDate}</td>
                                <td>{reservation.paymentInfo}</td>
                                <td>{reservation.paymentStatus}</td>
                                <td><button onClick={() => CancelReservation(reservation.reservationId)}>Delete</button></td>
                            </tr>
                        </table>
                        : <h2>{message}</h2>
                }
            </div></center>
        </div>)
}
export default Cancelreservation;