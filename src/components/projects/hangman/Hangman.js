import React, {Component} from "react";
import { v4 as uuid } from "uuid"; 
import img0 from "./images/0.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import { randomWord } from "./random-words"; 
import "./Hangman.css";

export default class Hangman extends Component {
  static defaultProps = {
    maxWrongs: 6,
    images: [ img0,img1,img2,img3, img4, img5, img6 ]
  }
  constructor (props) {
    super(props);
    this.state = {nWrong: 0, guessed: new Set(), answer: randomWord()};
    this.handleGuess = this.handleGuess.bind(this); 
    this.reset = this.reset.bind(this);
  }

  guessedWord () {
    return this.state.answer
      .split('')
      .map( ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  handleGuess (evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }))
  }

  generateButtons () {
    return "abcdefghijklmnopqrstuvwyz".split("").map(ltr => {
      return (
        <button
        key={uuid()}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        >
          {ltr}
        </button>
      )
    })
  }

  reset () {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    })
  }

  render () {
    let isGameover = this.state.nWrong >= this.props.maxWrongs;
    let isWin =  this.guessedWord().join("") === this.state.answer;
    let altText = `${this.state.nWrong}/${this.props.maxWrongs} guesses`;
    let gameState = this.generateButtons();
    if (isGameover) gameState = "YOU LOSE!";
    if (isWin) gameState = "YOU WIN!!!"



    return (      
      <div className="Hangman">
        <h1>Hangman</h1>

        <img src={this.props.images[this.state.nWrong]} alt={altText}/>
        <p>Guessed Wrong: {this.state.nWrong}</p>

        <p className="Hangman-word "> { !isGameover ? this.guessedWord() : this.state.answer } </p>
        <p className="Hangman-btns"> { gameState } </p>

        <button onClick={this.reset} id="restart-button"> Restart? </button>
      </div>
    )
  }
}