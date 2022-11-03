import React from "react"

export class Machine extends React.Component {
  render ()  {
    const {slot1, slot2, slot3} = this.props;
    const isWinner =  (slot1 === slot2) && (slot2 === slot3);

    return (
      <div>
        <p>{slot1} {slot2} {slot3}</p>
        <h2> { isWinner ? "Winner!" : "Loser!" } </h2>
      </div>
    ) 
  }
}