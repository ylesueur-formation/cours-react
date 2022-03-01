import React from 'react';
import axios from 'axios';

export class AxiosAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utilisateur: null
        }
    }

    onGetAxiosHandler = () => {

        axios('https://jsonplaceholder.typicode.com/users').then(
            (reponse) => {
                console.log(reponse);
                console.log(reponse.statusText);
                console.log(reponse.data);
                let utilisateurs = reponse.data; // <- tableau d'utilisateurs
                this.setState({utilisateur: utilisateurs[0] });
            }
        );
    }

    renderUtilisateur = () => {
        if (this.state.utilisateur !== null) {
            return (
                <>
                    <h2>{this.state.utilisateur.name}</h2>
                    <p>
                        {this.state.utilisateur.email} -
                        <a href={this.state.utilisateur.website}>Visiter mon site</a>
                    </p>
                </>
            )
        }
        return null;
    }

    render() {
        return (
        <>
            <button onClick={this.onGetAxiosHandler}>
                Axios GET
            </button>
            { this.renderUtilisateur() }
        </>
        )
    }
}