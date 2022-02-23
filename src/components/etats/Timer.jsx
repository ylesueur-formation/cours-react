import React, { Component } from 'react';

export class Timer extends Component {
    // super(): (Heritage) Appelle le constructeur de la classe mère.
    constructor(props) {
        super(props);
        this.date = new Date();
        this.timerId = setInterval(this.mettreAJourDate, 1000);
    }

    mettreAJourDate() {
        this.date = new Date();
        console.log(this.date);
    }

    render() {
        return (
            <div>
                {/* Les accolades ne savent pas affichées des objets
                    JSON.stringify(monObjet)
                 */}
                <p>{this.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}