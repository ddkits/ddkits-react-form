import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Field(props) {
  const { field, fieldChanged, type, value } = props;
  const [result, setresult] = useState("");
  useEffect(() => {
    switch (type) {
    case "text":
      setresult(
        <input
          type={type}
          id={field.name}
          name={field.name}
          className="form-control col-md-12"
          defaultValue={value}
          required={field.required || false}
          onChange={(e) => {
            // Notify the main state list of the new value
            fieldChanged(field.name, e.target.value);
          }}
        />
      );
      break;
    case "textarea":
      setresult(
        <textarea
          id={field.name}
          name={field.name}
          type={type}
          className="form-control col-md-12"
          defaultValue={value || ""}
          required={field.required || false}
          onChange={(e) => {
            // Notify the main state list of the new value
            fieldChanged(field.name, e.target.value);
          }}
        />
      );
      break;

    default:
      setresult(
        <input
          type={type}
          id={field.name}
          name={field.name}
          className="form-control col-md-12"
          defaultValue={value}
          required={field.required || false}
          onChange={(e) => {
            // Notify the main state list of the new value
            fieldChanged(field.name, e.target.value);
          }}
        />
      );
      break;
    }
  }, []);

  return (
    <div key={field.name} className="form-group col-md-12">
      {field.label && (
        <label className="col-md-12" htmlFor={field.name}>
          {field.label}
        </label>
      )}
      {result}
    </div>
  );
}

Field.PropTypes = {
  field: PropTypes.object,
  fieldChanged: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any,
};
