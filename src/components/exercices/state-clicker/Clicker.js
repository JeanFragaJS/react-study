import  React, {Component} from "react";

class Clicker extends Component {
  constructor (props) {
    super(props);
    this.state = { number:  0}
    this.randonNum = this.randonNum.bind(this); 
  }

  randonNum () {
    // randon number
    let num = Math.floor(Math.random() * 10) + 1;
    // setState to randon num
    this.setState({ number: num })
  }

  

  render () {
    let isWinner = this.state.number === 7 && <h1>WINNER !!!</h1>;
    /*
      ---Option 1---
      this.state.number === 7 && <h1>WINNER !!!</h1>
      this.state.number !== 7 && <button onClick={this.randonNum} > Set Number </button>

      ---Option 2---
      this.state.number === 7 ? <h1>WINNER !!!</h1> : <button onClick={this.randonNum} > Set Number </button>;
      
      ---Option 3---
      if(this.state.number === 7) <h1>WINNER !!!</h1>;
      else <button onClick={this.randonNum} > Set Number </button>; 

    */
    return (
      <div>
        <h1>Clicker</h1>
        <h3> Number is: {this.state.number} </h3>
        {isWinner}
        <button onClick={this.randonNum} > Set Number </button>
      </div>
    )
  }
}

export default Clicker;