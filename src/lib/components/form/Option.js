import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function Options(props) {
  const { field, fieldChanged, value } = props;
  const selectedOption = (field, value) => {
    fieldChanged(field, value);
  };

  return (
    <div className="row col align-items-center align-middle">
      <div className="col-md-12 ">{field.label}</div>
      {field.options.map((option, index) => {
        return (
          <Fragment key={option.value}>
            <label htmlFor={option.label} className="col border align-middle">
              <input
                type={field.type}
                className="col align-middle"
                required={field.required || false}
                id={option.label}
                name={field.name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => {
                  selectedOption(field.name, e.target.value);
                }}
                multiple={field.type === "checkbox" ? true : false}
              />
              {option.label}
            </label>
            {index < field.options.length - 1 && <br />}
          </Fragment>
        );
      })}
    </div>
  );
}

Options.PropTypes = {
  field: PropTypes.any,
  fieldChanged: PropTypes.any,
  type: PropTypes.any,
  value: PropTypes.any,
};
