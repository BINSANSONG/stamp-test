import React, { Component } from "react";
import card from "static/card.jpg";
import Stamp from "Stamp";

export default class Stamps extends Component {
  state = {
    stampsPosition: this.props.positions || [],
    stampOnOff: false,
    stampKind: true
  };

  saveStampPosition = e => {
    const parentPosition = this.getPosition(e.currentTarget);
    const xPosition = e.clientX - parentPosition.x;
    const yPosition = e.clientY - parentPosition.y;

    this.setState({
      stampsPosition: [
        ...this.state.stampsPosition,
        {
          left: xPosition / e.currentTarget.clientWidth,
          top: yPosition / e.currentTarget.clientHeight,
          kind: this.state.stampKind
        }
      ]
    });
  };
  getPosition = el => {
    let xPos = 0;
    let yPos = 0;

    while (el) {
      if (el.tagName === "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        const yScroll = el.scrollTop || document.documentElement.scrollTop;

        xPos += el.offsetLeft - xScroll + el.clientLeft;
        yPos += el.offsetTop - yScroll + el.clientTop;
      } else {
        // for all other non-BODY elements
        xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
        yPos += el.offsetTop - el.scrollTop + el.clientTop;
      }

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  };

  stampOnOff = () => {
    this.setState({ stampOnOff: !this.state.stampOnOff });
  };

  changeStamp = () => {
    this.setState({ stampKind: !this.state.stampKind });
  };
  render() {
    return (
      <div>
        <button onClick={this.stampOnOff}>
          {this.state.stampOnOff ? "스탬프 모드 끄기" : "스탬프 모드 켜기"}
        </button>
        <button onClick={this.changeStamp}>
          {this.state.stampKind ? "스탬프1" : "스탬프2"}
        </button>

        <div
          onClick={this.state.stampOnOff ? this.saveStampPosition : undefined}
          style={{
            position: "relative",
            overflow: "hidden",
            padding: 0
          }}
          ref={el => (this.stampArea = el)}
        >
          <img
            src={card}
            alt="카드"
            style={{
              width: "100%",
              height: "auto",
              margin: 0
            }}
          />
          {this.state.stampsPosition.map(position => (
            <Stamp
              top={position.top}
              left={position.left}
              kind={position.kind}
              onOff={this.state.stampOnOff}
              parentWidth={this.stampArea.clientWidth}
              parentHeight={this.stampArea.clientHeight}
            />
          ))}
        </div>
      </div>
    );
  }
}
