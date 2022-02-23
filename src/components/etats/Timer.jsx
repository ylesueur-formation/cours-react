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
                    Solution: JSON.stringify(monObjet)
                */}
                <p>{this.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}


export class TimerState extends React.Component {
      constructor(props) {
        super(props);
        // Ce nom d'objet est compris par exemple
        this.state = {
            date: new Date()
        }
        this.timerId = setInterval(this.mettreAJourDate, 1000);
    }

    mettreAJourDate = () => {
        // this.state.date = new Date(); <- on ne fait jamais ca
        this.setState({
            date: new Date()
        })
        console.log(this.date);
    }

    render() {
        return (
            <div>
                <h2>Avec State</h2>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}