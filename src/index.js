import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pokedex from "./Pokedex";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Pokedex</h1>
        <Pokedex className="App-pokedex" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
