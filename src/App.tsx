import React,{FunctionComponent} from 'react';
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-details';
import PokemonEdit from './pages/pokemon-edit';
import PokemonList from './pages/pokemon-list';



//FC :signifie :function componnent 
  
const App: FunctionComponent = () => {
  
  return (
      
    <Router>
      <div>
        {/*la barre de navigation commun a tout le sutilisateurs*/}
        <nav>
          <div className="nav-wrappper teal">
            <Link to="/" className="brand-logo center">Pokedex</Link>
          </div>
        </nav>
        <Switch>     
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
          <Route  path="/pokemons/:id" component={PokemonsDetail} />
        </Switch>
      </div>
    </Router>
   
  )
};
export default App;