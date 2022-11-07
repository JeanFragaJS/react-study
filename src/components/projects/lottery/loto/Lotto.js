import React, {Component} from "react";
import Ball from "../ball/Ball";
import "./Lotto.css";

/*
  Lotto será o componente Pai que terá algumas propriedades default
  e chamará a propriedade filho Ball; 
  componente que centralizará o state e o evento;  
*/

class Lotto extends Component {
  
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40
  }

  constructor (props) {
    super(props);
    this.state = {
      nums: Array.from({length: this.props.maxBalls}) 
    }
    this.handleClick =  this.handleClick.bind(this);
  }

  generate () {
    this.setState( (currentState) => ({
      nums: currentState.nums.map( 
          n => Math.floor(Math.random()* this.props.maxNum) + 1
        )
      })
    );
  };

  handleClick () {
    this.generate(); 
  }
  render () {
    return (
      <section className="Lotto">
        <h1>{this.props.title}</h1>
        <div>
        {this.state.nums.map((n) => <Ball num={n}/>)}
        </div>
        <button onClick={this.handleClick}>Drop Balls</button>
      </section>  
    )
    
  }
}

export default Lotto; 