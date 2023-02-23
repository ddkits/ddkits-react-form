import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
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
  return (
    <div {...sx}>
      <ClipLoader
        color={"#CF1717"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

Loading.PropTypes = {
  width: PropTypes.string,
};
