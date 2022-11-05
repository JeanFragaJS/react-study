import React, { Component } from "react";
import Pokedex from "../pokedex/Pokedex";
import "./Pokegame.css"

export class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      {id: 136, name: 'Flareon', type: 'fire', exp: 95},
      {id: 151, name: 'Mew', type: 'psychic', exp: 115},
      {id: 92, name: 'Gastly', type: 'ghost', exp: 72},
      {id: 12, name: 'Butterfree', type: 'flying', exp: 78},
      {id: 249, name: 'Lugia', type: 'psychic', exp: 112},
      {id: 55, name: 'Golduck', type: 'water', exp: 93},
      {id: 94, name: 'Gengar', type: 'poison', exp: 25},
      {id: 133, name: 'Eevee', type: 'normal', exp: 65},
    ]
  }
  render () {
    let hand1 = [];
    let hand2 = [...this.props.pokemons];
    while (hand1.length < hand2.length) {
      let randInx = Math.floor(Math.random() * hand2.length);
      let randPokemon =  hand2.splice(randInx, 1)[0];
      hand1.push(randPokemon);
    }

    let total1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    let total2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    
    return (
      <div className="Pokegame">
      <h1>Pokegame!</h1>
        <Pokedex pokemons={hand1} total={total1} isWinner={ total1 > total2 }/>
        <Pokedex pokemons={hand2} total={total2} isWinner={ total2 > total1 }/>
      </div>
    )
  }
}
 