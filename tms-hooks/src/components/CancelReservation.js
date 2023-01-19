import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Cancel() {
    const {rid} = useParams();
    useEffect(() => {
        axios.delete("http://localhost:8085/DeleteReservation/" + rid)
            .then(resp => {
                alert("Reservation with id " + rid + " Canceled!");
            })
    })
}
export default Cancel;