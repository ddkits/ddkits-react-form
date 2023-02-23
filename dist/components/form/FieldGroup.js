"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FieldGroup;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _Field = _interopRequireDefault(require("./Field"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function FieldGroup(props) {
  const {
    field,
    fieldChanged,
    values
  } = props;
  const fields = field.fields;
  return /*#__PURE__*/_react.default.createElement("fieldset", {
    key: field.name,
    className: "row col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, field.label), fields.map(field => {
    return /*#__PURE__*/_react.default.createElement(_Field.default, {
      key: field.name,
      type: field.type,
      field: field,
      fieldChanged: fieldChanged,
      value: values[field.name]
    });
  }));
}
FieldGroup.PropTypes = {
  field: _propTypes.default.array,
  fieldChanged: _propTypes.default.any,
  values: _propTypes.default.any
};