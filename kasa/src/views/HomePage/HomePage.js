import React, {Component} from 'react';
import MainBanner from '../../components/MainBanner/MainBanner';
import './HomePage.css';
import ApartementArticle from '../../components/ApartementArticle/ApartementArticle';
import {data} from '../../data/data';

export default class HomePage extends Component {
    render() {
        return (
            <main className='mainContent'>
                <MainBanner />
                <section className="articleApartements">
                    {data.map((apartment) => {
                        return <ApartementArticle key={apartment.id} id={apartment.id} cover={apartment.cover} title={apartment.title} />
                    })}
                </section>
            </main>
        )
    }
}

