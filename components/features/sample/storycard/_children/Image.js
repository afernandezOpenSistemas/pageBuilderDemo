/* React */
import React from "react";
import PropTypes from "prop-types";

/* Utilities */
import ImageFormat from "./_imageUtilities";

const Image = props => {
  const { aspect, fitIn, focalPoint, src = "" } = props;

  const formattedSrc = encodeURI(src);

  return (
    <div className="image | width_full">
      <figure>
        <img
          src={ImageFormat({
            smart: false,
            src: formattedSrc,
            heightAspect: aspect,
            focalPoint,
            fitIn
          })}
        />
      </figure>
    </div>
  );
};

Image.propTypes = {
  aspect: PropTypes.number,
  fitIn: PropTypes.bool,
  focalPoint: PropTypes.array,
  src: PropTypes.string
};

export default Image;
