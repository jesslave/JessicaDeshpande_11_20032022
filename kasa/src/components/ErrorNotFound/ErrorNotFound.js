import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./ErrorNotFound.css";

class Error404 extends Component {
    render() {
        return (
            <main className="error404">
                <h1 className="errorCode">404</h1>
                <h2 className="errorLabel">Oups ! La page que vous demandez n'existe pas.</h2>
                <Link className="backToMainMenuLink" to="/">Retourner sur la page d'accueil</Link>
            </main>
                );
            }
}

export default Error404;
