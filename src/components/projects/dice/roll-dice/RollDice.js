import React, {Component} from "react";
import Die from "../die/Die";
import "./RollDice.css"


class RollDice extends Component {
  constructor (props) {
    super(props);
    this.roll = this.roll.bind(this)
    this.state = { die1: 0, die2: 0, isRollling: false}
  }

  roll () {
    // randon numbers
    const newDie1 = Math.floor(Math.random() * 6);
    const newDie2 = Math.floor(Math.random() * 6);
    console.log(newDie1, newDie2) 
    // setState 
    this.setState({die1: newDie1, die2: newDie2, isRollling: true})
    // back to false 
    setTimeout(() => {
      this.setState({isRollling:false});
    }, 1000);
  }

  render () {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die side={this.state.die1} rolling={this.state.isRollling}/>
          <Die side={this.state.die2} rolling={this.state.isRollling}/>
        </div>
        <button onClick={this.roll} disabled={this.setState.isRollling}> { this.state.isRollling ? "Rolling..." : "Rolling Dice!"} </button>
      </div>
    )
  }
}

export default RollDice; 