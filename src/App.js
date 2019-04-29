import Stamp from "./Stamp";
import React, { Component } from "react";
import card from "./card.jpg";

export default class App extends Component {
  state = {
    stampsPosition: [],
    stampOnOff: false
  };
  saveStampPosition = e => {
    this.setState({
      stampsPosition: [
        ...this.state.stampsPosition,
        { top: e.pageY, left: e.pageX }
      ]
    });
  };
  stampOnOff = () => {
    this.setState({ stampOnOff: !this.state.stampOnOff });
  };
  render() {
    return (
      <div>
        <button onClick={this.stampOnOff}>
          {this.state.stampOnOff ? "스탬프 모드 끄기" : "스탬프 모드 켜기"}
        </button>
        <div
          onClick={this.state.stampOnOff ? this.saveStampPosition : undefined}
          style={{ position: "relative" }}
        >
          <img
            src={card}
            alt="카드"
            style={{
              width: "100%",
              height: "auto"
            }}
          />
          {this.state.stampsPosition.map(position => (
            <Stamp
              top={position.top}
              left={position.left}
              onOff={this.state.stampOnOff}
            />
          ))}
        </div>
      </div>
    );
  }
}
