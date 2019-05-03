import React, { Component } from "react";
import stamp from "./stamp.png";
import stamp2 from "./stamp2.png";

class Stamp extends Component {
  render() {
    const { top, left, parentWidth, parentHeight, onOff, kind } = this.props;
    return (
      <img
        src={kind ? stamp : stamp2}
        draggable="false"
        unselectable="on"
        style={{
          width: "70px",
          height: "70px",
          position: "absolute",
          top: top * parentHeight - 35 + "px",
          left: left * parentWidth - 35 + "px",
          display: onOff ? "" : "none",
          zIndex: 1
        }}
        alt="스탬프"
      />
    );
  }
}

export default Stamp;
