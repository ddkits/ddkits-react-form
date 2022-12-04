"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.promise.js");
var _react = _interopRequireWildcard(require("react"));
var _FieldGroup = _interopRequireDefault(require("./FieldGroup"));
var _Field = _interopRequireDefault(require("./Field"));
var _Option = _interopRequireDefault(require("./Option"));
var _Loading = _interopRequireDefault(require("./Loading"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * custom fieldMeetsCondition from object used by form for conditional use
 * @param {object} values
 * @returns
 */
const fieldMeetsCondition = values => field => {
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
function Form(props) {
  // state to track the current page ID of the form
  const [message, setmessage] = (0, _react.useState)('');
  const [error, setError] = (0, _react.useState)(false);
  const [page, setPage] = (0, _react.useState)(0);
  const [loading, setLoading] = (0, _react.useState)(true);
  const {
    formData,
    thisAction
  } = props;
  // state to track the current form data that will be displayed
  const [currentPageData, setCurrentPageData] = (0, _react.useState)(formData[page]);

  // track the values of the form fields
  const [values, setValues] = (0, _react.useState)({});

  // this effect will run when the `page` changes
  (0, _react.useEffect)(() => {
    setLoading(true);
    const upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    setValues(currentValues => {
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
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);

  // callback provided to components to update the main list of form values
  const fieldChanged = (fieldId, value) => {
    setError(false);
    setmessage('');
    // use a callback to find the field in the value list and update it
    setValues(currentValues => {
      currentValues[fieldId] = value;
      return currentValues;
    });

    // this just fakes that we've updated the `currentPageData` to force a re-render in React
    setCurrentPageData(currentPageData => {
      return Object.assign({}, currentPageData);
    });
  };
  const validateFields = async () => {
    // validate required fields
    let failed = [];
    let fields = currentPageData.fields;
    await fields.forEach((x, xds) => {
      if (x.required && !values[x.name]) {
        failed[xds] = "".concat(x.name, " is required");
        setError(true);
        return false;
      }
    });
    return failed;
  };
  const navigatePages = direction => async () => {
    const findNextPage = page => {
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
    await validateFields().then(x => {
      console.log(x);
      if (x.length > 0) {
        setError(true);
        setmessage(x.join("<br/>"));
        setPage(findNextPage(page));
      } else {
        setError(false);
        setmessage('');
        setPage(findNextPage(direction === "next" ? page + 1 : page - 1));
      }
    });
  };
  const nextPage = navigatePages("next");
  const prevPage = navigatePages("prev");
  const onSubmit = values => {
    thisAction(values);
    setPage(0);
  };
  const onSubmitForm = e => {
    e.preventDefault();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 services animate-box fadeInDown animated"
  }, message !== '' && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger alert-dismissible dismissible animate-box fadeInDown animated",
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), /*#__PURE__*/_react.default.createElement("form", {
    className: "form-group col-md-12",
    onSubmit: onSubmitForm
  }, /*#__PURE__*/_react.default.createElement("h3", null, currentPageData.label), loading ? /*#__PURE__*/_react.default.createElement(_Loading.default, null) : currentPageData.fields.filter(fieldMeetsCondition(values)).map((field, xds) => {
    switch (field.component) {
      case "field_group":
        return /*#__PURE__*/_react.default.createElement("div", {
          key: xds,
          className: "col-md-12 animate-box fadeInDown animated"
        }, /*#__PURE__*/_react.default.createElement(_FieldGroup.default, {
          field: field,
          className: "form-control col-md-12",
          fieldChanged: fieldChanged,
          values: values
        }));
      case "options":
        return /*#__PURE__*/_react.default.createElement("div", {
          key: xds,
          className: "col-md-12 animate-box fadeInDown animated"
        }, /*#__PURE__*/_react.default.createElement(_Option.default, {
          field: field,
          className: "form-control col-md-12",
          fieldChanged: fieldChanged,
          value: values[field.name]
        }));
      default:
        return /*#__PURE__*/_react.default.createElement("div", {
          key: xds,
          className: "col-md-12 animate-box fadeInDown animated"
        }, /*#__PURE__*/_react.default.createElement(_Field.default, {
          field: field,
          className: "form-control col-md-12",
          fieldChanged: fieldChanged,
          value: values[field.name]
        }));
    }
  }), page > 0 && /*#__PURE__*/_react.default.createElement("button", {
    onClick: prevPage
  }, "Back"), "\xA0", page < formData.length - 1 && /*#__PURE__*/_react.default.createElement("button", {
    onClick: nextPage
  }, "Next"), !error && page === formData.length - 1 && /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => onSubmit(values)
  }, props.btntext ? props.btntext : 'Submit')));
}
;