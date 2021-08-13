import React,{FunctionComponent,useState} from 'react';
import POKEMONS from './models/mock-pokemon';


//FC :signifie :function componnent 
  
const App: FunctionComponent = () => {
    const [name, setName] = useState<String>('react');
    const [pokemon, setPokemon] = useState<String>('react');
    
    return (
        <div>
            <h1>Bonjour, {name} !</h1>
            <h1>il y a , {[POKEMONS.id]} !</h1>
        </div>
    )
};
  
export default App;