import img1 from '../assets/img1.jpg';
import images1 from '../assets/images1.jpg';
import Header from './Header';
function Firsttour() {
    return (<div>
        <Header/>
        <center>
            <div className='d'>
                <img src={images1} alt="" />
            </div>
        </center>
        <div className="content">
            <br></br>

            <h1><u><b>Latin Quarter walk In Goa</b></u></h1>
            <br></br>
            <i class="fas fa-map-marker-alt">  Panjim Goa</i>
            <br></br>
            <br></br>
            <i class="far fa-calendar-alt">  17 Jan, 18 Jan, 18 Jan, and more</i>
            <br></br>
            <br></br> <h3><b>price:</b><i class="fa fa-rupee-sign">12000</i></h3>
            <br></br>
            <p>From the times of tobacco trade to the minting of coins and the final administrative center of the Portuguese, Panjim has seen it all. With a special focus on the Fontainhas area, we discover the Making of Panaji. We learn how ‘Nova Goa’ developed as the new capital city after Old Goa crumbled down with the disease. We listen to stories about The Adilshah Palace, Our Lady of Immaculate Conception Church, St Sebastian Chapel, the narrow lanes bearing hallmarks of the long Portuguese regime in Goa. In addition, we will visit one of the first houses in this area and join the owner as he shows you around. </p>
            <p>Latin Old Quarter in Panjim, Goa reflects the Portuguese style of architecture and its influence over the various aspects of the location, which is worth to visit. The location implies blazing narrow streets and winding atmosphere along with cheerful crowds in the markets, the concrete structures with balconies painted in the common tones of yellow, green, or blue, and roofs made of red coloured tiles, collectively compel the explorers to visit the location again and again.</p>
            <a href="#" class="btn">Check Availability</a>
        </div>
    </div>
    )
}
export default Firsttour;