import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HotelDetails.css'
import room1 from '../../images/location/room1.png';
import room2 from '../../images/location/room2.png';
import room3 from '../../images/location/room3.png';
import Map from '../Map/Map';
import star from '../../images/Icon/star_1_.png'

const HotelDetails = () => {
    return (
        <section style={{height: '920px', width: '100%' }}>
             <div style={{ width:'80%',  margin:'auto'}}>
             <NavBar></NavBar>
            <hr></hr>
            <div className="row book-room">
                <div className="col-6">
                <h1>Book a Room</h1>
                <div className="row room-details">
                    <div className="col-6"> <img className="img-fluid room" src={room1} alt='hotel-room'></img> </div>
                    <div className="col-6"> <div className="book-room-details">
                    <p>4 Guests 2 Bedrooms 2 Beds 2 Baths</p>
                    <p>Wi-fi Air Conditioned Kitchen</p>
                    <p>Cancellation Flexibility Available</p>
                    <p><img src={star} alt='star'></img> 4.9(20) | $34/night</p>
                    </div> </div>
                </div>
                <div className="row room-details">
                    <div className="col-6"> <img className="img-fluid room" src={room2} alt='hotel-room'></img> </div>
                    <div className="col-6"> <div className="book-room-details">
                    <p>3 Guests 2 Bedrooms 2 Beds 2 Baths</p>
                    <p>Wi-fi Air Conditioned Kitchen</p>
                    <p>Cancellation Flexibility Available</p>
                    <p><img src={star} alt='star'></img> 4.9(20) | $34/night</p>
                    </div></div>
                </div>
                <div className="row room-details">
                    <div className="col-6"> <img className="img-fluid room" src={room3} alt='hotel-room'></img> </div>
                    <div className="col-6"><div className="book-room-details">
                    <p>2 Guests 1 Bedrooms 2 Beds 2 Baths</p>
                    <p>Wi-fi Air Conditioned Kitchen</p>
                    <p>Cancellation Flexibility Available</p>
                    <p><img src={star} alt='star'></img> 4.9(20) | $34/night</p>
                    </div> </div>
                </div>
                </div>
                <div className="col-6">
                <Map></Map>
                </div>
                
                
            </div>

             </div>
           
            
        </section>
    );
};

export default HotelDetails;