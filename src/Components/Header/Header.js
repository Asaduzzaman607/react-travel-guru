import React, { useState } from 'react';
import './Header.css'
import Logo from '../../images/Logo.png'
import fakeData from '../../fakeData/fakeData';
import { Button, Card, FormControl } from '@material-ui/core';
import { Form, Nav, Navbar } from 'react-bootstrap';
import Home from '../Home/Home';

const Header = () => {
    console.log(fakeData)

    return (
        
            <section className="header" style={{ height: '933px', width: '100%'}} >
                    <Navbar bg="transparent"  expand="lg">
                        {/* <Navbar.Brand> <img className="img-fluid" src={Logo} alt=""/> </Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search your Destination</Button>
                            </Form>
                            </Nav>
                            <Form inline>
                            <Nav.Link href="#home">News</Nav.Link>
                            <Nav.Link href="#link">Destination</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Button variant="outline-success">Login</Button>
                            </Form>
                        </Navbar.Collapse>
                        </Navbar>
        
                            <div className='row'>
                            {
                                fakeData.map(place=> <Home place={place} ></Home>)
                            } 

                            </div>
      
            

            </section>    
      
    );
};

export default Header;