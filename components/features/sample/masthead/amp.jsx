import React, { Component } from "react";
import AMPNav from "@arc-core-components/feature_global-amp-nav";
import Consumer from "fusion:consumer";
import Content from "fusion:content";
import PropTypes from "fusion:prop-types";
import Bars from "../../../../resources/icons/Bars";
import Times from "../../../../resources/icons/Times";
import Logo from "./_children/Logo";

@Consumer
class LogoElement extends Component {
  render() {
    return <Logo {...this.props} isAmp={true} />;
  }
}

const logoConfig = {
  position: "right",
  LogoElement
};

const sidebarConfig = {
  id: "amp-sidebar-left",
  position: "left",
  classNames: "my-sidebar-classes"
};

const OpenButtonElement = () => {
  return (
    <div className="visual__image text--white">
      <Bars />
    </div>
  );
};

const openButtonConfig = {
  OpenButtonElement,
  openButtonClasses: "text--white box--margin-left-lg"
};

const CloseButtonElement = () => {
  return (
    <div>
      <Times />
    </div>
  );
};

const closeButtonConfig = {
  CloseButtonElement,
  closeButtonClasses: "close-button-classes"
};

const elementClasses = {
  navWrapperClasses: "box--bg-accent-primary",
  logoAndButtonWrapperClasses:
    "box--bg-accent-secondary flex flex--justify-space-between grid",
  listWrapperClasses: "sideNav",
  listItemClasses: {
    listItemWrapperClasses: "main-nav",
    listItemLinkClasses: "block relative"
  }
};

class SkeletonAMPNav extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const site = this.props.arcSite || "the-gazette"; // May need to do a const for setting a default site

    const contentConfigValues = {
      _website: site
    };

    return (
      <Content
        contentService="site-service-v3"
        contentConfigValues={contentConfigValues}
      >
        {sites => {
          return sites && sites.children ? (
            <AMPNav
              data={sites.children}
              logoConfig={logoConfig}
              sidebarConfig={sidebarConfig}
              closeButtonConfig={closeButtonConfig}
              openButtonConfig={openButtonConfig}
              elementClasses={elementClasses}
            />
          ) : null;
        }}
      </Content>
    );
  }
}

SkeletonAMPNav.propTypes = {
  arcSite: PropTypes.string
};

export default SkeletonAMPNav;
