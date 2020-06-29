import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Video></Video>
        <Sidebar></Sidebar>
      </div>
    );
  }
}

export default App;
