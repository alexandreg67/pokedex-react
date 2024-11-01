import React, { FunctionComponent, useState } from "react";
import PokemonForm from "../components/PokemonForm";
import Pokemon from "../models/pokemon";

const PokemonAdd: FunctionComponent = () => {
  const [id] = useState<number>(new Date().getTime());
  const [pokemon] = useState<Pokemon>(new Pokemon(id));

  return (
    <div>
      <h2 className="header center">Ajouter un pokémon</h2>
      <PokemonForm pokemon={pokemon} />
    </div>
  );
};

export default PokemonAdd;
