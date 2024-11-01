import React, { FunctionComponent } from "react";
import PokemonList from "./pages/PokemonList";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import PageNotFound from "./pages/PageNotFound";
import PokemonEdit from "./pages/PokemonEdit";
import PokemonAdd from "./pages/PokemonAdd";

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
          <Route path="/pokemons/add" component={PokemonAdd} />
          <Route path="/pokemons/edit/:id" component={PokemonEdit} />
          <Route path="/pokemons/:id" component={PokemonDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
