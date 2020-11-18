import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  zeroPadding(id) {
    let newId = id + "";
    if (newId.length === 1) newId = "00" + newId;
    else if (newId.length === 2) newId = "0" + newId;
    return newId;
  }

  render() {
    const winnerDiv = <div className="Pokedex-winner">WE HAVE A WINNER</div>;
    return (
      <div className="Pokedex">
        <div className="Pokedex-cards">
          {this.props.pokemons.map((pokemon) => {
            return (
              <Pokecard
                key={pokemon.id}
                id={this.zeroPadding(pokemon.id)}
                name={pokemon.name}
                type={pokemon.type}
                base_experience={pokemon.base_experience}
              />
            );
          })}
        </div>
        {this.props.isWinner ? winnerDiv : ""}
      </div>
    );
  }
}

export default Pokedex;
