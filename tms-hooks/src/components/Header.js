import { useState } from 'react';
import '../cssfiles/Header.css';
import { useNavigate, useParams } from 'react-router-dom';
const user = JSON.parse(localStorage.getItem("Details"));

function Header() {
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const handleButton = () => {
        navigate(`/tour/location/${location}`);
    }
    const handleLogout = () => {
        localStorage.removeItem("Details");
        alert("Logged Off");
        navigate(`/`);
    }
    if (user !== null) {
        return (
            <div>
                <div className='html'>
                    <header>
                        <a href="#" className="logo"><i class="fas fa-plane"></i> Tour.</a>
                        <nav className="navbar">
                            <a href="/">Home</a>
                            <a href="#about">About Us</a>
                            <div className="dropdown"> <a class="dropbtn">Locations</a>
                                <div class="dropdown-content">
                                    <br></br><br></br>
                                    <div className="link1"><a href="#">Bangalore</a></div>
                                    <div className="link2"><a href="#">Chennai</a></div>
                                    <div className="link3"><a href="#">Pune</a></div>
                                    <div className="link3"><a href="#">Manali</a></div>
                                </div>
                            </div>
                            <a href="#contact">Contact</a>
                        </nav>
                        <form class="example">
                            <input type="text" placeholder="Search Location" name="location" value={location} onChange={(event) => setLocation(event.target.value)} />
                            <button type="submit" onClick={handleButton}><i class="fa fa-search"></i></button>
                        </form>
                        <div class="dropdown">
                            <div className="icons">
                                <div><i class="fas fa-user" id="menu-bars"></i></div>
                                <div class="dropdown-content">
                                    {/* <div className="link1"><a href="/user/login">Login</a></div> */}
                                    {/* <div className="link2"><a href="/user/add">Registration</a></div> */}
                                    {/* <div className="link1"><a href="/user/logout">Logout</a></div> */}
                                    <button onClick={handleLogout}>Logout</button>
                                    {
                                        user.userType === "Admin" &&
                                        <div className="link2"><a href="/admin/dashboard">DashBoard</a></div>
                                    }
                                    {
                                        user.userType === "Customer" &&
                                        <div className="link2"><a href="/customer/dashboard">DashBoard</a></div>
                                    }
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className='html'>
                    <header>
                        <a href="#" className="logo"><i class="fas fa-plane"></i> Tour.</a>
                        <nav className="navbar">
                            <a href="/">Home</a>
                            <a href="/tour/all">About Us</a>
                            <div className="dropdown"> <a class="dropbtn">Locations</a>
                                <div class="dropdown-content">
                                    <br></br><br></br>
                                    <div className="link1"><a href="#">Bangalore</a></div>
                                    <div className="link2"><a href="#">Chennai</a></div>
                                    <div className="link3"><a href="#">Pune</a></div>
                                    <div className="link3"><a href="#">Manali</a></div>
                                </div>
                            </div>
                            <a href="/tour/add">Contact</a>
                        </nav>
                        <form class="example">
                            <input type="text" placeholder="Search Location" name="location" value={location} onChange={(event) => setLocation(event.target.value)} />
                            <button type="submit" onClick={handleButton}><i class="fa fa-search"></i></button>
                        </form>
                        <div class="dropdown">
                            <div className="icons">
                                <div><i class="fas fa-user" id="menu-bars"></i></div>
                                <div class="dropdown-content">
                                    <div className="link1"><a href="/user/login">Login</a></div>
                                    <div className="link2"><a href="/user/add">Registration</a></div>
                                    {/* {
                                        user.userType==="Admin"&&
                                        <div className="link2"><a href="/admin/dashboard">DashBoard</a></div>
                                    }
                                     {
                                        user.userType==="Customer"&&
                                        <div className="link2"><a href="/customer/dashboard">DashBoard</a></div>
                                    } */}
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        )

    }
}
export default Header;