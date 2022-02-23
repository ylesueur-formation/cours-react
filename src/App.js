import { Timer } from './components/etats/Timer';
import { Personnage, PersonnageAvecProps, Personne } from './components/Personne';

export default function App() {
  return (
      // Le JSX ne doit avoir qu'une seule balise racine
      <div>
          <p>Global</p>
          <h1>Bonjour, monde !</h1>
          <ul>
              <li>Exemple</li>
              <li id="salut" class="salut">Salut</li>
          </ul>
          <Personne name="Jean" salut="toto"/>
          <br/>
          <Personne name="Ella" salut="tata"/>
          <Personnage />
          <PersonnageAvecProps name="toto" />
          <Timer />
      </div>
  )
}