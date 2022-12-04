import React from "react";
import Field from "./Field";

const FieldGroup = ({ field, fieldChanged, values }) => {
  const fields = field.fields;

  return (
    <fieldset key={field.name} className="row col">
      <div className="col-md-12">{field.label}</div>
      {fields.map((field) => {
        return (
          <Field
            key={field.name}
            field={field}
            fieldChanged={fieldChanged}
            value={values[field.name]}
          />
        );
      })}
    </fieldset>
  );
};

export default FieldGroup;
