import React, { FunctionComponent } from "react";
import Pokemon from "../models/pokemon";

type PokemonProps = {
  pokemon: Pokemon;
};

const PokemonCard: FunctionComponent<PokemonProps> = ({ pokemon }) => {
  return (
    <div className="col s6 m4">
      ce composant est chargé d'afficher les informations du pokemon :{" "}
      {pokemon.name}
    </div>
  );
};
