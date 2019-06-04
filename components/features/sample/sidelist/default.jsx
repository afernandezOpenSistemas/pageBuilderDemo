/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* React */
import React, { PureComponent } from "react";
import PropTypes from "fusion:prop-types";

/* Fusion */
import Consumer from "fusion:consumer";

/* Components */
import StoryCard from "../storycard/default";
import TitleBar from "../titlebar/default";

/* Utilities */
import { getWikipediaArticles } from "../storycard/_children/_utilities";

@Consumer
class SideList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.view = "Headline, Byline";
    if (!props.data) {
      getWikipediaArticles(
        props.customFields.content && props.customFields.content.split(","),
        this
      );
    }
  }

  render() {
    const { data } = this.state;
    const { title } = this.props.customFields;
    if (data) {
      return (
        <div className="story_card_feed | col grid widescreen-4 desktop-4 tablet_6 mobile-12 numbered_list width_full">
          <div className="container | grid height_full width_full">
            <TitleBar
              title={title}
              titleBarColor="black"
              titleBarFontSize={16}
              titleBarType="ruler"
              titleBarTextTransform="uppercase"
            />
            {data.map((article, index) => {
              if (article.data && article.data.length > 0) {
                return (
                  <StoryCard
                    border="bottom"
                    bylineColor="#258FE7"
                    classes="card | align_items_start width_full"
                    data={article}
                    deckClasses="deck | color_gray"
                    headlinesContainerClasses="headline | color_blue font_secondary width_full"
                    headlineFontSize={20}
                    headlineFontStyle="italic"
                    key={index}
                    number={index + 1}
                    overrides={this.props.customFields}
                    view={this.view}
                    useMarkup={true}
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

SideList.propTypes = {
  data: PropTypes.string,
  customFields: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string.tag({
      name: "Content Source"
    })
  })
};

export default SideList;
