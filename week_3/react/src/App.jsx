import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { forwardLines, defenseLines, goalies } from "./teamRoster";
import { wholeTeam } from "./teamRoster";
import { PlayerCard } from "./components/PlayerCard";
import "./App.css";

function App() {
   {/* build cards for the hockey team  √ */}
   {/* abstract cards to their own components:
       build a flexible and reusable component*/}
   {/* pass props and conditionally render the components */}

  return (
    <>
      <h1>Hockey Roster</h1>

      <h3>Offense</h3>
      <div>
        {/* this is one forward line. we map and make a structure that shows all 3 lines below */}
        {forwardLines[0].players.map(player => {
          return <PlayerCard player={player} />;
        })}
      </div>
      <h3>Defense hoo haha</h3>
      <div>
        {defenseLines.map(defenseLine => {
          let lines = defenseLine.players.map(player => {
            return <PlayerCard player={player}/>;
          });
          return <><h3>Line {defenseLine.line}</h3><div>{lines}</div></>;
        })}
      </div>
      <h3>Goalies</h3>
      <div>
        {goalies.map(player => {
          return <PlayerCard player={player} />;
        })}
      </div>
    </>
  );
}

export default App;
