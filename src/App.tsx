import React, { FunctionComponent } from "react";
import PokemonList from "./pages/PokemonList";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import PageNotFound from "./pages/PageNotFound";
import PokemonEdit from "./pages/PokemonEdit";
import PokemonAdd from "./pages/PokemonAdd";
import Login from "./pages/Login";

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
          <Route exact path="/login" component={Login} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/pokemons/add" component={PokemonAdd} />
          <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
          <Route exact path="/pokemons/:id" component={PokemonDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
