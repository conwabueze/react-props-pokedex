import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pokecard from "./Pokecard";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Heyy there</h1>
        <Pokecard
          name="Eevee"
          pic="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          type="normal"
          exp="65"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
