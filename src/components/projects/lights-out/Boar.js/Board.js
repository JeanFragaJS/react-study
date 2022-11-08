import React, {Component} from "react";
import Cell from "../Cell.js/Cell";
import "./Board.css"; 

export default class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    changeLigthStartsOn: 0.25
  }
  constructor (props) {
    super(props);
    // Set the inital State; 
    this.state = {hasWon: false, board: this.createBoard()}
  }

  createBoard () {
    let board = [];

    for (let y = 0; y < this.props.nrows; y++) {
      let row = []; 
      for (let x = 0; x < this.props.ncols; x++) {
        //Random boolean value; 
        row.push(Math.random() < this.props.changeLigthStartsOn)
      }
      board.push(row); 
    }
    return board; 
  }

  render () {

    /* ---INITAL STATE BOARD--- */
    let tableBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        // adicinar a celula na row com o valor da 
        // propriedade de acordo com os valores da matriz; 
        let booleanValue = this.state.board[y][x];
        row.push(<Cell isLit={booleanValue}/>);
      }
      tableBoard.push(<tr>{row}</tr>); 
    }
    /* ------------------------*/

    return (
      <table className="Board">
        <tbody>
          {tableBoard}
        </tbody>
      </table>
    )
  }
}