import React, { useEffect, useState} from "react";


export default function Field ({ field, fieldChanged, type, value }) {
    const [result, setresult] = useState('')
    const typeNow = field.type;
    useEffect(() => {
        switch (typeNow) {
            case 'text':
                setresult(<input
                type={type || field.component}
                id={field.name}
                name={field.name}
                key={field.name}
                className="form-control col-md-12"
                defaultValue={value}
                required={field.required || false}
                onChange={(e) => {
                  // Notify the main state list of the new value
                  fieldChanged(field.name, e.target.value);
                }}
              />)
                break;
            case 'textarea':
                setresult(<textarea
                id={field.name}
                name={field.name}
                key={field.name}
                type={type || field.component}
                className="form-control col-md-12"
                defaultValue={value || ''}
                required={field.required || false}
                onChange={(e) => {
                  // Notify the main state list of the new value
                  fieldChanged(field.name, e.target.value);
                }} />)
                break;

            default:
                setresult(<input
                    type={type || field.component}
                    id={field.name}
                    key={field.name}
                    name={field.name}
                    className="form-control col-md-12"
                    defaultValue={value}
                    required={field.required || false}
                    onChange={(e) => {
                      // Notify the main state list of the new value
                      fieldChanged(field.name, e.target.value);
                    }}
                  />)
                break;
        }
    }, [])

    return (
      <div key={field.name}  className="form-group col-md-12">
        {field.label && <label  className="col-md-12" htmlFor={field.name}>{field.label}</label>}
        {
            result
        }
      </div>
    );
  };

