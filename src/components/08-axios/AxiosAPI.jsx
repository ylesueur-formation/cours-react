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
                <div class="card">
                    <div class="card-header">
                        Personne
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{this.state.utilisateur.name}</h5>
                        <p class="card-text">{this.state.utilisateur.email}</p>
                        <a href={this.state.utilisateur.website} class="btn btn-primary">Visiter mon site</a>
                    </div>
                </div>
            )
        }
        return null;
    }

    render() {
        return (
        <>
            <button onClick={this.onGetAxiosHandler} class="btn btn-dark m-3">
                Axios GET
            </button>
            { this.renderUtilisateur() }
        </>
        )
    }
}