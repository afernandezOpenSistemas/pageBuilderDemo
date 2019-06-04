/*
    This is a display feature only and is not a supported Arc Product.
    You are welcome to use it, but it is not currently on a planned roadmap.
    It may be useful to view for implementation details.
*/

import React, { Component } from "react";
import Consumer from "fusion:consumer";
import PropTypes from "prop-types";

import { AmpImage } from "@arc-core-components/element_image";

const Logo = props => {
  const imageProps = {
    url: `${props.contextPath}/resources/images/logos/logo.svg`,
    className: "visual__image"
  };

  const ampImageProps = {
    ...imageProps,
    height: "44",
    width: "40",
    layout: "responsive"
  };

  if (props.isAmp) return <AmpImage {...ampImageProps} />;
  return (
    <img
      className="visual__image"
      src={`${props.contextPath}/resources/images/logos/logo.svg`}
    />
  );
};

Logo.propTypes = {
  contextPath: PropTypes.string,
  isAmp: PropTypes.bool
};

@Consumer
class SkeletonFooter extends Component {
  render() {
    const { contextPath } = this.props;
    const { siteName } = this.props.siteProperties;

    return (
      <div className="box--bg-black flex flex--align-items-center grid grid__column">
        {contextPath && <Logo {...this.props} />}
        {siteName && (
          <div className="text--bold font--primary text--white">{siteName}</div>
        )}
        <div className="text--bold font--primary text--white">
          Copyright {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}

SkeletonFooter.propTypes = {
  siteProperties: PropTypes.shape({
    siteName: PropTypes.string
  }),
  contextPath: PropTypes.oneOf(["pf"]),
  isAmp: PropTypes.bool
};

export default SkeletonFooter;
