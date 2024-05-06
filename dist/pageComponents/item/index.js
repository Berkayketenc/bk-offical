"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PageComponentItem = _ref => {
  let {
    imageUrl,
    backgroundColor,
    observeNumber,
    button,
    text,
    children
  } = _ref;
  const rootClass = observeNumber === 0 ? "root-home" : "page-component-root";
  return /*#__PURE__*/_react.default.createElement("div", {
    tabIndex: 0,
    id: "observe-number-".concat(observeNumber),
    className: rootClass,
    style: {
      backgroundColor: backgroundColor
    }
  }, imageUrl && /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    alt: "roots-imgs",
    draggable: "false"
  }), text && /*#__PURE__*/_react.default.createElement("p", null, text), button && /*#__PURE__*/_react.default.createElement("button", {
    className: "home-button"
  }, "LET'S SLIDE DOWN"), children && children);
};
var _default = exports.default = PageComponentItem;