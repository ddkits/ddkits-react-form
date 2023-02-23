"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Options;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Options(props) {
  const {
    field,
    fieldChanged,
    value
  } = props;
  const selectedOption = (field, value) => {
    fieldChanged(field, value);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row col align-items-center align-middle"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 "
  }, field.label), field.options.map((option, index) => {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: option.value
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: option.label,
      className: "col border align-middle"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: field.type,
      className: "col align-middle",
      required: field.required || false,
      id: option.label,
      name: field.name,
      value: option.value,
      checked: value === option.value,
      onChange: e => {
        selectedOption(field.name, e.target.value);
      },
      multiple: field.type === "checkbox" ? true : false
    }), option.label), index < field.options.length - 1 && /*#__PURE__*/_react.default.createElement("br", null));
  }));
}
Options.PropTypes = {
  field: _propTypes.default.any,
  fieldChanged: _propTypes.default.any,
  type: _propTypes.default.any,
  value: _propTypes.default.any
};