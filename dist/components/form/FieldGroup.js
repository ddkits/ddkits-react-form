"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _Field = _interopRequireDefault(require("./Field"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FieldGroup = _ref => {
  let {
    field,
    fieldChanged,
    values
  } = _ref;
  const fields = field.fields;
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    key: field.name,
    className: "row col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, field.label), fields.map(field => {
    return /*#__PURE__*/_react.default.createElement(_Field.default, {
      key: field.name,
      field: field,
      fieldChanged: fieldChanged,
      value: values[field.name]
    });
  }));
};
var _default = FieldGroup;
exports.default = _default;