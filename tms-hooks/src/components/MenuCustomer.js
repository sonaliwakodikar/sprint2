import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import '../cssfiles/MenuCustomer.css';
const MenuCustomer = () => {
    return (
        <React.Fragment>
            {/* heading section */}
            {/* <section>
                <div>
                    <Navbar/>
                </div> 
            </section> */}
            {/* sidebar section */}
            <section>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </section>
        </React.Fragment>
    )
}
export default MenuCustomer;