import { Route } from "react-router-dom";
import React, { Component } from "react";
import StampApp from "./StampApp";
import TemplateHTMLComponent from "./TemplateHTMLComponent";
export default class App extends Component {
  initialStamp = [0, 1, 2, 3, 4, 5, 6, 7];

  render() {
    return (
      <div>
        <Route path="/stamp" component={StampApp} />
        <Route path="/publ" component={TemplateHTMLComponent} />
      </div>
    );
  }
}
