import React, {Component} from "react";

class Score extends Component {
  constructor () {
    super();
    this.state = {count: 0};
    this.tripleKill = this.tripleKill.bind(this);
    this.singleKill = this.singleKill.bind(this);
  }

  incrementScoreInthree (currentState) {
    return {count: currentState.count + 3}
  }

  incrementScoreInOne (currentState) { 
    return {count: currentState.count + 1}
  }


  tripleKill () {
    this.setState(this.incrementScoreInthree);
  }

  singleKill () {
    this.setState(this.incrementScoreInOne);
  }

  render () {
    return (
      <div>
        <h1> Score is: {this.state.count}</h1>
        <button onClick={this.tripleKill}>TripleKill</button>
        <button onClick={this.singleKill}>SingleKill</button>

      </div>
    )
  }
}

export default Score;