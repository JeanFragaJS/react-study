import  React, {Component} from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {

  pokemons ( pokemons = this.props.pokemons ) {
    if (!pokemons) return "List is not defiend" 
    else return pokemons.map((pokemon) => ( 
        <Pokecard 
          id={pokemon.id} 
          name={pokemon.name}
          type={pokemon.type}
          exp={pokemon.exp}      
        />
      ) 
    ); 
  };

  render () {
    let title, { isWinner } = this.props; 
    isWinner 
      ? title = <h1 className="Pokedex-winner"> WINNER HAND </h1>
      : title = <h1 className="Pokedex-loser"> LOSER HAND </h1>
    return (
      <div className="Pokedex">
        {title}
        <h4>Exp Total: {`${this.props.total}`}</h4>
        <div className="Pokedex-cards">
        { this.pokemons() }
        </div>
      </div>
    );
  }
}

export default Pokedex; 