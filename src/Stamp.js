import React, { Component } from "react";
import stamp from "./stamp.png";

class Stamp extends Component {
  render() {
    const { top, left, onOff } = this.props;
    return (
      <img
        src={stamp}
        draggable="false"
        unselectable="on"
        style={{
          width: "70px",
          height: "70px",
          position: "absolute",
          top: top - 35 + "px",
          left: left - 35 + "px",
          display: onOff ? "" : "none"
        }}
        alt="스탬프"
      />
    );
  }
}

export default Stamp;
