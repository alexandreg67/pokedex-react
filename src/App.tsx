import React, { FunctionComponent, useState } from "react";
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

const App: FunctionComponent = () => {
  const [pokemons] = useState<Pokemon[]>(POKEMONS);

  return (
    <div>
      <h1>Pokédex</h1>
      <p>La liste de Pokémons contient {pokemons.length}</p>
    </div>
  );
};

export default App;
