import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';


const PlaceDetail = () => {

    const {placeId} = useParams()
   
    console.log(fakeData)

    // const [selectedPlaces,setSelectedPlaces]=useState({})
    // const {name, description}=selectedPlaces

    // useEffect(()=>{
        const filteredPlace = fakeData.filter(place => parseInt(place.key) === parseInt(placeId) )
        // setSelectedPlaces(filteredPlace);
        console.log(filteredPlace)

    // },[])


    return (
        <div className="detail-info">
            <div className="location-info">
                  <h2>{filteredPlace[0].name}</h2>
                    <p>{filteredPlace[0].description}</p>

            </div>
            <div className='date-info'>

            </div>
            
        </div>
    );
};

export default PlaceDetail;