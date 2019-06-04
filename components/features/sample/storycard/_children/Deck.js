/* eslint-disable */
/* React */
import React from "react";
import PropTypes from "prop-types";

/* Configs */
import { getFontSize, trim } from "./_configs";

const Deck = props => {
  const {
    deckClasses = "",
    deckColor = "inherit",
    deckFont = "",
    deckFontSize,
    responsiveText = false,
    responsiveTextScale,
    deckText,
    url
  } = props;

  return deckText ? (
    <div
      className={trim(`${deckClasses} ${deckFont} isText`)}
      style={{
        color: deckColor,
        fontSize: getFontSize(deckFontSize, responsiveText, responsiveTextScale)
      }}
    >
      {url ? (
        <a href={url}>{deckText}</a>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: deckText }} />
      )}
    </div>
  ) : null;
};

Deck.propTypes = {
  deckClasses: PropTypes.string,
  deckColor: PropTypes.string,
  deckFont: PropTypes.string,
  deckFontSize: PropTypes.number,
  deckText: PropTypes.string,
  responsiveText: PropTypes.bool,
  responsiveTextScale: PropTypes.number,
  url: PropTypes.string
};

export default Deck;
