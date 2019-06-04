/* React */
import React from "react";
import PropTypes from "prop-types";

/* Configs */
import {
  mapComponentPropsToStyles,
  titleBarTypes,
  trim
} from "../storycard/_children/_configs";

const TitleBar = props => {
  const titleBarClasses =
    "title_bar | border_box font_secondary padding_bottom_2 width_full";

  if (props.title) {
    const { titleBarType = "" } = props;
    const title = `title | absolute background_inherit bold uppercase`;

    return (
      <div
        className={trim(
          `${titleBarClasses} ${titleBarType} display_inline_block relative`
        )}
        style={{
          height: "20px"
        }}
      >
        {titleBarType === "accent" && (
          <span
            className="bar | border_bottom border_4 float_left"
            style={{
              borderColor: "black",
              width: "30px"
            }}
          />
        )}
        <div
          className={title}
          style={mapComponentPropsToStyles(props, "titleBar")}
        >
          {props.title}
        </div>
        {titleBarType === "ruler" && (
          <span
            className="bar | border_bottom border_1 height_1"
            style={{
              marginTop: 5.5
            }}
          />
        )}
      </div>
    );
  }
  return null;
};

TitleBar.static = true;

TitleBar.propTypes = {
  title: PropTypes.string,
  titleBarType: PropTypes.oneOf(titleBarTypes)
};

export default TitleBar;
