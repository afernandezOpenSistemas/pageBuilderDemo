import Image from "@arc-core-components/element_image";
import Lazy from "lazy-child";
import { number } from "prop-types";
import React from "react";

// Naive lazy image implementation that applies the height and width of an
// image content element as the dimensions of the placeholder to avoid causing
// the page to jump when the image is rendered.
export default function LazyImage(props) {
  const { height: placeholderHeight, width: placeholderWidth } = props;
  return (
    <Lazy
      renderPlaceholder={ref => {
        return (
          <div
            ref={ref}
            style={{ height: placeholderHeight, width: placeholderWidth }}
          />
        );
      }}
    >
      <Image {...props} />
    </Lazy>
  );
}

LazyImage.propTypes = {
  height: number,
  width: number
};
