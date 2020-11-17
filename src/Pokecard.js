import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-name">{name}</h1>
        <img className="Pokecard-img" src={imgUrl} alt={name} />
        <p className="Pokecard-type">{`Type: ${type}`}</p>
        <p className="Pokecard-exp">{`EXP: ${base_experience}`}</p>
      </div>
    );
  }
}

export default Pokecard;
