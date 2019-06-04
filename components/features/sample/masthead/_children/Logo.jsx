import React, { Component } from "react";
import PropTypes from "fusion:prop-types";
import { AmpImage } from "@arc-core-components/element_image";
import getProperties from "fusion:properties";

class Logo extends Component {
  render() {
    const { deployment, isAmp, arcSite = "base" } = this.props;

    const imageUrl = `/pf/resources/images/${arcSite}/logos/logo.svg?d=${deployment}`;

    const { logoSettings = {} } = getProperties(arcSite);
    const { height = 40, width = 40 } = logoSettings;

    const imageProps = {
      url: imageUrl,
      className: "visual__image"
    };

    const ampImageProps = {
      ...imageProps,
      height,
      width,
      layout: "fixed"
    };

    if (isAmp) return <AmpImage {...ampImageProps} />;

    return <img width={width} height={height} src={imageUrl} />;
  }
}

Logo.propTypes = {
  deployment: PropTypes.function,
  isAmp: PropTypes.bool,
  arcSite: PropTypes.string
};

export default Logo;
