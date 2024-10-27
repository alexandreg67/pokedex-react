import React, { FunctionComponent } from "react";
import PokemonList from "./pages/PokemonList";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route path="/pokemons/:id" component={PokemonDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
