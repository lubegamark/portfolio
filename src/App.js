import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from 'react-grid-gallery';
import PowellNav from './NavComponent';
import PowellJumbo from './JumboComponent'

import IMAGES from '../images.json'


class App extends Component {
    render() {
        return (
            <div className="App"
                 style={{
                     background: '#000',
                     paddingTop: 50
                 }}
            >
                <PowellNav />
                <Gallery
                    images={IMAGES}
                />
                <div className="clearfix"></div>
                <PowellJumbo />
            </div>
        );
    }
}

export default App;
