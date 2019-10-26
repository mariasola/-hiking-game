import React from "react";
import Background from "./Background";
import Player from "./Player";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      positionX: 0,
      positionY: 0,
      scenarioPosition: 0,
      direction: "ltr",
      isMoving: false,
      isJumping: false
    };
  }
  render() {
    const {
      scenarioPosition,
      positionX,
      positionY,
      isMoving,
      isJumping,
      direction
    } = this.state;
    return (
      <div className="App">
        <Background position={scenarioPosition} />
        <Player
          positionX={positionX}
          positionY={positionY}
          direction={direction}
          isMoving={isMoving}
          isJumping={isJumping}
        />
      </div>
    );
  }
}

export default App;
