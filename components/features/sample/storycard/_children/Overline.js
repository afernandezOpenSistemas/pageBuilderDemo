/* eslint-disable */
/* React */
import React, { Fragment } from "react";
import PropTypes from "prop-types";

/* Configs */
import { getFontSize, trim } from "./_configs";

const Overline = props => {
  const {
    overlineBackgroundColor,
    overlineBorderColor,
    overlineClasses = "",
    overlineColor,
    overlineFont = "",
    overlineFontSize,
    responsiveText = false,
    responsiveTextScale,
    overlineText,
    url
  } = props;

  const getText = () => {
    return url ? (
      <a href={url}>{overlineText}</a>
    ) : (
      <Fragment>{overlineText}</Fragment>
    );
  };

  return overlineText ? (
    <h3
      className={trim(`${overlineClasses} ${overlineFont} isText`)}
      style={{
        backgroundColor: overlineBackgroundColor || "auto",
        border: overlineBorderColor ? "1px solid" : "0px",
        borderColor: overlineBorderColor || "auto",
        color: overlineColor || "auto",
        fontSize: getFontSize(
          overlineFontSize,
          responsiveText,
          responsiveTextScale
        )
      }}
    >
      {getText()}
    </h3>
  ) : null;
};

Overline.propTypes = {
  overlineBackgroundColor: PropTypes.string,
  overlineBorderColor: PropTypes.string,
  overlineClasses: PropTypes.string,
  overlineColor: PropTypes.string,
  overlineFont: PropTypes.string,
  overlineFontSize: PropTypes.number,
  responsiveText: PropTypes.bool,
  responsiveTextScale: PropTypes.number,
  overlineText: PropTypes.string,
  url: PropTypes.string
};

export default Overline;
