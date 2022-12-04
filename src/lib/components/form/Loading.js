import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
/**
 * Loading
 * @param {props} props 
 * @returns 
 */
export default function Loading(props) {
  const width = props.width || "100%";
  return (
    <div sx={{ width: width }}>
      <ClipLoader
        color={"#CF1717"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
