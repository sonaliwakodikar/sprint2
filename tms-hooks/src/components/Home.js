import axios from 'axios';
import imgs19 from '../assets/imgs19.jpg'
import img1 from '../assets/img1.jpg';
import img11 from '../assets/img11.jpeg';
import imgs20 from '../assets/imgs20.jpg';
import imgs21 from '../assets/imgs8.jpg';
import img22 from '../assets/img22.jpg';
import img8 from '../assets/img8.jpg';
import imgs3 from '../assets/img1.jpg';
import imgs5 from '../assets/bgimg6.jpg';
import imgs12 from '../assets/bgimg4.jpg';
import images from '../assets/images.jpg';
import bgimg5 from '../assets/bg1.jpg';
import '../cssfiles/Header.css';
import Header from './Header';

function Home() {
    return (
        <div>
            <Header/>
            <div className='html'>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={img11} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={imgs20} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={imgs21} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <section className="details" id="details">
                    <h3 className="sub-heading"><b> our Tours </b></h3>
                    <h1 className="heading"> popular Tours </h1>
                    <div className="box-container">
                        <div className="box">
                            <a href="/BootStrapCarouse"><img src={img1} alt="" /></a>
                            <h3>Ooty</h3>
                        </div>
                        <div className="box">
                            <a href="/Firsttour"> <img src={images} alt="" /></a>
                            <h3>Latin Quarter walk In Goa</h3>
                        </div>
                        <div className="box">
                            <a href="#"><img src={img22} alt="" /></a>
                            <h3>Goa</h3>
                        </div>
                        <div className="box">
                            <a href="#"><img src={imgs12} alt="" /></a>
                            <h3>Mysore Palace</h3>
                        </div>
                        <div className="box">
                            <a href="#"><img src={bgimg5} alt="" /></a>
                            <h3>Kerala</h3>
                        </div>
                        <div className="box">
                            <a href="#"><img src={img8} alt="" /></a>
                            <h3>Jaipur</h3>
                        </div>
                    </div>
                </section>
                <section class="menu" id="menu">
                    <h3 class="sub-heading"><b>our Tours</b></h3>
                    <h1 class="heading"> today's speciality </h1>
                    <div class="box-container">
                        <div class="box">
                            <div class="image">
                                <a href="#"><img src={imgs5} alt="" /></a>
                            </div>
                            <div class="content">
                                <h3>Manali</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="image">
                                <a href="#"><img src={imgs3} alt="" /></a>
                            </div>
                            <div class="content">
                                <h3>Goa Tour</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="image">
                                <a href="#"><img src={imgs12} alt="" /></a>
                            </div>
                            <div class="content">
                                <h3>Chennai</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about" id="about">
                    <h3 className="sub-heading"> about us </h3>
                    <h1 className="heading"> why choose us? </h1>
                    <div className="row">
                        <div className="image">
                            <img src={imgs19} alt="" />
                        </div>
                        <div className="content">
                            <h3>best Tour in the country</h3>
                            <p>Tours in India offers incredible tour packages covering the Himalayas to Kanyakumari and from Mumbai to Kolkata, giving you a taste of the diversity of India. We let you build your own tour packages including popular destinations, be it the Taj Mahal, Qutab Minar, Fortress of Jaipur, Udaipur, the architectural wonders of Tanjore, Mahabalipuram or the Sree Padmanabha Temple of Trivandrum, Kerala.</p>
                            <br></br>
                            <div className="icons-container">
                                <div className="icons">
                                    <i className="fas fa-bus"></i>
                                    <span>Safe travellig</span>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-rupee-sign"></i>
                                    <span>easy payments</span>
                                </div>
                                <div className="icons">
                                    <i className="fas fa-headset"></i>
                                    <span>24/7 service</span>
                                </div>
                            </div>
                            <a href="#" className="btn">learn more</a>
                        </div>
                    </div>
                </section>
                <section className="footer" style={{ background: "#192a56" }} id="contact">
                    <center>
                        <div className="box-container">
                            <div className="box">
                                <h3>contact info</h3>
                                <a href="#">+91-2345678902</a>
                                <a href="#">+222-666-2345</a>
                                <a href="#"> sonawakodikar@gmail.com</a>
                                <a href="#">umamaheshvari@gmail.com</a>
                                <a href="#">Naga@gmail.com</a>
                                <a href="#"> darshini@gmail.com</a>
                                <a href="#">chandrika@gmail.com</a>
                                <a href="#">bangalore, india - 560066</a>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="box1">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="credit"> copyright @ 2023 by <span>Group 5</span> </div>
                    </center>
                </section>
            </div>
        </div>
    )
}
export default Home;
