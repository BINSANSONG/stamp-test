import React, { Component } from "react";
import htmlFile from "./public/test.html";
export default class TemplateHTMLComponent extends Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: htmlFile }} />;
  }
}
