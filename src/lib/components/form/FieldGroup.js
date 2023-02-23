import React from "react";
import Field from "./Field";
import PropTypes from "prop-types";

export default function FieldGroup(props) {
  const { field, fieldChanged, values } = props;
  const fields = field.fields;

  return (
    <fieldset key={field.name} className="row col">
      <div className="col-md-12">{field.label}</div>
      {fields.map((field) => {
        return (
          <Field
            key={field.name}
            type={field.type}
            field={field}
            fieldChanged={fieldChanged}
            value={values[field.name]}
          />
        );
      })}
    </fieldset>
  );
}

FieldGroup.PropTypes = {
  field: PropTypes.array,
  fieldChanged: PropTypes.any,
  values: PropTypes.any,
};
