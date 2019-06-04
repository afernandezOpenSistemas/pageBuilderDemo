import React from "react";
import InlineAd from "./inlineAd";
import { defaultAdType } from "../../../ads/arc-ad/_children/adtypes";

// This function takes the array of content elements and
// inserts inline ads at a place of your choosing.

const inlineAdLogic = (contentElements = [], siteProperties = {}) => {
  const contentElementsWithAds = contentElements.map(
    (contentElement, index) => {
      // const { type } = contentElement;

      const inlineAd = defaultAdType;

      inlineAd.slot = `homepage_${index}`;

      if (index % 5 === 0 && index > 0) {
        return {
          type: "inline_element",
          element: (
            <InlineAd customFields={inlineAd} siteProperties={siteProperties} />
          )
        };
      }
      return contentElement;
    }
  );

  return contentElementsWithAds;
};

export default inlineAdLogic;
