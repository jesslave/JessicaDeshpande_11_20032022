import React, {Component} from 'react';
import LogoFooter from '../../assets/logoFooter.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={LogoFooter} alt='logoFooter' className="logoFooter"></img>
                <p className="footerLabel">© 2021 Kasa. Tous droits réservés</p>
            </footer>
        )
    }
}

export default Footer;