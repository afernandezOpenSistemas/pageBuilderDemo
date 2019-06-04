/* eslint-disable */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* React */
import React, { Fragment } from "react";
import PropTypes from "prop-types";

/* Components */
import Image from "@arc-core-components/element_image";
import Byline from "./Byline";
import Deck from "./Deck";
import Headline from "./Headlines";
import Links from "./Links";
import Overline from "./Overline";

/* Utilities */
import {
  getWikipediaImages,
  getWikipediaLinks,
  getWikipediaText
} from "./_utilities";

/* Constants */
export const borderValues = ["none", "all", "bottom", "left", "right", "top"];
export const directionValues = ["none", "bottom", "left", "right", "top"];
export const imageAlignmentValues = ["Left", "Right", "Vertical"];
export const defaultView = "Image, Headline, Deck";
export const defaultDeckClasses = { deckClasses: "deck | " };
export const defaultHeadlinesContainerClasses = {
  headlinesContainerClasses: "headline | width_full"
};
export const defaultOverlineClasses = { overlineClasses: "overline | " };
export const defaultOverlineFontSize = 12;
export const defaultHeadlineFontSize = 28;
export const defaultDeckFontSize = 14;
export const defaultLinksFontSize = 12;
export const maxContentItems = 12;
export const maxLinks = 12;
export const themes = ["default", "footer_stack", "overlay_button"];
export const titleBarTypes = ["accent", "ruler"];
// eslint-disable-next-line prettier/prettier
export const fontSizeOptions = [
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  16,
  17,
  18,
  20,
  21,
  22,
  24,
  26,
  27,
  28,
  30,
  31,
  32,
  33,
  34,
  36,
  38,
  39,
  40,
  42,
  45,
  50,
  55,
  64,
  68
];

/* Functions */
export const trim = text => {
  return text.replace(/\s\s+/g, " ").trim();
};

export const fontNames = {
  Arial: "font_default",
  Garamond: "font_primary",
  "Open Sans": "font_secondary",
  Helvetica: "font_tertiary",
  Franklin: "font_quaternary",
  Roboto: "font_quinary"
};

export const fontOptions = Object.keys(fontNames);

const getDeckText = text => {
  const deckText = [];
  if (text) {
    text.map((t, i) => {
      if (i > 0 && i < 3) {
        deckText.push(t);
      }
    });
  }
  return deckText.toString();
};

const getByline = (data, overrides) => {
  if (data) {
    return (
      <Byline
        bylineClasses={overrides && overrides.bylineClasses}
        bylineColor={overrides && overrides.bylineColor}
        bylineFont={overrides && fontNames[overrides.bylineFont]}
        bylineFontSize={overrides && overrides.bylineFontSize}
        responsiveText={overrides && overrides.responsiveText}
        responsiveTextScale={overrides && overrides.responsiveTextScale}
      />
    );
  }
};

const getDeck = (data, overrides) => {
  if (data) {
    const deckOverride = overrides && overrides.deckText;
    const deckText =
      overrides.useMarkup && !deckOverride
        ? getDeckText(getWikipediaText(data.data)).substr(0, 300)
        : deckOverride || (data && data.description && data.description.basic);
    return (
      <Deck
        deckClasses={overrides && overrides.deckClasses}
        deckColor={overrides && overrides.deckColor}
        deckFont={overrides && fontNames[overrides.deckFont]}
        deckFontSize={overrides && overrides.deckFontSize}
        deckText={deckText}
        responsiveText={overrides && overrides.responsiveText}
        responsiveTextScale={overrides && overrides.responsiveTextScale}
      />
    );
  }
};

const getHeadline = (data, overrides) => {
  if (data) {
    const headlineOverride = overrides && overrides.headlineText;
    const headlineText =
      overrides.useMarkup && !headlineOverride
        ? getWikipediaText(data.data)
            .toString()
            .substr(0, 150)
        : headlineOverride || (data && data.headlines && data.headlines.basic);
    return (
      <Headline
        headlineClasses={overrides && overrides.headlineClasses}
        headlinesContainerClasses={
          overrides && overrides.headlinesContainerClasses
        }
        headlineFont={overrides && fontNames[overrides.headlineFont]}
        headlineFontSize={overrides && overrides.headlineFontSize}
        headlineLevel={overrides && overrides.headlineLevel}
        headlineText={headlineText}
        overrides={overrides}
        responsiveText={overrides && overrides.responsiveText}
        responsiveTextScale={overrides && overrides.responsiveTextScale}
        subdheadlineClasses={overrides && overrides.subdheadlineClasses}
        subheadlineLevel={overrides && overrides.subheadlineLevel}
        subheadlineText={overrides && overrides.subheadlineText}
        url={(overrides && overrides.url) || (data && data.canonical_url)}
      />
    );
  }
};

