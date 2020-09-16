import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Header from '../Header/Header';

const Home = (props) => {

    const {key,name,description} = props.place
    console.log(props.place)

    
    return (
          <div className="row" >
               <div className="col-4">
               <h2>Name: {name}</h2>
               <p>{description}</p>
                  
               </div>
               <div className="col-8">
                  <Link to={`/booking/${key}`}><button>{name}</button> </Link>

               </div>
          </div>
        
        
    );
};

export default Home;