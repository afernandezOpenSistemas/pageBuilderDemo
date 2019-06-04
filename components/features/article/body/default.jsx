import ArticleBody from "@arc-core-components/feature_article-body";

import Consumer from "fusion:consumer";
import React, { Component, Fragment } from "react";
import PropTypes from "fusion:prop-types";
import inlineAdLogic from "./_children/inlineAdLogic";
import LazyImage from "./_children/lazyImage";

@Consumer
class SkeletonArticleBody extends Component {
  render() {
    const { siteProperties } = this.props;
    const { content_elements: contentElements } = this.props.globalContent;

    const elementClasses = {
      textClasses: "font--secondary",
      headerClasses: "font--primary",
      imageClasses: "visual__image visual__image--cover"
    };

    const alignmentClasses = {
      left: "box--float-left grid__col--lg-6",
      right: "box--float-right grid__col--lg-6",
      center: "flex flex--align-items-center"
    };

    const articleBodyElements = inlineAdLogic(contentElements, siteProperties);

    return (
      <Fragment>
        {articleBodyElements && (
          <ArticleBody
            data={articleBodyElements}
            elementClasses={elementClasses}
            alignmentClasses={alignmentClasses}
            renderElement={element => {
              const { type } = element;
              if (type === "image") {
                return <LazyImage {...element} />;
              }

              return undefined;
            }}
          />
        )}
      </Fragment>
    );
  }
}

SkeletonArticleBody.propTypes = {
  globalContent: PropTypes.object,
  siteProperties: PropTypes.object
};

export default SkeletonArticleBody;
