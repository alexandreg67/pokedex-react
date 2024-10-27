import React, { FunctionComponent } from "react";

const PokemonCard: FunctionComponent = () => {
  return (
    <div className="col s6 m4">
      <div className="card horizontal">
        <div className="card-image">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Bulbasaur"
          />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>Bulbasaur</p>
            <p>
              <small>Created: 2020-06-01</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
