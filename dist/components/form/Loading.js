"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loading;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Loading
 * @param {props} props
 * @returns
 */
function Loading(props) {
  const {
    width
  } = props;
  const widthCl = width || "100%";
  const sx = "width: ".concat(widthCl);
  return /*#__PURE__*/_react.default.createElement("div", sx, "Loading...");
}
Loading.PropTypes = {
  width: _propTypes.default.string
};