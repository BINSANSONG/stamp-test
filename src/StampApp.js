import Stamps from "./Stamps";
import React, { Component } from "react";

export default class App extends Component {
  initialStamp = [0, 1, 2, 3, 4, 5, 6, 7];

  render() {
    return (
      <div>
        {this.initialStamp.map(() => (
          <Stamps />
        ))}
      </div>
    );
  }
}
