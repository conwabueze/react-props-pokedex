import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pokedex from "./Pokedex";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Heyy there</h1>
        <Pokedex />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
