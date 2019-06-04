/*
    This is a display feature only and is not a supported Arc Product.
    You are welcome to use it, but it is not currently on a planned roadmap.
    It may be useful to view for implementation details.
*/

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SkeletonHTMLBox extends PureComponent {
  render() {
    const { HTMLContent = "" } = this.props.customFields;

    return <div dangerouslySetInnerHTML={{ __html: HTMLContent }} />;
  }
}

SkeletonHTMLBox.propTypes = {
  customFields: PropTypes.shape({
    HTMLContent: PropTypes.string.tag({
      formPlugin: "wysiwyg-editor"
    })
  })
};

export default SkeletonHTMLBox;
