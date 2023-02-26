import React from "react";
import PropTypes from "prop-types";

/**
 * Loading
 * @param {props} props
 * @returns
 */
export default function Loading(props) {
  const { width } = props;
  const widthCl = width || "100%";
  const sx = `width: ${widthCl}`;
  return <div {...sx}>Loading...</div>;
}

Loading.PropTypes = {
  width: PropTypes.string,
};
