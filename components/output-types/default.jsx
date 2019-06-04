import React from "react";
import PropTypes from "prop-types";

const OutputType = props => {
  const { arcSite } = props;

  return (
    <html>
      <head>
        <title>
          {props.metaValue("title") || props.siteProperties.defaultSiteTitle}
        </title>
        <props.MetaTags />
        <props.Libs />
        <props.CssLinks />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script src="https://s3.amazonaws.com/arc-subs-test/sdk/sdk-sales.min.js" />

        <script src="https://s3.amazonaws.com/arc-subs-test/sdk/sdk-identity.min.js" />
        <link
          rel="stylesheet"
          href={props.deployment(
            `${props.contextPath}/resources/dist/${arcSite}/css/style.css`
          )}
        />
        <link
          href="https://fonts.googleapis.com/css?family=EB+Garamond:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
        <script
          src={props.deployment(
            `${props.contextPath}/resources/dist/${arcSite}/js/index.js`
          )}
        />
      </head>
      <body>
        <div id="fusion-app" className="fusion-app grid">
          {props.children}
        </div>
        <props.Fusion />
      </body>
    </html>
  );
};

export default OutputType;

OutputType.propTypes = {
  metaValue: PropTypes.func,
  siteProperties: PropTypes.object,
  deployment: PropTypes.func,
  contextPath: PropTypes.string,
  children: PropTypes.node,
  arcSite: PropTypes.string
};
