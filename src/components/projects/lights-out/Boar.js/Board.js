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
    this.state = { hasWon: false, board: this.createBoard() }
    this.flipCellsAroundMe =  this.flipCellsAroundMe.bind(this); 
  }

  flipCellsAroundMe (coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board; 
    let [y,x] = coord.split("-").map(Number); 

    function flipCell (y, x) {
        const isInsideTheGrid = y >= 0 && y < ncols && x >= 0 && x < nrows
        if (!isInsideTheGrid) return; 
        board[y][x] = !board[y][x];
    }

  
  flipCell(y,x);
  flipCell(y, x - 1); //flip left
  flipCell(y, x + 1); //flip right
  flipCell(y - 1, x); //flip below
  flipCell(y + 1, x); //flip above

  // check if the all cells are false; 
  // if true we got winner. 
  let hasWon = board.every(row => row.every(cell => !cell));


  this.setState({board, hasWon})
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
    /* ---HAS WON --- */
    if (this.state.hasWon) {
    return (
    <div className="winner">
      <span className='neon-orange'>You</span>
      <span className="neon-blue">Win!!!</span>
    </div>
    )
    }

    /* ---INITAL STATE BOARD--- */
    let tableBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        // adicinar a celula na row com o valor da 
        // propriedade de acordo com os valores da matriz; 
        let coord = `${y}-${x}`
        let booleanValue = this.state.board[y][x];
        row.push(<Cell 
          key={coord} 
          isLit={booleanValue}
          flipCellsAroundMe ={ this.flipCellsAroundMe }
          coord={coord}
          />);
      }
      tableBoard.push(<tr key={y}>{row}</tr>); 
    }
    /* ------------------------*/

    return (
      <div>
        <div className="Board-title">
          <div className='neon-orange'>Lights</div>
          <div className="neon-blue">Out</div>
        </div>

        <table className="Board-table">
          <tbody>
            { tableBoard }
          </tbody>
        </table>

      </div>
    )
  }
}