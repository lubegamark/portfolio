import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/lib/fa';



export default class PowellJumbo extends Component {
    render() {

        return (
            <Jumbotron id="about"
                       style={{color: '#999', background: '#000', marginBottom: 0}}>
                <h1>Powell Photography</h1>
                <p>Hi, I'm Powell and I'm a photographer for Onduparka FC. I enjoy photography</p>
                <p><a href=""><FaFacebook/></a><FaTwitter /><FaInstagram /></p>
            </Jumbotron>
        )
    }

}