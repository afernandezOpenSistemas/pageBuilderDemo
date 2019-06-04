/* eslint-disable */
/* React */
import React, { Fragment, PureComponent } from "react";
import PropTypes from "fusion:prop-types";

/* Fusion */
import Consumer from "fusion:consumer";

/* Components */
import StoryCard from "../storycard/default";
import TitleBar from "../titlebar/default";

/* Configs */
import {
  borderValues,
  bylineProps,
  cardsPerRowProps,
  columnsProps,
  createHeadlineOverrideProps,
  createImageAlignmentOverrideProps,
  createTextOverrideProps,
  createViewOverrideProps,
  deckProps,
  defaultView,
  getColumnSizeClasses,
  getImageAlignmentClasses,
  getTextClasses,
  getViewNames,
  headlineProps,
  imageAlignmentProp,
  overlayProps,
  overlineProps,
  spacerProps,
  getThemeProps,
  textProps,
  titleBarProps,
  trim
} from "../storycard/_children/_configs";

/* Utilities */
import { getWikipediaArticles } from "../storycard/_children/_utilities";

@Consumer
class StoryFeed extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.view = props.customFields.view || defaultView;
    if (!props.data) {
      getWikipediaArticles(
        props.customFields.content && props.customFields.content.split(","), this
      );
    }
  }

  render() {
    const { data } = this.state;

    const {
      boldText,
      border,
      centerText,
      desktopCardsPerRow,
      desktopContainerColumns,
      imageAlignment,
      imageThumbnail,
      mobileCardsPerRow,
      mobileContainerColumns,
      numberedCards,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      tabletCardsPerRow,
      tabletContainerColumns,
      title,
      titleBarColor,
      titleBarFontSize,
      titleBarType,
      widescreenCardsPerRow,
      widescreenContainerColumns
    } = this.props.customFields;

    const containerSizeClasses = getColumnSizeClasses(
      widescreenContainerColumns,
      desktopContainerColumns,
      tabletContainerColumns,
      mobileContainerColumns
    );
    const cardSizeClasses = getColumnSizeClasses(
      widescreenCardsPerRow,
      desktopCardsPerRow,
      tabletCardsPerRow,
      mobileCardsPerRow,
      true
    );

    if (data) {
      const themeClasses = this.props.customFields.theme || "";
      const isNumbered = numberedCards ? "numbered_list" : "";
      return (
        <div className={trim(`story_card_feed | ${containerSizeClasses} ${isNumbered} ${themeClasses} margin_bottom_2 width_full`)}>
          <div className="container | grid height_full width_full">
            <TitleBar
              title={title}
              titleBarColor={titleBarColor}
              titleBarFontSize={titleBarFontSize}
              titleBarType={titleBarType}
            />
            {data.map((article, index) => {
              if (article.data && article.data.length > 0) {
                const currentCard = index + 1;
                const overrides = this.props.customFields;
                const headlineFontSizeOverride = overrides[`Headline_${currentCard}`];
                const imageAlignmentOverride = overrides[`Image_${currentCard}_Alignment`];
                const textCenterOverride = overrides[`Text_${currentCard}`];
                const viewOverride = overrides[`View_${currentCard}`];
                const imageAlignmentClasses = getImageAlignmentClasses(
                  imageAlignmentOverride || imageAlignment,
                  viewOverride || this.view
                );
                const imageThumbnailClass = imageThumbnail ? "thumbnail" : "";
                const textClasses = getTextClasses(boldText, textCenterOverride || centerText);
                const cardClasses = trim(
                  `card | align_items_start ${cardSizeClasses} ${textClasses} ${imageAlignmentClasses} ${imageThumbnailClass} width_full`
                );

                return (
                  <StoryCard
                    border={border}
                    classes={cardClasses}
                    data={article}
                    deckClasses="deck | "
                    headlinesContainerClasses="headline | width_full"
                    headlineFontSize={headlineFontSizeOverride || overrides.headlineFontSize}
                    key={`${article.term}_${index}`}
                    number={numberedCards ? index : null}
                    overlineClasses="overline | "
                    overlineText={article.term}
                    overrides={overrides}
                    paddingBottom={paddingBottom}
                    paddingLeft={paddingLeft}
                    paddingRight={paddingRight}
                    paddingTop={paddingTop}
                    responsiveText={overrides.responsiveText}
                    responsiveTextScale={overrides.responsiveTextScale}
                    storyCardBackgroundColor={overrides.backgroundColor}
                    view={viewOverride || this.view}
                  />
                );
              }
            })}
          </div>
        </div>
      );
    }
    return null;
  }
}

/* eslint react/prop-types: 0 */
StoryFeed.propTypes = {
  customFields: PropTypes.shape({
    content: PropTypes.string.tag({
      group: "Data Configuration",
      name: "Content Source"
    }),
    view: PropTypes.oneOf(getViewNames()).tag({
      defaultValue: defaultView,
      group: "Feed",
      name: "View"
    }),
    ...getThemeProps("Feed"),
    backgroundColor: PropTypes.string.tag({
      group: "Feed",
      name: "Background Color"
    }),
    border: PropTypes.oneOf(borderValues).tag({
      defaultValue: "none",
      group: "Feed",
      name: "Border"
    }),
    numberedCards: PropTypes.bool.tag({
      defaultValue: false,
      group: "Feed",
      name: "Numbered"
    }),
    ...textProps(),
    ...titleBarProps(),
    ...overlineProps(false),
    ...headlineProps(false),
    ...deckProps(false),
    ...bylineProps(false),
    ...imageAlignmentProp,
    ...spacerProps("padding"),
    ...columnsProps("ContainerColumns", "Container Columns"),
    ...cardsPerRowProps(),
    ...createHeadlineOverrideProps(),
    ...createImageAlignmentOverrideProps(),
    ...overlayProps(),
    ...createTextOverrideProps(),
    ...createViewOverrideProps()
  })
};

export default StoryFeed;
