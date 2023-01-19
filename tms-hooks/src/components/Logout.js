import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
function Logout() {
    const user = JSON.parse(localStorage.getItem("Details"));
    const navigate=useNavigate();
    // const handleButton = () => {
        if (user !== null) {
            localStorage.removeItem("Details");
            alert("Logged Off Succesfully");
            //  navigate(`/`);
            // <Home/>
            // <Link to={<Home/>}/>
            // <div><Link to={`/`}>Home</Link></div>
        }
    // }
    // return (
    //     <div>
    //         <button onClick={handleButton}>Logout</button>
    //     </div>
    // )
}
export default Logout;