import React, {Component} from "react";
import "./Cell.css"

export default class Cell extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (evt) {
    this.props.flipCellaroundMe();
  }

  render () {
    let classes = "Cell" + (this.props.isLit ? "Cell-lit" : "" ); 
    return  <td className={classes}></td>
  }
}