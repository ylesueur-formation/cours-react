import React, { useState } from "react";

function afficherHeure() {
    console.log("Heure: ", new Date().toLocaleTimeString());
}

function getRandomPrenom(tableau) {
    let nombreRandom = Math.random() * (tableau.length - 1); // nombre entre 0 et 1;
    let nombreRandomInt = Math.round(nombreRandom);
    return tableau[nombreRandomInt]
}

export function Event() {
    const prenoms = ["Marie", "Paul", "Sarah"];
    let randomPrenom = getRandomPrenom(prenoms);
    const state = useState(randomPrenom);
    // const state = useState("Sarah");
    const prenom = state[0];
    const setPrenom = state[1];

    return (
        // C'est une balise container qui ne sera remplacé par rien du tout dans le HTML
        <React.Fragment>
            <button onClick={afficherHeure}>
                Cliquez ici !
            </button>
            <h2>Changer Prenom: {prenom}</h2>
            <button onClick={() => { 
                let prenom = getRandomPrenom(prenoms)
                setPrenom(prenom)
            } }>
                Changer de prénom
            </button>
        </React.Fragment>
    );
}