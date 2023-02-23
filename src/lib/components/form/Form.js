import React, { useState, useEffect } from "react";
import FieldGroup from "./FieldGroup";
import Field from "./Field";
import Option from "./Option";
import Loading from "./Loading";
import PropTypes from "prop-types";
import List from "./List";
/**
 * custom fieldMeetsCondition from object used by form for conditional use
 * @param {object} values
 * @returns
 */
const fieldMeetsCondition = (values) => (field) => {
  if (field.conditional && field.conditional.field) {
    const segments = field.conditional.field.split("_");
    const fieldId = segments[segments.length - 1];
    return values[fieldId] === field.conditional.value;
  }
  return true;
};
/**
 * Custom Form
 * @param {props} props
 * formData, thisAction
 * @returns object of values
 */
export default function Form(props) {
  // state to track the current page ID of the form
  const [message, setmessage] = useState("");
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const { formData, thisAction } = props;
  // state to track the current form data that will be displayed
  const [currentPageData, setCurrentPageData] = useState(formData[page]);

  // track the values of the form fields
  const [values, setValues] = useState({});

  // this effect will run when the `page` changes
  useEffect(() => {
    setLoading(true);
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    setValues((currentValues) => {
      const newValues = upcomingPageData.fields.reduce((obj, field) => {
        if (field.component === "field_group") {
          for (const subField of field.fields) {
            obj[subField.name] = "";
          }
        } else {
          obj[field.name] = "";
        }

        return obj;
      }, {});
      setLoading(false);
      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);

  // callback provided to components to update the main list of form values
  const fieldChanged = (fieldId, value) => {
    setError(false);
    setmessage("");
    // use a callback to find the field in the value list and update it
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });

    // this just fakes that we've updated the `currentPageData` to force a re-render in React
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  const validateFields = async () => {
    // validate required fields
    let failed = [];
    let fields = currentPageData.fields;
    await fields.forEach((x, xds) => {
      if (x.required && !values[x.name]) {
        failed[xds] = `${x.name} is required`;
        setError(true);
        return false;
      }
    });
    return failed;
  };
  const navigatePages = (direction) => async () => {
    const findNextPage = (page) => {
      const upcomingPageData = formData[page];
      if (upcomingPageData.conditional && upcomingPageData.conditional.field) {
        // we're going to a conditional page, make sure it's the right one
        const segments = upcomingPageData.conditional.field.split("_");
        const fieldId = segments[segments.length - 1];

        const fieldToMatchValue = values[fieldId];

        if (fieldToMatchValue !== upcomingPageData.conditional.value) {
          // if we didn't find a match, try the next page
          return findNextPage(direction === "next" ? page + 1 : page - 1);
        }
      }
      // all tests for the page we want to go to pass, so go to it
      return page;
    };
    await validateFields().then((x) => {
      if (x.length > 0) {
        setError(true);
        setmessage(x.join("<br/>"));
        setPage(findNextPage(page));
      } else {
        setError(false);
        setmessage("");
        setLoading(true);
        setPage(findNextPage(direction === "next" ? page + 1 : page - 1));
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    });
  };

  const nextPage = navigatePages("next");
  const prevPage = navigatePages("prev");

  const onSubmit = (values) => {
    thisAction(values);
    setPage(0);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="col-md-12 services  fadeInDown animated">
      {message !== "" && (
        <div
          className="alert alert-danger alert-dismissible dismissible  fadeInDown animated"
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        />
      )}
      <form className="form-group col-md-12" onSubmit={onSubmitForm}>
        <h3>{currentPageData.label}</h3>
        {loading ? (
          <Loading width="100%" />
        ) : (
          currentPageData.fields
            .filter(fieldMeetsCondition(values))
            .map((field, xds) => {
              switch (field.component) {
              case "field_group":
                return (
                  <div key={xds} className="col-md-12  fadeInDown animated">
                    <FieldGroup
                      field={field}
                      className="form-control col-md-12"
                      fieldChanged={fieldChanged}
                      values={values}
                      type={field.type}
                    />
                  </div>
                );
              case "options":
                return (
                  <div key={xds} className="col-md-12  ">
                    <Option
                      selected={values[field.name]}
                      field={field}
                      className="form-control col-md-12"
                      fieldChanged={fieldChanged}
                      value={values[field.name]}
                      type={field.type}
                    />
                  </div>
                );
              case "list":
                return (
                  <div key={xds} className="col-md-12  ">
                    <List
                      field={field}
                      className="form-control col-md-12"
                      fieldChanged={fieldChanged}
                      value={values[field.name]}
                      type={field.type}
                    />
                  </div>
                );
              default:
                return (
                  <div key={xds} className="col-md-12  fadeInDown animated">
                    <Field
                      field={field}
                      className="form-control col-md-12"
                      fieldChanged={fieldChanged}
                      value={values[field.name]}
                      type={field.type}
                    />
                  </div>
                );
              }
            })
        )}
        {page > 0 && <button onClick={prevPage}>Back</button>}&nbsp;
        {page < formData.length - 1 && <button onClick={nextPage}>Next</button>}
        {!error && page === formData.length - 1 && (
          <button onClick={() => onSubmit(values)}>
            {props.btntext ? props.btntext : "Submit"}
          </button>
        )}
      </form>
    </div>
  );
}

Form.PropTypes = {
  formData: PropTypes.any.isRequired,
  thisAction: PropTypes.any.isRequired,
  field: PropTypes.any,
  fieldChanged: PropTypes.any,
  type: PropTypes.any,
  value: PropTypes.any,
};