const getImage = (data, overrides) => {
  const overrideImageURL = overrides && overrides.imageURL;
  const overrideButtonHref = overrides.overlineButtonURL || ""
  const imageSrc =
    overrides.useMarkup && !overrideImageURL
      ? getWikipediaImages(data.data)[0]
      : overrideImageURL ||
        (data &&
          data.promo_items &&
          data.promo_items.basic &&
          data.promo_items.basic.url);
  const hoverClass = overrides.overlayText ? "display_hover" : "";
  const overlay = () => {
    return (
      <span
        className={`overlay | absolute display_none height_full width_full`}
        style={{
          backgroundColor: overrides && overrides.overlayBackgroundColor
        }}
      >
        <span
          className="label"
          style={{
            color: overrides && overrides.overlayTextColor
          }}
        >
          {overrides.overlayText}
        </span>
      </span>
    ) 
  };
  const customButton = () => {
    return overrideButtonHref ? (
      <form style={ { zIndex : 1000 , position: "absolute"} } action={overrideButtonHref}>
              <input type="submit" value="Ver Video" />
      </form>
    ) : null;
  }
  return (
    <div className={`image | ${hoverClass} relative`}>
      {customButton()}
      {overlay()}
      <Image
        alt={
          (overrides && overrides.url) ||
          (data &&
            data.promo_items &&
            data.promo_items.basic &&
            data.promo_items.basic.url)
        }
        height={
          (overrides && overrides.imageHeight) ||
          (data &&
            data.promo_items &&
            data.promo_items.basic &&
            data.promo_items.basic.height)
        }
        imgClassName={overrides && overrides.imgClassName}
        url={imageSrc}
        width={
          (overrides && overrides.imageWidth) ||
          (data &&
            data.promo_items &&
            data.promo_items.basic &&
            data.promo_items.basic.width)
        }
      />
    </div>
  );
};

const getOverline = (data, overrides) => {
  const overlineOverride = overrides && overrides.overlineText;
  const overlineText =
    overrides.useMarkup && !overlineOverride
      ? data.term
      : overlineOverride ||
        (data &&
          data.taxonomy &&
          data.taxonomy.primary_section &&
          data.taxonomy.primary_section.name);
  return (
    <Overline
      overlineBackgroundColor={overrides && overrides.overlineBackgroundColor}
      overlineBorderColor={overrides && overrides.overlineBorderColor}
      overlineClasses={overrides && overrides.overlineClasses}
      overlineColor={overrides && overrides.overlineColor}
      overlineFont={overrides && fontNames[overrides.overlineFont]}
      overlineFontSize={
        (overrides && overrides.overlineFontSize) || defaultOverlineFontSize
      }
      responsiveText={overrides && overrides.responsiveText}
      responsiveTextScale={overrides && overrides.responsiveTextScale}
      overlineText={overlineText}
      url={(overrides && overrides.url) || (data && data.canonical_url)}
    />
  );
};

const getLinksFromOverrides = overrides => {
  const links = [];
  if (overrides) {
    for (let i = 0; i < maxLinks; i += 1) {
      const linkText = overrides[`${i}_linkText`];
      const linkURL = overrides[`${i}_linkURL`];
      if (linkText && linkURL) {
        links.push({
          text: linkText,
          url: linkURL
        });
      }
    }
  }
  return links.length > 0 ? links : undefined;
};

const getLinks = (data, overrides) => (
  <Links
    links={getWikipediaLinks(data.data)}
    linksBulletColor={overrides && overrides.linksBulletColor}
    linksColor={overrides && overrides.linksColor}
    linksFontSize={overrides && overrides.linksFontSize}
  />
);

