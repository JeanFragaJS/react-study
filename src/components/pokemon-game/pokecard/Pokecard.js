import React, {Component} from "react";
import "./Pokecard.css"

 let padToThree = (number) => number <= 999 ? `00${number}`.slice(-3) : number ; // 100 => 00100 => 100; 

class Pokecard extends Component {
  constructor () {
    super()
    this.POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
  }
  render () {
    let imgSrc = `${this.POKE_API}${padToThree(this.props.id)}.png`; 
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
        <img src={imgSrc} alt={this.props.name} style={{"width":"75%"}}/>
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard; 