import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemonCards: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  shuffle(cards) {
    let ctr = cards.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = cards[ctr];
      cards[ctr] = cards[index];
      cards[index] = temp;
    }
  }

  startGame(cards) {
    //shuffle cards
    this.shuffle(cards);

    let gameData = {
      hand1: [],
      hand2: [],
      hand1TotExp: 0,
      hand2TotExp: 0,
    };

    //loop through cards and create hands and caculate total exp
    for (let x = 0; x < cards.length; x++) {
      if (x <= 3) {
        gameData.hand1.push(cards[x]);
        gameData.hand1TotExp = gameData.hand1TotExp + cards[x].base_experience;
      } else {
        gameData.hand2.push(cards[x]);
        gameData.hand2TotExp = gameData.hand2TotExp + cards[x].base_experience;
      }
    }
    return gameData;
  }

  render() {
    const { hand1, hand2, hand1TotExp, hand2TotExp } = this.startGame(
      this.props.pokemonCards
    );
    let hand1Render, hand2Render;
    if (hand1TotExp > hand2TotExp) {
      hand1Render = <Pokedex pokemons={hand1} isWinner />;
      hand2Render = <Pokedex pokemons={hand2} />;
    } else {
      hand1Render = <Pokedex pokemons={hand1} />;
      hand2Render = <Pokedex pokemons={hand2} isWinner />;
    }

    return (
      <div>
        {hand1Render}
        {hand2Render}
      </div>
    );
  }
}
export default Pokegame;
