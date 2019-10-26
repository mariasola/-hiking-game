import React from "react";
import Background from "./Background";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scenarioPosition: 0
    };
  }
  render() {
    const { scenarioPosition } = this.state;
    return (
      <div className="App">
        <Background position={scenarioPosition} />
      </div>
    );
  }
}

export default App;
