import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../assets/bgimg2.jpg';
import imgs3 from '../assets/bgimg4.jpg';
import imgs5 from '../assets/bgimg6.jpg';
import ooty1 from '../assets/ooty1.jpg';
import ooty2 from '../assets/ooty2.jpg';
import ooty3 from '../assets/ooty3.jpg';
import Header from './Header';

function BoostrapCarouse() {
  return (
      <div className='m'>
        <Header/>
        <Carousel>
      <Carousel.Item className='manage' >
        <img
          className="d-block w-100" 
          src={ooty1}
          alt="Ooty Lake" height={"400px"} width={"100%"}
        />
        <Carousel.Caption>
          <h3>Ooty Lake</h3>
          <p> Ooty lake is indeed a place to visit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='manage'>
        <img
          className="d-block w-100" 
          src={ooty2}
          alt="Second slide" height={"400px"} width={"100%"}
        />
{/* interval={500} */}
        <Carousel.Caption>
          <h3>Ooty Botanical Gardens</h3>
          <p>Botanical Gardens of Ooty is undeniably one of the most popular places to see in Ooty.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='manage'>
        <img
          className="d-block w-100"
          src={ooty3}
          alt="Ooty" height={"400px"} width={"100%"}
        />
        <Carousel.Caption>
          <h3>Ooty</h3>
          <p> 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="content">
<br></br>
    <h1><u><b>Ooty (Udhagamandalam)</b></u></h1>  
    <br></br>
    <i class="fas fa-map-marker-alt">Avalanche Lake - Ooty Lake - Emerald Lake - Ooty Botanical Gardens</i>
    <br></br>
    <br></br> <h3><b>price:</b><i class="fa fa-rupee-sign">12000</i></h3> 
    <br></br>
<p>Popularly referred to as Ooty, this gem among southern hill resorts is covered in eucalyptus and pine trees and coffee and tea plantations. On a clear day, it's possible to see as far as the Mysore plateau from Dodabetta Peak, the district's most prominent viewpoint. The Stone House, a landmark 1822 bungalow, and St. Stephen's Church are remnants of the area's first British settlement. Also noteworthy: formal botanical gardens, a children's mini-garden and a contemporary art collection.</p>
    <p>With plenty of parks, museums and lakes around, you will need ample time to soak in the views. So, if you want to enjoy a leisure holiday in Ooty, you will have to set aside 3-4 days. Checkout our all-inclusive Ooty tour packages for a memorable trip. You can visit the most popular tourist spots in 1-2 days. If you plan to be there for a weekend, or looking for a time-efficient trip to Ooty check these 1 day trips in and around Ooty.</p>      
    <a href="#" class="btn">Check Availability</a>
           </div>
    </div> 
  )
}
export default BoostrapCarouse;