export const properCasePropKey = (key, component = "") => {
  // ex: headlineBorderColor
  const name = key.replace(component, "");
  return `${
    component === ""
      ? name.substr(0, 1).toUpperCase()
      : name.substr(0, 1).toLowerCase()
  }${name.substr(1, name.length - 1)}`;
};

export const getFontSize = (fontSize, responsiveText, responsiveTextScale) => {
  if (fontSize && responsiveText) {
    return `calc(${fontSize}px + ${responsiveTextScale}vw)`;
  }
  if (fontSize) {
    return `${fontSize}px`;
  }
  return "auto";
};

const getPropValue = prop => {
  const sizeProps = ["margin", "padding", "size", "width", "height"];
  sizeProps.map(sizeProp => {
    if (prop.indexOf(sizeProp) >= 0) {
      return `${prop}px`;
    }
  });
  return prop;
};

export const mapComponentPropsToStyles = (props, component) => {
  const styleProps = Object.keys(document.createElement("p").style);
  const propKeys = Object.keys(props)
    .filter(key => {
      return styleProps.includes(properCasePropKey(key, component));
    })
    .reduce((obj, key) => {
      const name = properCasePropKey(key, component);
      obj[name] = // eslint-disable-line no-param-reassign
        name === "fontSize"
          ? getFontSize(
              props[key],
              props.responsiveText,
              props.responsiveTextScale
            )
          : props[getPropValue(key)];
      return obj;
    }, {});
  return propKeys;
};
export const getCardContainerClassesFromView = (
  classes = "",
  viewName = ""
) => {
  return trim(`${classes} ${viewName}`);
};

export const checkForReplacementComponent = (name, replacementComponents) => {
  return (
    replacementComponents &&
    replacementComponents[name] &&
    replacementComponents[name]()
  );
};

export const getMarkupForViewName = (
  view,
  data,
  classes,
  overrides
  //replacementComponents,
  //indexedComponents
) => {
  const components = {
    Byline: () => {
      return (
        //checkForReplacementComponent("Byline", replacementComponents) ||
        getByline(data, overrides)
      );
    },
    Deck: () => {
      return (
        //checkForReplacementComponent("Deck", replacementComponents) ||
        getDeck(data, overrides)
      );
    },
    Headline: () => {
      return (
        //checkForReplacementComponent("Headline", replacementComponents) ||
        getHeadline(data, overrides)
      );
    },
    Image: () => {
      return (
        //checkForReplacementComponent("Image", replacementComponents) ||
        getImage(data, overrides)
      );
    },
    Links: () => {
      return (
        //checkForReplacementComponent("Links", replacementComponents) ||
        getLinks(data, overrides)
      );
    },
    Overline: () => {
      return view.indexOf("Overline") === -1
        ? getOverline(undefined, overrides)
        : //checkForReplacementComponent("Overline", replacementComponents) ||
          getOverline(data, overrides);
    }
  };
  const viewComponents = view.split(",");
  return (
    <div
      className={getCardContainerClassesFromView(
        classes,
        view.replace(/ /g, "").replace(/,/g, "_")
      ).toLowerCase()}
      style={mapComponentPropsToStyles(overrides, "storyCard")}
    >
      {viewComponents.map((component, index) => {
        const componentName = component.split("-")[0].trim();
        //const indexedComponent = indexedComponents && indexedComponents[index];

        return (
          <Fragment key={index}>
            {/* {indexedComponent ? (
              <Fragment>
                {indexedComponent}
                {components[componentName]()}
              </Fragment>
            ) : (
              <Fragment>{components[componentName]()}</Fragment>
            )} */}
            <Fragment>{components[componentName]()}</Fragment>
          </Fragment>
        );
      })}
    </div>
  );
};

