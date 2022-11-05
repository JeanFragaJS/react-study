import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from "@fortawesome/free-solid-svg-icons";
import "./Die.css"; 

class Die extends Component {
  constructor (props) {
    super(props);
  }



   render () {
    let faces = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];
    let isShaking = this.props.rolling ? "Die-shaking" : "";

    return <FontAwesomeIcon className={`Die ${isShaking}`} icon={faces[this.props.side]} />

   }
}

export default Die; 