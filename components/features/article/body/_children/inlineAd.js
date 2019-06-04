import React, { Component } from "react";
import PropTypes from "fusion:prop-types";
import Consumer from "fusion:consumer";

import SkeletonArcAd from "../../../ads/arc-ad/default";

import {
  defaultAdType,
  adTypes,
  adTypeOptions
} from "../../../ads/arc-ad/_children/adtypes";

@Consumer
class InlineAd extends Component {
  render() {
    const { isAdmin, siteProperties, customFields } = this.props;

    return (
      <SkeletonArcAd
        isAdmin={isAdmin}
        siteProperties={siteProperties}
        customFields={customFields}
      />
    );
  }
}

InlineAd.propTypes = {
  isAdmin: PropTypes.bool,
  siteProperties: PropTypes.shape({
    dfp_id: PropTypes.number,
    adBreakpoints: PropTypes.string
  }),
  customFields: PropTypes.shape({
    slot: PropTypes.string,
    display: PropTypes.oneOf(["mobile", "desktop", "all"]).tag({
      defaultValue: "all"
    }),
    type: PropTypes.oneOf([adTypeOptions(adTypes)]).tag({
      defaultValue: defaultAdType
    }),
    refresh: PropTypes.bool
  })
};

export default InlineAd;
