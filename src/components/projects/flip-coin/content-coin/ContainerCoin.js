import React, {Component} from "react";
import Coin from "../coin/Coin";
import { choice } from "./helpers";

export default class ContainerCoin extends Component {
  static defaultProps = {
    coins: [
      {side: "head", imgSrc: "https://www.cryptoverse.gr/wp-content/uploads/2021/08/Bitcoin-btc-coin-Souvenir.png"},
      {side: "tail", imgSrc: "https://www.cryptoverse.gr/wp-content/uploads/2021/08/Bitcoin-btc-coin-back-Souvenir.png"}
    ]
  }
  constructor (props) {
    super(props);
    this.state = {
      currCoin: null, 
      nFlip: 0,
      nHead: 0,
      nTail: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin () {
    let newCoin = choice(this.props.coins); 
    this.setState( (st) => {
      return {
        ...st,
        currCoin: newCoin,
        nFlip: st.nFlip + 1,
        nHead: st.nHead + (newCoin.side === "head" ? 1 : 0),
        nTail: st.nTail + (newCoin.side === "tail" ? 1 : 0)
      }
    });
  }

  handleClick () {
    this.flipCoin(); 
  }

  render () {
    return (
      <div className="ContentCoin">
        <h1>Lets Flip a Coin</h1>
       { this.state.currCoin && <Coin info={this.state.currCoin}/>}
        <p>Out of {this.state.nFlip} Flips, there have been {this.state.nHead} Head, and {this.state.nTail} Tails.</p>
        <button onClick={this.handleClick}>Flip Me!</button>
      </div>
    )
  }
}