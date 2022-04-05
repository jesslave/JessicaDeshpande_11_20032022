import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../../assets/logoMain.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <Link to='/'>
                    <img src={MainLogo} alt='mainLogo' className="mainLogo"></img>
                </Link>
                <nav className="navBarHeader">
                    <Link to="/" className="linkMenu">Accueil</Link>
                    <Link to="/about" className="linkMenu">A propos</Link> 
                </nav>
            </header>
        )
    }
}

export default Header;