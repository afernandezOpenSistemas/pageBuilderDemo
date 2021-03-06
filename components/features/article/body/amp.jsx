import ArticleBody, {
  AmpOembed
} from "@arc-core-components/feature_article-body";

import AMPCarousel from "@arc-core-components/feature_global-amp-gallery";
import { AmpImage } from "@arc-core-components/element_image";

import Consumer from "fusion:consumer";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

@Consumer
class SkeletonAMPArticleBody extends Component {
  render() {
    const { content_elements: contentElements } = this.props.globalContent;

    const elementClasses = {
      textClasses: "font--secondary",
      headerClasses: "font--primary",
      imageClasses: "visual__image visual__image--cover"
    };

    const alignmentClasses = {
      left: "align-left",
      right: "align-right",
      center: "align-center"
    };

    return (
      <Fragment>
        {contentElements && (
          <ArticleBody
            data={contentElements}
            elementClasses={elementClasses}
            alignmentClasses={alignmentClasses}
            renderElement={element => {
              const {
                type,
                subtype,
                raw_oembed: rawOembed,
                content_elements: innerContentElements
              } = element;
              if (type === "oembed_response") {
                return <AmpOembed rawOembed={rawOembed} subtype={subtype} />;
              }
              if (type === "raw_html") {
                return null;
              }
              if (type === "gallery") {
                return (
                  <AMPCarousel
                    data={innerContentElements}
                    width="500"
                    height="300"
                  />
                );
              }
              if (type === "image") {
                return <AmpImage {...element} layout="responsive" />;
              }
              return undefined;
            }}
          />
        )}
      </Fragment>
    );
  }
}

SkeletonAMPArticleBody.propTypes = {
  globalContent: PropTypes.object
};

export default SkeletonAMPArticleBody;
