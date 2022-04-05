import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./ApartementArticle.css";

class ApartementArticle extends Component {
    render() {
        return (
            <article>
                <Link to={`apartment/${this.props.id}`} className='articleApartement'>
                    <img src={this.props.cover} alt={this.props.title} />
                    <h2>{this.props.title}</h2>
                    <div className='darkerDiv'></div>
                </Link>
            </article>
        )
    }
}

export default ApartementArticle;