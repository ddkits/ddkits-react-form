"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loading;
var _react = _interopRequireDefault(require("react"));
var _ClipLoader = _interopRequireDefault(require("react-spinners/ClipLoader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Loading(props) {
  const width = props.width || '100%';
  return /*#__PURE__*/_react.default.createElement("div", {
    sx: {
      width: width
    }
  }, /*#__PURE__*/_react.default.createElement(_ClipLoader.default, {
    color: '#CF1717',
    size: 150,
    "aria-label": "Loading Spinner",
    "data-testid": "loader"
  }));
}