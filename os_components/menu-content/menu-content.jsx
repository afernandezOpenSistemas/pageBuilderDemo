import React, { Component } from "react";
import Consumer from "fusion:consumer";
import "./menu-content.scss";


@Consumer
class MenuContent extends Component {
  render() {
    return (
      <div className="menu-example">
        <span>MenuContent</span>
      </div>
    );
  }
}

export default MenuContent;

