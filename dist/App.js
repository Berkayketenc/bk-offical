"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
var _Header = _interopRequireDefault(require("./components/Header"));
var _Content = _interopRequireDefault(require("./components/Content"));
var _PageNavigation = _interopRequireDefault(require("./pageComponents/PageNavigation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app-root-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-container",
    style: {
      marginRight: "65px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_Content.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      zIndex: 9999
    }
  }, /*#__PURE__*/_react.default.createElement(_PageNavigation.default, null)));
}
var _default = exports.default = App;