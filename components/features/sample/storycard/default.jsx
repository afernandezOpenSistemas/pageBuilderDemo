/* eslint-disable max-len */
/* React */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

/* Fusion */
import Consumer from "fusion:consumer";

/* Configs */
import {
  borderValues,
  bylineProps,
  columnsProps,
  deckProps,
  defaultDeckClasses,
  defaultHeadlinesContainerClasses,
  defaultOverlineClasses,
  defaultView,
  getBorderClasses,
  getColumnSizeClasses,
  getImageAlignmentClasses,
  getStoryCardFromViewName,
  getTextClasses,
  getThemeProps,
  getViewNames,
  headlineProps,
  imageAlignmentProp,
  imageURLProp,
  overlayProps,
  overlineProps,
  textProps,
  trim
} from "./_children/_configs";

/* Utilities */
import { getWikipediaArticles } from "./_children/_utilities";

/* Styles */
import "./styles/_alignment.scss";
import "./styles/_border.scss";
import "./styles/_colors.scss";
import "./styles/_dimensions.scss";
import "./styles/_display.scss";
import "./styles/_fonts.scss";
import "./styles/_grid.scss";
import "./styles/_navbar.scss";
import "./styles/_resets.scss";
import "./styles/_spacers.scss";
import "./styles/_storyCard.scss";
import "./styles/_text.scss";

@Consumer
class StoryCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.view = props.view || props.customFields.view;
    if (!props.data) {
      getWikipediaArticles(props.customFields.content, this);
    }
  }

  render() {
    const {
      classes = "",
      customFields = {},
      indexedComponents,
      isAdmin,
      number,
      replacementComponents,
      siteProperties
    } = this.props;

    if (
      siteProperties.excludedFeatures &&
      siteProperties.excludedFeatures[siteProperties.siteName] &&
      siteProperties.excludedFeatures[siteProperties.siteName].indexOf(
        "storycard"
      ) >= 0
    ) {
      return isAdmin ? (
        <div className="color_red width_full">
          This feature is not intended for this site
        </div>
      ) : null;
    }

    const {
      boldText,
      centerText,
      desktopContainerColumns,
      imageAlignment,
      imageThumbnail,
      mobileContainerColumns,
      theme,
      tabletContainerColumns,
      widescreenContainerColumns
    } = customFields;

    const border = customFields.border || this.props.border;
    const imageAlignmentClasses = getImageAlignmentClasses(
      imageAlignment,
      this.view
    );
    const imageThumbnailClass = imageThumbnail ? "thumbnail" : "";
    const borderClass = getBorderClasses(border);
    const textClasses = getTextClasses(boldText, centerText);
    const themeClasses = theme || "";

    const containerSizeClasses = getColumnSizeClasses(
      widescreenContainerColumns,
      desktopContainerColumns,
      tabletContainerColumns,
      mobileContainerColumns
    );

    const cardClasses = classes
      ? ""
      : trim(
          `card | align_items_start ${containerSizeClasses} ${imageAlignmentClasses} ${themeClasses} ${imageThumbnailClass} ${textClasses} width_full`
        );

    const overrides = Object.assign(
      this.props.data ? this.props.overrides : customFields,
      this.props
    );

    [
      overrides,
      defaultDeckClasses,
      defaultHeadlinesContainerClasses,
      defaultOverlineClasses
    ].reduce(Object.assign);

    // From Feed, or individual feature, ToDo: Update to ANS
    const data = this.props.data || this.state.data;

    if (
      this.view &&
      ((!this.props.data && Object.getOwnPropertyNames(data).length > 0) ||
        (this.props.data && data.data.length > 0))
    ) {
      const cardNumber = number ? (
        <span key={`card_${number}`} className="number_card | font_secondary">
          {number}
        </span>
      ) : null;

      return (
        <div className={trim(`${classes} ${cardClasses}`)}>
          {cardNumber}
          {getStoryCardFromViewName(
            this.props.data ? data : data[0],
            `container | ${borderClass} pointer width_full`,
            overrides,
            replacementComponents,
            indexedComponents
          )[this.view]()}
        </div>
      );
    }
    return null;
  }
}

/* eslint react/prop-types: 0 */
StoryCard.propTypes = {
  border: PropTypes.string,
  classes: PropTypes.string,
  customFields: PropTypes.shape({
    content: PropTypes.string.tag({
      group: "Data Configuration",
      name: "Content Source"
    }),
    view: PropTypes.oneOf(getViewNames()).tag({
      defaultValue: defaultView,
      group: "Card",
      name: "View"
    }),
    ...getThemeProps("Card"),
    backgroundColor: PropTypes.string.tag({
      group: "Card",
      name: "Background Color"
    }),
    border: PropTypes.oneOf(borderValues).tag({
      defaultValue: "none",
      group: "Card",
      name: "Border"
    }),
    ...textProps("Card"),
    ...overlineProps(),
    ...headlineProps(),
    ...deckProps(),
    ...bylineProps(),
    ...overlayProps(),
    ...imageAlignmentProp,
    ...imageURLProp,
    ...columnsProps("ContainerColumns", "Container Columns")
  }),
  data: PropTypes.shape({
    length: PropTypes.string
  }),
  indexedComponents: PropTypes.shape({}),
  overrides: PropTypes.shape({}),
  replacementComponents: PropTypes.shape({}),
  siteProperties: PropTypes.string,
  view: PropTypes.string
};

export default StoryCard;
