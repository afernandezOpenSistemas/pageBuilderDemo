import React, { Component } from "react";
import Consumer from "fusion:consumer";
import { generateKeyPair } from "crypto";

@Consumer
class MenuContent extends Component {
  render() {
    return (
      <div className="masthead" style={{ position: "absolute", left:"70px", height:400, width: 700, backgroundColor:"gray", zIndex:2000 }}>
        <span>MenuContent</span>
      </div>
    );
  }
}

export default MenuContent;

