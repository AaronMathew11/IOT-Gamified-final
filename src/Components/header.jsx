import React from "react";
import "../Styling/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav } from 'react-bootstrap';  
import logo from '../Images/logonew.png'

export default function header()
{
    const customFontStyle = {
        fontFamily: 'Pixeloid Sans', 
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="transparent-navbar">
                <Container>
                    <Navbar.Brand><img src={logo} alt="iothinc-logo" id="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <ul className="navbar-nav">
                            <li className="nav-item active"><a className="nav-link" href="home" style={customFontStyle}>HOME</a></li>
                            <li className="nav-item"><a className="nav-link" href="timeLine" style={customFontStyle}>TIMELINE</a></li>
                            <li className="nav-item"><a className="nav-link" href="team" style={customFontStyle}>OUR TEAM</a></li>
                            <li className="nav-item"><a className="nav-link" href="faq" style={customFontStyle}>FAQ</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact" style={customFontStyle}>CONTACT US</a></li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}