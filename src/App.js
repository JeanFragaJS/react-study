//import { DefaultProps, Machine, Looping } from "./components/others";
//import {Pokegame} from "./components/pokemon-game";
//import Clicker from "../src/components/state-clicker/Clicker";
//import RollDice from "./components/dice/roll-dice/RollDice";
//import Score from "./components/exercices/update-state/Score";
//import PatternExempleImmutableState from "./components/exercices/patterns/immutable-state-update";
import Lotto from "./components/projects/lottery/loto/Lotto";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Lotto/>
      <Lotto title="Lotto-Day" maxNum={10} maxBalls={3}/>
    </div>
  );
}

export default App;