// prettier-ignore
export const getStoryCardFromViewName = (data, classes, overrides, replacementComponents, indexedComponents) => {
  return {
    'Headline': () => getMarkupForViewName('Headline', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Byline': () => getMarkupForViewName('Headline, Byline', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Deck': () => getMarkupForViewName('Headline, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Deck, Byline': () => getMarkupForViewName('Headline, Deck, Byline', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Deck, Links': () => getMarkupForViewName('Headline, Deck, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Deck, Byline, Links': () => getMarkupForViewName('Headline, Deck, Byline, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Byline, Image': () => getMarkupForViewName('Headline, Byline, Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Image': () => getMarkupForViewName('Headline, Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Image, Deck, Links': () => getMarkupForViewName('Headline, Image, Deck, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Deck, Image': () => getMarkupForViewName('Headline, Deck, Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Deck, Image, Byline': () => getMarkupForViewName('Headline, Deck, Image, Byline', data, classes, overrides, replacementComponents, indexedComponents),
    'Headline, Image, Deck': () => getMarkupForViewName('Headline, Image, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Deck': () => getMarkupForViewName('Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Deck, Image': () => getMarkupForViewName('Deck, Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Image': () => getMarkupForViewName('Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Deck': () => getMarkupForViewName('Image, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Deck, Byline': () => getMarkupForViewName('Image, Deck, Byline', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Byline, Links': () => getMarkupForViewName('Image, Byline, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Deck, Byline, Links': () => getMarkupForViewName('Image, Deck, Byline, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Headline': () => getMarkupForViewName('Image, Headline', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Headline, Byline': () => getMarkupForViewName('Image, Headline, Byline', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Headline, Deck': () => getMarkupForViewName('Image, Headline, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Headline, Deck, Byline': () => getMarkupForViewName('Image, Headline, Deck, Byline', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Headline, Deck, Byline, Links': () => getMarkupForViewName('Image, Headline, Deck, Byline, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Overline, Deck': () => getMarkupForViewName('Image, Overline, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Overline, Headline': () => getMarkupForViewName('Image, Overline, Headline', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Overline, Headline, Deck': () => getMarkupForViewName('Image, Overline, Headline, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Overline, Headline, Deck, Byline': () => getMarkupForViewName('Image, Overline, Headline, Deck, Byline', data, classes, overrides, replacementComponents, indexedComponents),
    'Image, Overline, Headline, Byline, Deck, Links': () => getMarkupForViewName('Image, Overline, Headline, Byline, Deck, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Deck': () => getMarkupForViewName('Overline, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Deck, Image': () => getMarkupForViewName('Overline, Deck, Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Headline': () => getMarkupForViewName('Overline, Headline', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Headline, Image': () => getMarkupForViewName('Overline, Headline, Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Headline, Deck': () => getMarkupForViewName('Overline, Headline, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Headline, Deck, Image': () => getMarkupForViewName('Overline, Headline, Deck, Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Headline, Image, Deck': () => getMarkupForViewName('Overline, Headline, Image, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Image': () => getMarkupForViewName('Overline, Image', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Image, Deck': () => getMarkupForViewName('Overline, Image, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Image, Headline': () => getMarkupForViewName('Overline, Image, Headline', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Image, Headline, Deck': () => getMarkupForViewName('Overline, Image, Headline, Deck', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Headline, Deck, Byline, Links': () => getMarkupForViewName('Overline, Headline, Deck, Byline, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Headline, Deck, Image, Byline, Links': () => getMarkupForViewName('Overline, Headline, Deck, Image, Byline, Links', data, classes, overrides, replacementComponents, indexedComponents),
    'Overline, Headline, Image, Deck, Links': () => getMarkupForViewName('Overline, Headline, Image, Deck, Links', data, classes, overrides, replacementComponents, indexedComponents),
  }
};

export const getViewNames = (element, customViews) => {
  const defaultViews = Object.keys(getStoryCardFromViewName());
  if (customViews && element) {
    return customViews.map(view => {
      if (view.name.indexOf(element) >= 0) {
        return view.name;
      }
      return null;
    });
  }
  if (customViews) {
    return customViews.map(view => {
      return view.name;
    });
  }
  if (element) {
    return defaultViews.filter(key => {
      return key.indexOf(element) >= 0;
    });
  }
  return defaultViews;
};

export const getBorderClasses = border =>
  border ? `border_${border} border_1` : "";

export const getCenterTextClass = centerText =>
  centerText ? "text_align_center" : "";

export const getColumnSizeClasses = (
  widescreenValues,
  desktopValues,
  tabletValues,
  mobileValues,
  isCardsPerRow
) => {
  // eslint-disable-next-line prettier/prettier
  const widescreenColumns = isCardsPerRow
    ? parseInt(12 / widescreenValues, 10)
    : widescreenValues;
  const desktopColumns = isCardsPerRow
    ? parseInt(12 / desktopValues, 10)
    : desktopValues;
  const tabletColumns = isCardsPerRow
    ? parseInt(12 / tabletValues, 10)
    : tabletValues;
  const mobileColumns = isCardsPerRow
    ? parseInt(12 / mobileValues, 10)
    : mobileValues;
  const sizeClasses =
    widescreenColumns || desktopColumns || tabletColumns || mobileColumns
      ? `col${widescreenColumns ? ` widescreen-${widescreenColumns}` : ""}
      ${desktopColumns ? ` desktop-${desktopColumns}` : ""}
      ${tabletColumns ? ` tablet-${tabletColumns}` : ""}
      ${mobileColumns ? ` mobile-${mobileColumns}` : ""}`
      : "";
  return trim(sizeClasses);
};

export const textProps = (groupName = "Feed") => {
  return {
    centerText: PropTypes.bool.tag({
      defaultValue: false,
      name: "Center Text",
      group: groupName
    }),
    boldText: PropTypes.bool.tag({
      defaultValue: false,
      name: "Bold Text",
      group: groupName
    }),
    responsiveText: PropTypes.bool.tag({
      defaultValue: false,
      name: "Responsive Text",
      group: groupName
    }),
    responsiveTextScale: PropTypes.number.tag({
      defaultValue: 0.9,
      group: groupName,
      min: 0.1,
      max: 3,
      step: 0.1,
      name: "Responsive Text Scale"
    }),
    useMarkup: PropTypes.bool.tag({
      defaultValue: true,
      group: groupName,
      name: "Use Wiki Markup"
    })
  };
};

// ToDo: split out into text vs. color props, add to generator
export const overlineProps = (includeText = true) => {
  const textProp = {
    overlineText: PropTypes.richtext.tag({
      group: "Overline",
      name: "Overline"
    })
  };
  const styleProps = {
    overlineBackgroundColor: PropTypes.string.tag({
      group: "Overline",
      name: "Overline Background Color"
    }),
    overlineBorderColor: PropTypes.string.tag({
      group: "Overline",
      name: "Overline Border Color"
    }),
    overlineColor: PropTypes.string.tag({
      group: "Overline",
      name: "Overline Color"
    }),
    overlineFont: PropTypes.oneOf(fontOptions).tag({
      defaultValue: fontOptions[0],
      group: "Overline",
      name: "Overline Font"
    }),
    overlineFontSize: PropTypes.oneOf(fontSizeOptions).tag({
      defaultValue: 12,
      group: "Overline",
      name: "Overline Font Size"
    })
  };
  return includeText
    ? {
        ...textProp,
        ...styleProps
      }
    : styleProps;
};

// ToDo: refactor text based props into function generator
export const headlineProps = (includeText = true) => {
  const textProp = {
    headlineText: PropTypes.richtext.tag({
      group: "Headline",
      name: "Headline"
    })
  };
  const styleProps = {
    headlineColor: PropTypes.string.tag({
      group: "Headline",
      name: "Headline Color"
    }),
    headlineFont: PropTypes.oneOf(fontOptions).tag({
      defaultValue: fontOptions[0],
      group: "Headline",
      name: "Headline Font"
    }),
    headlineFontSize: PropTypes.oneOf(fontSizeOptions).tag({
      group: "Headline",
      name: "Headline Font Size"
    })
  };
  return includeText
    ? {
        ...textProp,
        ...styleProps
      }
    : styleProps;
};

export const bylineProps = (includeText = true) => {
  const textProp = {
    bylineText: PropTypes.richtext.tag({
      group: "Byline",
      name: "Byline"
    })
  };
  const styleProps = {
    bylineColor: PropTypes.string.tag({
      group: "Byline",
      name: "Byline Color"
    }),
    bylineFont: PropTypes.oneOf(fontOptions).tag({
      defaultValue: fontOptions[0],
      group: "Byline",
      name: "Byline Font"
    }),
    bylineFontSize: PropTypes.oneOf(fontSizeOptions).tag({
      group: "Byline",
      name: "Byline Font Size"
    })
  };
  return includeText
    ? {
        ...textProp,
        ...styleProps
      }
    : styleProps;
};

export const deckProps = (includeText = true) => {
  const textProp = {
    deckText: PropTypes.richtext.tag({
      group: "Deck",
      name: "Deck"
    })
  };
  const styleProps = {
    deckColor: PropTypes.string.tag({
      group: "Deck",
      name: "Deck Color"
    }),
    deckFont: PropTypes.oneOf(fontOptions).tag({
      defaultValue: fontOptions[0],
      group: "Deck",
      name: "Deck Font"
    }),
    deckFontSize: PropTypes.oneOf(fontSizeOptions).tag({
      defaultValue: 14,
      group: "Deck",
      name: "Deck Font Size"
    })
  };
  return includeText
    ? {
        ...textProp,
        ...styleProps
      }
    : styleProps;
};

export const imageAlignmentProp = {
  imageAlignment: PropTypes.oneOf(imageAlignmentValues).tag({
    defaultValue: "Vertical",
    group: "Image",
    name: "Alignment"
  }),
  imageThumbnail: PropTypes.bool.tag({
    defaultValue: false,
    group: "Image",
    name: "Thumbnail (L/R only)"
  })
};

export const imageURLProp = {
  imageURL: PropTypes.string.tag({
    defaultValue: false,
    group: "Image",
    name: "URL"
  }),
  overlineButtonURL: PropTypes.string.tag({
    group: "Image",
    name: "Button URL"
  }),
};

export const createLinksProps = defaultFontSize => {
  const linkProps = {
    "Links Font Size": PropTypes.oneOf(fontSizeOptions).tag({
      defaultValue: defaultFontSize || defaultLinksFontSize,
      group: "Links"
    }),
    "Links Color": PropTypes.string.tag({
      defaultValue: "black",
      group: "Links"
    }),
    "Links Bullet Color": PropTypes.string.tag({
      group: "Links"
    })
  };
  for (let i = 1; i <= maxLinks; i += 1) {
    linkProps[`${i}_linkText`] = PropTypes.richtext.tag({
      group: "Links",
      name: `(${i}) Text`
    });
    linkProps[`${i}_linkURL`] = PropTypes.richtext.tag({
      group: "Links",
      name: `(${i}) URL`
    });
  }
  return linkProps;
};

export const overlayProps = (group = "Overlay") => {
  return {
    overlayText: PropTypes.richtext.tag({
      group,
      name: "Text"
    }),
    overlayBackgroundColor: PropTypes.string.tag({
      group,
      name: "Background Color"
    }),
    overlayTextColor: PropTypes.string.tag({
      defaultValue: "white",
      group,
      name: "Text Color"
    }),
    overlayTextFontSize: PropTypes.oneOf(fontSizeOptions).tag({
      group,
      name: "Font Size"
    })
  };
};

export const titleBarProps = (group = "Title") => {
  return {
    title: PropTypes.richtext.tag({
      group,
      name: "Title"
    }),
    titleBorderColor: PropTypes.string.tag({
      group,
      name: "Border Color"
    }),
    titleBarColor: PropTypes.string.tag({
      group,
      name: "Color"
    }),
    titleBarFont: PropTypes.oneOf(fontOptions).tag({
      group,
      name: "Font"
    }),
    titleBarFontSize: PropTypes.oneOf(fontSizeOptions).tag({
      group,
      name: "Font Size"
    }),
    titleBarType: PropTypes.oneOf(titleBarTypes).tag({
      group,
      defaultValue: titleBarTypes[0],
      name: "Type"
    })
  };
};

// ToDo: Refactor override props into function
export const createViewOverrideProps = () => {
  const views = {};
  for (let i = 1; i <= maxContentItems; i += 1) {
    const textKey = `View_${i}`;
    const value = PropTypes.oneOf(getViewNames()).tag({
      group: "Curated Views",
      name: textKey
    });
    views[textKey] = value;
  }
  return views;
};

export const createImageAlignmentOverrideProps = () => {
  const views = {};
  for (let i = 1; i <= maxContentItems; i += 1) {
    const textKey = `Image_${i}_Alignment`;
    const value = PropTypes.oneOf(imageAlignmentValues).tag({
      group: "Curated Images",
      name: textKey
    });
    views[textKey] = value;
  }
  return views;
};

export const createImageURLOverrideProps = () => {
  const views = {};
  for (let i = 1; i <= maxContentItems; i += 1) {
    const textKey = `Image_${i}_URL`;
    const value = PropTypes.string.tag({
      group: "Curated Images",
      name: textKey
    });
    views[textKey] = value;
  }
  return views;
};

export const createTextOverrideProps = () => {
  const views = {};
  for (let i = 1; i <= maxContentItems; i += 1) {
    const textKey = `Text_${i}`;
    const value = PropTypes.bool.tag({
      group: "Curated Text",
      name: `${textKey}_Centered`
    });
    views[textKey] = value;
  }
  return views;
};

export const createHeadlineOverrideProps = () => {
  const views = {};
  for (let i = 1; i <= maxContentItems; i += 1) {
    const textKey = `Headline_${i}`;
    const value = PropTypes.oneOf(fontSizeOptions).tag({
      group: "Curated Headlines",
      name: textKey
    });
    views[textKey] = value;
  }
  return views;
};

export const getThemeProps = (group = "Card") => {
  return {
    theme: PropTypes.oneOf(themes).tag({
      group: group,
      name: "Theme"
    })
  };
};

const getColumnProps = (deviceName, groupName = "Columns", name) => ({
  name: deviceName,
  group: name || groupName,
  max: 12,
  min: 1,
  step: 1
});

// ToDo: Fix sass mixins to use all devices, *hack* for now
export const columnsProps = (groupName = "Columns", name) => {
  return {
    [`widescreen${groupName}`]: PropTypes.number.tag(
      getColumnProps("Widescreen", groupName, name)
    ),
    [`desktop${groupName}`]: PropTypes.number.tag(
      getColumnProps("Desktop", groupName, name)
    ),
    [`tablet${groupName}`]: PropTypes.number.tag(
      getColumnProps("Tablet", groupName, name)
    ),
    [`mobile${groupName}`]: PropTypes.number.tag(
      getColumnProps("Mobile", groupName, name)
    )
  };
};

// ToDo: Fix sass mixins to use all devices, *hack* for now
export const cardsPerRowProps = () => {
  const props = {};
  const cards = [1, 2, 3, 4, 6];
  const devices = ["widescreen", "desktop", "tablet", "mobile"];

  devices.map(device => {
    console.log(properCasePropKey(device));
    props[`${device}CardsPerRow`] = PropTypes.oneOf(cards).tag({
      defaultValue: 1,
      group: "Cards per Row",
      name: properCasePropKey(device)
    });
  });
  return props;
};

export const spacerProps = type => {
  const group = type === "margin" ? "Margins" : "Padding";
  const spacers = {
    percent: PropTypes.bool.tag({
      group,
      name: "Percent"
    })
  };
  for (let i = 1; i <= directionValues.length - 1; i += 1) {
    const direction = `${directionValues[i]}`;
    const value = PropTypes.number.tag({
      name: direction,
      group,
      min: 0,
      max: 100,
      step: 1
    });
    spacers[`${type}${properCasePropKey(directionValues[i])}`] = value;
  }
  return spacers;
};

export const getTextClasses = (boldText, centerText, italicText) => {
  const boldClass = boldText ? "bold" : "";
  const centerTextClass = centerText ? "text_align_center" : "";
  const italicClass = italicText ? "italic" : "";
  return trim(`${boldClass} ${centerTextClass} ${italicClass}`);
};

export const getImageAlignmentClasses = (imageAlignment, view) => {
  const isImageView = view.indexOf("Image") >= 0;
  return imageAlignment && isImageView ? `image${imageAlignment}` : "";
};

export const stripBadAttributes = element => {
  if (typeof element === "string") {
    const newElement = element
      .replace(/target="[^"]*"/g, "")
      .replace(/style="[^"]*"/g, "")
      .replace(/style='[^']*'/g, "")
      .replace(/onclick="[^"]*"/g, "")
      .replace(/type="[^"]*"/g, "")
      .replace(/shape="[^"]*"/g, "")
      .replace(/align="[^"]*"/g, "");
    return newElement;
  }
  return element;
};
