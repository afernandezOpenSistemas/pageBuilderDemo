/* eslint-disable */
/* React */
import React from "react";
import PropTypes from "prop-types";

/* Configs */
import { getFontSize, trim } from "./_configs";

const Byline = props => {
  const authors = ["First M. LastName", "Guest Contributor", "Staff"];

  const {
    bylineClasses = "",
    bylineColor = "inherit",
    bylineFont = "",
    bylineFontSize,
    responsiveText = false,
    responsiveTextScale
  } = props;

  return (
    <div
      className={trim(
        `byline | ${bylineClasses} ${bylineFont} isText width_full`
      )}
      style={{
        color: bylineColor,
        fontSize: getFontSize(
          bylineFontSize,
          responsiveText,
          responsiveTextScale
        )
      }}
    >
      <div className="authors">
        By
        {authors.map((author, index) => {
          const secondToLast = authors.length - 2;
          return (
            <span className="author | margin_left_1" key={index}>
              {author}
              {index === secondToLast ? " and" : null}
              {index !== authors.length && index < secondToLast ? "," : null}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Byline;

Byline.propTypes = {
  bylineClasses: PropTypes.string,
  bylineColor: PropTypes.string,
  bylineFont: PropTypes.string,
  bylineFontSize: PropTypes.number,
  bylineText: PropTypes.string,
  responsiveText: PropTypes.bool,
  responsiveTextScale: PropTypes.number
};
