import React, { Component } from "react";
import SkeletonArcAd from "./default";

class AmpAd extends Component {
  render() {
    return <SkeletonArcAd isAmp={true} {...this.props} />;
  }
}

export default AmpAd;
