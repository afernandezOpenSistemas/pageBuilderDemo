/*
    This is a display feature only and is not a supported Arc Product.
    You are welcome to use it, but it is not currently on a planned roadmap.
    It may be useful to view for implementation details.
*/

import React, { Component, Fragment } from "react";
import Consumer from "fusion:consumer";
import PropTypes from "prop-types";

import Headline from "@arc-core-components/element_headline";

import fecha from "fecha";

@Consumer
class SkeletonArticleHeader extends Component {
  render() {
    const { globalContent } = this.props;
    const { credits = { by: [] }, display_date: displayDate } = globalContent;

    return (
      <Fragment>
        <div className="font--primary">News</div>
        <Headline
          headlineClasses="font--primary"
          headline={
            globalContent &&
            globalContent.headlines &&
            globalContent.headlines.basic
          }
          headlineLevel={1}
        />
        {credits.by && credits.by[0] && credits.by[0].name && (
          <span className="bold font--primary">
            By {credits.by && credits.by[0] && credits.by[0].name},
          </span>
        )}
        {displayDate && (
          <time className="font--primary box--margin-vertical">
            Updated{" "}
            {fecha.format(
              fecha.parse(displayDate, "YYYY-MM-DDThh:mm:ss"),
              "dddd MMMM Do, YYYY"
            )}
          </time>
        )}
      </Fragment>
    );
  }
}

SkeletonArticleHeader.propTypes = {
  globalContent: PropTypes.object
};

export default SkeletonArticleHeader;
