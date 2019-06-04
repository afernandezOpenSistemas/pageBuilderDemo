/*
    This is a display feature only and is not a supported Arc Product.
    You are welcome to use it, but it is not currently on a planned roadmap.
    It may be useful to view for implementation details.
*/

import React, { Component } from "react";
import Consumer from "fusion:consumer";
import PropTypes from "prop-types";

@Consumer
class SkeletonAuthor extends Component {
  render() {
    const { globalContent } = this.props;
    const { first_name: firstName, last_name: lastName, image } =
      (globalContent.credits.by && globalContent.credits.by[0]) || {};

    return (
      <div className="font--tertiary">
        <h3>
          {firstName} {lastName}
        </h3>
        <img src={image} />
      </div>
    );
  }
}

SkeletonAuthor.propTypes = {
  globalContent: PropTypes.object
};

export default SkeletonAuthor;
