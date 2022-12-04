"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Field;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Field
 * @param {object} field
 * @param {function} fieldChanged
 * @param {string} type
 * @param {string} value 
 * @returns 
 */
function Field(_ref) {
  let {
    field,
    fieldChanged,
    type,
    value
  } = _ref;
  const [result, setresult] = (0, _react.useState)("");
  const typeNow = field.type;
  (0, _react.useEffect)(() => {
    switch (typeNow) {
      case "text":
        setresult( /*#__PURE__*/_react.default.createElement("input", {
          type: type || field.component,
          id: field.name,
          name: field.name,
          key: field.name,
          className: "form-control col-md-12",
          defaultValue: value,
          required: field.required || false,
          onChange: e => {
            // Notify the main state list of the new value
            fieldChanged(field.name, e.target.value);
          }
        }));
        break;
      case "textarea":
        setresult( /*#__PURE__*/_react.default.createElement("textarea", {
          id: field.name,
          name: field.name,
          key: field.name,
          type: type || field.component,
          className: "form-control col-md-12",
          defaultValue: value || "",
          required: field.required || false,
          onChange: e => {
            // Notify the main state list of the new value
            fieldChanged(field.name, e.target.value);
          }
        }));
        break;
      default:
        setresult( /*#__PURE__*/_react.default.createElement("input", {
          type: type || field.component,
          id: field.name,
          key: field.name,
          name: field.name,
          className: "form-control col-md-12",
          defaultValue: value,
          required: field.required || false,
          onChange: e => {
            // Notify the main state list of the new value
            fieldChanged(field.name, e.target.value);
          }
        }));
        break;
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    key: field.name,
    className: "form-group col-md-12"
  }, field.label && /*#__PURE__*/_react.default.createElement("label", {
    className: "col-md-12",
    htmlFor: field.name
  }, field.label), result);
}