import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Pokegame</h1>
        <Pokegame />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
