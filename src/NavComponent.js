import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

export default class PowellNav extends Component {
    render() {

        return (

            <Navbar
                inverse
                collapseOnSelect
                style={{opacity: 0.9, borderRadius: 0, background: '#000', marginBottom: 0}}
                fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Powell Photography</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <li><a href="#Gallery">Gallery</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}