import React, {Component} from 'react';
import AboutImg from '../../assets/aboutImg.jpeg';
import './AboutBanner.css';

class AboutBanner extends Component {
    render() {
        return (
            <div>
                <img src={AboutImg} alt='aboutImg' className="aboutImg"></img>
            </div>
        )
    }
}

export default AboutBanner;