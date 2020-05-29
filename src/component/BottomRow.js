import React, { useState } from "react";




const BottomRow = props => {
  let [quarter, setQuarter] = useState(0);
  let [down, setDown]= useState(0)

  const { reset, setReset } = props;

  if (quarter <= 3) {
    quarter++;
  }
if  (down <= 3){
  down ++;
}
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
  <div className="down__value">{down}</div>
  <button className= "buttons" onClick = {() => setDown(down)}>Down</button>
  <button className=  "buttons" onClick= {() => setDown(down *0)}>Reset</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <div 
      style={{
        display:"flex",
        flexDirection: 'column',
      }}
      >
        <button
          className="homeButtons__touchdown"
          onClick={() => setQuarter(quarter)}
        >
          Quarter
        </button>
        <button
          className="homeButtons__touchdown"
          onClick={() => setQuarter(quarter * 0)}
        >
          Reset Quarter
        </button>
      </div>
    </div>
  );
};


export default BottomRow;