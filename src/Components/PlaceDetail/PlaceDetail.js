import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import TimePicker from '../TimePicker/TimePicker';


const PlaceDetail = () => {

    const {placeId} = useParams()
   
    // console.log(fakeData)

    const [selectedPlaces,setSelectedPlaces]=useState({})
    const {name, description}=selectedPlaces

    useEffect(()=>{
        const filteredPlace = fakeData.find(place => place.key == placeId )
        setSelectedPlaces(filteredPlace);
        console.log(filteredPlace)

    },[placeId])

    
   


    return (

        <div className="container">
             <Row>
                <Col xs={6} md={4}>
                <h2>{name}</h2>
                    <p>{description}</p>
                </Col>
                <Col xs={12} md={8}>
        
                <TimePicker></TimePicker>
                </Col>
            </Row>
            

        </div>
    );
};

export default PlaceDetail;