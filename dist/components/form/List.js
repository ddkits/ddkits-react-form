"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.to-string.js");
var _react = _interopRequireWildcard(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _animated = _interopRequireDefault(require("react-select/animated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const animatedComponents = (0, _animated.default)();
const List = _ref => {
  let {
    field,
    fieldChanged
  } = _ref;
  const [options, setoptions] = (0, _react.useState)([]);
  const setoptionsandstate = async () => {
    let final = [];
    await field.options.map(option => final.push({
      value: option.value,
      label: option.label
    }));
    setoptions(final);
  };
  (0, _react.useEffect)(() => {
    if (field.options.length > 0) {
      setoptionsandstate();
    }
  }, []);
  const setValuesOnChange = e => {
    if (field.multiple === true) {
      fieldChanged(field.name, e.map(x => x.value).toString());
    } else {
      fieldChanged(field.name, e.value);
    }
  };
  if (field.multiple === true) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, field.label), options.length > 0 && /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
      options: options,
      isMulti: true,
      isClearable: true,
      closeMenuOnSelect: false,
      components: animatedComponents,
      style: {
        zIndex: "50"
      },
      onChange: e => setValuesOnChange(e)
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, field.label), options.length > 0 && /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
      options: options,
      isClearable: true,
      closeMenuOnSelect: false,
      components: animatedComponents,
      style: {
        zIndex: "50"
      },
      onChange: e => setValuesOnChange(e)
    }));
  }
};
var _default = List;
exports.default = _default;