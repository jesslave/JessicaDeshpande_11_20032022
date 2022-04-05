import React, {Component} from 'react';
import Collapsible from '../../components/Collapsible/Collapsible';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import './AboutPage.css';

export default class AboutPage extends Component {
    render() {
        return (
            <main className='aboutContent'>
                <AboutBanner></AboutBanner>
                <Collapsible title='Fiabilité' text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'>
                </Collapsible>
                <Collapsible title='Respect' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'>
                </Collapsible>
                <Collapsible title='Service' text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.">
                </Collapsible>
                <Collapsible title='Sécurité' text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.">
                </Collapsible>
            </main>
        )
    }
}

