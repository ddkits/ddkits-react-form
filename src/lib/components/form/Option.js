import React, { Fragment } from "react";

/**
 * Options
 * @param {object} field
 * @param {function} fieldChanged
 * @param {string} value 
 * @returns 
 */
const Options = ({ field, fieldChanged, value }) => {
  return (
    <div className="row col">
      <div className="col-md-12">{field.label}</div>
      {field.options.map((option, index) => {
        return (
          <Fragment key={option.value} className="col row">
            <label htmlFor={option.value} className="col">
              {option.label}{" "}
            </label>
            <input
              type="radio"
              className="col"
              required={field.required || false}
              id={option.value}
              name={field.name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => {
                fieldChanged(field.name, e.target.value);
              }}
            />

            {/* {index < field.options.length - 1 && <br />} */}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Options;
