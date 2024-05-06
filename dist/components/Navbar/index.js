"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _logo = _interopRequireDefault(require("../../Assest/logo.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Navbar = () => {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "logo",
    draggable: "false"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-items"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#contact"
  }, "Freelancer"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#contact"
  }, "Contact"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#tech"
  }, "Tech Pro"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#experince"
  }, "Experince Pro"))));
};
var _default = exports.default = Navbar;