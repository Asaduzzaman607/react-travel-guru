import React, { useState } from 'react';
import './Header.css'
import Logo from '../../images/Logo.png'
import fakeData from '../../fakeData/fakeData';
import { Button, Card, FormControl } from '@material-ui/core';
import { Form, Nav, Navbar } from 'react-bootstrap';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

const Header = () => {
    console.log(fakeData)

    return (
        
            <section className="header" style={{ height: '920px', width: '100%'}} >
                <div style={{ width:'80%',  margin:'auto'}}>
                <Navbar className="navbar" bg="transparent" expand="lg">
                        <Navbar.Brand href="/home"><img className="travel-logo" src={Logo} alt="travel-logo"></img></Navbar.Brand>
                        <Form inline>
                                <FormControl  style={{color: 'white'}} type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                                <Button style={{color: 'white',backgroundColor: 'transparent',border: '1px solid grey'}}>Search Your Destination</Button>
                            </Form>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                           
                            <Nav className="mr-auto title">
                            
                                
                            </Nav>
                            
                               <Nav.Link style={{color: 'white'}} href="#home">News</Nav.Link>
                                <Nav.Link style={{color: 'white'}}href="#link">Destination</Nav.Link>
                                <Nav.Link style={{color: 'white'}}href="#link">Blog</Nav.Link>
                                <Nav.Link style={{color: 'white'}} href="#link">Contact</Nav.Link>
                            <Link to="/login"><Button style={{fontWeight:'bold',backgroundColor: '#F9A51A',width: '104px',height: '44px',borderRadius: '5px',padding: '12px 29px'}}>Login</Button></Link>
                            
                            
                        </Navbar.Collapse>
                    </Navbar>
                        <div class="container">
                          <div class="row">
                            <div style={{color: 'white'}} class="col-3">
                                <h2>Cox's Bazar</h2>
                                <p>Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike. The beach gets busy from November to early March.</p>
                                <Button style={{backgroundColor: '#F9A51A',width: '150px',height: '44px',borderRadius: '5px',padding: '12px 29px'}}>Booking -></Button>
                            </div>
                         <div class="col-9">
                            {
                                fakeData.map(place=> <Home place={place} ></Home>)
                            } 

                            </div>
                      </div>
                </div>
      

                </div>
                   
            

            </section>    
      
    );
};

export default Header;