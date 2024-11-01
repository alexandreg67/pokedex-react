import React, { FunctionComponent } from "react";
import PokemonList from "./pages/PokemonList";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import PageNotFound from "./pages/PageNotFound";
import PokemonEdit from "./pages/PokemonEdit";
import PokemonAdd from "./pages/PokemonAdd";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";

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
          <PrivateRoute exact path="/" component={PokemonList} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/pokemons" component={PokemonList} />
          <PrivateRoute exact path="/pokemons/add" component={PokemonAdd} />
          <PrivateRoute
            exact
            path="/pokemons/edit/:id"
            component={PokemonEdit}
          />
          <PrivateRoute exact path="/pokemons/:id" component={PokemonDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
