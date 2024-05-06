"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _emailjsCom = _interopRequireDefault(require("emailjs-com"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SERVICE_ID = "service_wkttc6q";
const TEMPLATE_ID = "template_q9kuuqz";
const PUBLIC_KEY = "BI03uW_ahk_Pe3Bk6";
const Contactform = () => {
  const handleOnSubmit = e => {
    e.preventDefault();
    _emailjsCom.default.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(result => {
      console.log(result.text);
      alert('Message Sent Successfully');
    }, error => {
      console.log(error.text);
      alert('Something went wrong!');
    });
    e.target.reset();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "formContainer",
    onSubmit: handleOnSubmit
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Please send me emails regarding freelance, remote work, and hybrid work opportunities from here."), /*#__PURE__*/_react.default.createElement("div", {
    className: "formElement"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "from_name"
  }, "Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "from_name",
    name: "from_name",
    placeholder: "Your name..",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "formElement"
  }, /*#__PURE__*/_react.default.createElement("label", null, "E-mail"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    id: "from_email",
    name: "from_email",
    placeholder: "Your email..",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "formElement"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "message"
  }, "Message"), /*#__PURE__*/_react.default.createElement("textarea", {
    name: "message",
    rows: "8",
    cols: "30",
    placeholder: "Your message..",
    required: true
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "formButton"
  }, "SEND")));
};
var _default = exports.default = Contactform;