import React from "react"

export class Looping extends React.Component {
  render ()  {
    const {name, hobbies} = this.props;
    const hobbiesList = hobbies.map(h => <li>{h}</li>)

    return (
      <div>
        <h2> {name} </h2>
        <ul>{hobbiesList}</ul>
      </div>
    ) 
  }
}