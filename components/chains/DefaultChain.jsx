/* React */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

/* Components */
import TitleBar from "../features/sample/titlebar/default";

/* Configs */
import {
  borderValues,
  columnsProps,
  getColumnSizeClasses,
  titleBarTypes
} from "../features/sample/storycard/_children/_configs";

class DefaultChain extends PureComponent {
  render() {
    const {
      border,
      widescreenColumns,
      desktopColumns,
      tabletColumns,
      mobileColumns,
      title,
      titleBarType
    } = this.props.customFields;

    const borderClass =
      border && border !== "none" ? `border_${border} border_1` : "";
    const sizeClasses = getColumnSizeClasses(
      widescreenColumns,
      desktopColumns,
      tabletColumns,
      mobileColumns
    );
    const classes = `align_items_start ${borderClass} ${sizeClasses}`;

    return (
      <div
        id={this.props.id}
        className={`chain | ${classes} default grid width_full`}
      >
        {title && <TitleBar title={title} titleBarType={titleBarType} />}
        {this.props.children}
      </div>
    );
  }
}

/* eslint react/prop-types: 0 */
DefaultChain.propTypes = {
  children: PropTypes.array.isRequired,
  customFields: PropTypes.shape({
    title: PropTypes.richtext,
    titleBarType: PropTypes.oneOf(titleBarTypes).tag({
      name: "Title Type"
    }),
    border: PropTypes.oneOf(borderValues).tag({
      defaultValue: "none",
      name: "Border"
    }),
    ...columnsProps()
  }),
  id: PropTypes.string.isRequired
};

export default DefaultChain;
