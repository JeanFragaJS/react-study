import React, {Component} from "react";
/*
  ----- IMPORTANT -----
  The safestway to update state is to make a copy of it, and then call
  this.setState with the new copy. 
  
  This pattern is good habit to get into for React apps and
  required for using Redux. 
*/ 

class PatternExempleImmutableState extends Component {
  static defaultProps = {
    optionsName: [
      "João",
      "Maria",
      "Joaquin",
      "Jordana"
    ]
  }
  
  constructor (props) {
    super(props);
    this.state = { names: ["Jean"] };
    this.addNames = this.addNames.bind(this);
  }

  /*
  ----- MEIO INSEGURO DE SE FAZER -----
    addNames () {
    let idx = Math.floor(Math.random() * this.props.optionsName.length);
    let newName = this.props.optionsName[idx];
    console.log(newName)

    let namesList =  this.state.names;
    namesList.push(newName);

    this.setState({names: namesList})
  }
  */

  /*----- MEIO MAIS SEGURO DE SE FAZER -----*/
  addNames () {
    let idx = Math.floor(Math.random() * this.props.optionsName.length);
    let newName = this.props.optionsName[idx];
    this.setState({names: [...this.state.names, newName]})
  }
  /*
    We can use pure functions as .map, .filter, .reduce and ...spread operator to make copys
    and update the state. 
    
    this is sligth (leve, pequeno) efficency cost due (devido) the O(n) space/time required
    to make a copy, but is almost aways whorth ensure that your app doesnt extremely difficult
    to detect bugs due to mischevious(maliciosos-errado) side effects.  
  
    Funções puras são funções em que seu retorno é previsível e determinado APENAS por seus valores de entrada. 
    SEM EFEITOS COLATETAIS.   
    EX: 
    let count = 0 
    function soma (a, b) {
      count = count+1; 
      return a + b;  
    }
    Na função soma, embora o retorno seja determinado pelas entradas, a variável count está sendo modificada, 
    o que torna a função soma imupura. 

  */


  render () {
    const namesList = this.state.names.map(i => `[${i}]`);
    return (
      <div>
        <h1>Names: {namesList} </h1>
        <button onClick={this.addNames}>Add New Name!</button>
      </div>
    )
  }

}

export default PatternExempleImmutableState;
