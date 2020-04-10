import React, { useState } from "react";
// import {Timer} from "./Timer";


let TopRow = props => {
  const { team1, team2 } = useState( props);
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Giants</h2>

        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

        <div className="home__score">{team1}</div>
      </div>
      <div className="timer">00:25</div>
      <div className="away">
        <h2 className="away__name">Lions</h2>
        <div className="away__score">{team2}</div>
      </div>
    </div>
  );
};

export default TopRow;
