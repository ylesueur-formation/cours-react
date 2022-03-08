// import {  TimerHook } from './components/02-etats/Timer';
import { Personnage, PersonnageAvecProps, Personne } from './components/01-composant/Personne';
import { Event, EventClasse } from './components/03-events/Event';
import { Promesse } from './components/07-promesse/Promesse';
// import { Reference } from './components/04-references/Ref';
// import { Desctructuration } from './components/05-destructuration/Destructuration';
import { Liste } from './components/06-liste/Liste';
import { Routes, Route } from "react-router-dom";

import { AxiosAPI } from "./components/08-axios/AxiosAPI";
import { CycleDeVie } from "./components/09-cycle-de-vie/CycleDeVie";
import Test from './components/Test';

export default function App() {
  const name = "Salut";
  return (
      // Le JSX ne doit avoir qu'une seule balise racine
      <div>
          {/* <p>Global</p>
          <h1>Bonjour, monde !</h1>
          <ul>
              <li>Exemple</li>
              <li id="salut" class="salut">Salut</li>
          </ul>
          <Personne name="Jean" salut="toto"/>
          <br/>
          <Personne name="Ella" salut="tata"/>
          <Personnage />
          <PersonnageAvecProps name="toto" /> */}
          {/* <Timer />
          <TimerState /> */}
          {/* <h2>Timer avec Hook</h2>
          <TimerHook /> */}
          {/* <EventClasse /> */}
          {/* <h2>Event avec Hook</h2> */}
          {/* <Event/> */}
          {/* <Reference/>
          <Desctructuration/> */}
          {/* <Liste /> */}
          {/* <Promesse/> */}
          {/* <AxiosAPI /> */}
          <Routes>
              <Route path="/" element={<Liste />}/>
              <Route path="/promesse" element={<Promesse />}/>
              <Route path="/event-class" element={<EventClasse />}/>
              <Route path="/personnage" element={<Personne name="Jean" salut="toto"/>}/>
              <Route path="/personnage-render" element={<Personne name={name} salut="toto"/> }/>
          </Routes>
      </div>
  )
}