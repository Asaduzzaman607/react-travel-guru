import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = (props) => {

    const {key,name,description} = props.place
    console.log(props.place)
    const imagee= props.place.image

    
    return (
          <div className="place-body" >
              
                  <Link to={`/booking/${key}`}>
                  <div style={{ backgroundImage: `url(${imagee})` }} className="card">
                    <div className="container">
                      <h4><b>{name}</b></h4>
                    </div>
                    </div>   
                  </Link>

               </div>
        
        
    );
};

export default Home;