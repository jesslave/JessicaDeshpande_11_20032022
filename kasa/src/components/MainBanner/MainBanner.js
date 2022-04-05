import React, {Component} from 'react';
import MainImg from '../../assets/homeImg.jpeg';
import './MainBanner.css';

class MainBanner extends Component {
    render() {
        return (
            <div className='banner'>
                <img src={MainImg} alt='mainImg' className="mainImg"></img>
                <div className='centeredText'>Chez vous, partout et ailleurs</div>
            </div>
        )
    }
}

export default MainBanner;