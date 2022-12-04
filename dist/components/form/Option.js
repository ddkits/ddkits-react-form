"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Options = _ref => {
  let {
    field,
    fieldChanged,
    value
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "row col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, field.label), field.options.map((option, index) => {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: option.value,
      className: "col row"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: option.value,
      className: "col"
    }, option.label, " "), /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      className: "col",
      required: field.required || false,
      id: option.value,
      name: field.name,
      value: option.value,
      checked: value === option.value,
      onChange: e => {
        fieldChanged(field.name, e.target.value);
      }
    }));
  }));
};
var _default = Options;
exports.default = _default;