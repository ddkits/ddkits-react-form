"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loading;
var _react = _interopRequireDefault(require("react"));
var _ClipLoader = _interopRequireDefault(require("react-spinners/ClipLoader"));
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
  return /*#__PURE__*/_react.default.createElement("div", sx, /*#__PURE__*/_react.default.createElement(_ClipLoader.default, {
    color: "#CF1717",
    size: 150,
    "aria-label": "Loading Spinner",
    "data-testid": "loader"
  }));
}
Loading.PropTypes = {
  width: _propTypes.default.string
};