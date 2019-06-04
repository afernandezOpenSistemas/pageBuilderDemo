/* React */
import React, { Component } from "react";
import PropTypes from "prop-types";

/* Fusion */
import Consumer from "fusion:consumer";

/* Configs */
import { fontSizeOptions } from "../storycard/_children/_configs";

/* Styles */
import "./styles/_masthead.scss";

import { openButtonConfig } from "./_children/ampButtonConfigs";

import  MenuContent  from "../../../../os_components/menu-content/menu-content";

@Consumer
class Masthead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLinkClicked: false
    }
    this.buttonClick = this.buttonClick.bind(this);
  }
  render() {
    const {
      backgroundColor = "#015c93",
      fontSize,
      siteName,
      textColor
    } = this.props.customFields;

    return (
      <div
        className="masthead | display_flex margin_bottom_2 text_align_center width_full"
        style={{
          height: "75px",
          backgroundColor,
          color: textColor,
          fontFamily: "Source Sans Pro"
        }}
      >
        <span onClick = { this.buttonClick } className="menu | absolute hamburger margin_left_2 margin_top_2">
          <span className="label | absolute bold margin_left_1 margin_top_2">
            MENU
          </span>
        </span>
        {
          this.state.inputLinkClicked?
              <MenuContent/>
          : null
        }
        <span
          className="site_name | bold width_full"
          style={{
            marginTop: "8px",
            fontSize
          }}
        >
          {siteName}
        </span>
      </div>
    );
  }
  buttonClick() {
    this.setState(state => ({
      inputLinkClicked : ! state.inputLinkClicked
    }))
  }
}

Masthead.propTypes = {
  customFields: PropTypes.shape({
    siteName: PropTypes.string.tag({
      name: "Site Name"
    }),
    backgroundColor: PropTypes.string.tag({
      name: "Background Color"
    }),
    fontSize: PropTypes.oneOf(fontSizeOptions).tag({
      name: "Font Size"
    }),
    textColor: PropTypes.string.tag({
      name: "Text Color"
    })
  })
};

export default Masthead;
