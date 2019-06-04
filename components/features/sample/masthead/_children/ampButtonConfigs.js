import React from "react";
import { AmpImage } from "@arc-core-components/element_image";

const imageProps = {
  url: `pf/resources/images/logos/logo.svg`,
  className: "visual__image"
};

const ampImageProps = {
  ...imageProps,
  height: "44",
  width: "40",
  layout: "responsive"
};

const LogoElement = () => {
  return <AmpImage {...ampImageProps} />;
};

const CloseButtonElement = () => {
  return <div>X</div>;
};

const OpenButtonElement = () => {
  console.log('open')
  return <div>Hamburger menu</div>;
};

export const logoConfig = {
  position: "right",
  LogoElement
};

export const sidebarConfig = {
  id: "amp-sidebar-right",
  position: "right",
  classNames: "my-sidebar-classes"
};

export const closeButtonConfig = {
  CloseButtonElement,
  closeButtonClasses: "close-button-classes"
};

export const openButtonConfig = {
  OpenButtonElement,
  openButtonClasses: "open-button-classes"
};
