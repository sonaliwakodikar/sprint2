import React from "react";
import { IoMdPerson } from "react-icons/io";
import '../cssfiles/MenuCustomer.css';

const Navbar = () => {
    return (
        <React.Fragment>
            {/* navbar section */}
            <section>
                <div className="navb">
                    <div>
                        <IoMdPerson className="icon" />
                    </div>
                    <div>
                        <p className="text">admin</p>
                    </div>
                </div>
            </section>
            {/* sidebar section */}
            <section>
                <div>

                </div>
            </section>
        </React.Fragment>
    )
}
export default Navbar;