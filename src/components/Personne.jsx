import './Personne.css';

// Un composant c'est une fonction qui vous renvoie du JSX
// props contient tous nos attributs HMTL personnalisés
export function Personne(props) {
    // let {name, salut} = props;
    console.log(props);
    console.log(props.salut);
    console.log(props.name);
    return (    
        <div>
            <p>Nom: {props.name}</p>
        </div>
    )
}  