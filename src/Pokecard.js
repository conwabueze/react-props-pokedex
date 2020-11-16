import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { name, pic, type, exp } = this.props;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-name">{name}</h1>
        <img className="Pokecard-img" src={pic} alt={name} />
        <p className="Pokecard-type">{`Type: ${type}`}</p>
        <p className="Pokecard-exp">{`EXP: ${exp}`}</p>
      </div>
    );
  }
}

export default Pokecard;
