"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _iconsReact = _interopRequireDefault(require("@coreui/icons-react"));
var icon = _interopRequireWildcard(require("@coreui/icons"));
var _item = _interopRequireDefault(require("../item"));
var _ricky = _interopRequireDefault(require("../../Assest/ricky.png"));
var _javascript = _interopRequireDefault(require("../../Assest/javascript.png"));
var _python = _interopRequireDefault(require("../../Assest/python.png"));
var _react2 = _interopRequireDefault(require("../../Assest/react.png"));
var _redux = _interopRequireDefault(require("../../Assest/redux.png"));
var _sass = _interopRequireDefault(require("../../Assest/sass.png"));
var _bootstrap = _interopRequireDefault(require("../../Assest/bootstrap.png"));
var _html = _interopRequireDefault(require("../../Assest/html.webp"));
var _tw = _interopRequireDefault(require("../../Assest/tw.png"));
var _zeplin = _interopRequireDefault(require("../../Assest/zeplin.png"));
var _git = _interopRequireDefault(require("../../Assest/git.png"));
var _arti = _interopRequireDefault(require("../../Assest/arti.png"));
var _wp = _interopRequireDefault(require("../../Assest/wp.png"));
var _index = _interopRequireDefault(require("../../pageComponents/form/index"));
var _figma = _interopRequireDefault(require("../../Assest/figma.png"));
var _css = _interopRequireDefault(require("../../Assest/css.png"));
var _agile = _interopRequireDefault(require("../../Assest/agile.png"));
var _duzceUni = _interopRequireDefault(require("../../Assest/duzce-uni.png"));
var _konyaUni = _interopRequireDefault(require("../../Assest/konya-uni.png"));
var _erstream = _interopRequireDefault(require("../../Assest/erstream.jpeg"));
var _akinon = _interopRequireDefault(require("../../Assest/akinon.png"));
var _core = _interopRequireDefault(require("../../Assest/core.png"));
var _tgtImg = _interopRequireDefault(require("../../Assest/tgtImg.jpeg"));
var _samsung = _interopRequireDefault(require("../../Assest/samsung.png"));
var _underarmour = _interopRequireDefault(require("../../Assest/underarmour.png"));
var _lacoste = _interopRequireDefault(require("../../Assest/lacoste.png"));
var _uspa = _interopRequireDefault(require("../../Assest/uspa.png"));
var _cardin = _interopRequireDefault(require("../../Assest/cardin.png"));
var _converse = _interopRequireDefault(require("../../Assest/converse.png"));
var _gant = _interopRequireDefault(require("../../Assest/gant.png"));
var _exxen = _interopRequireDefault(require("../../Assest/exxen.png"));
var _vakko = _interopRequireDefault(require("../../Assest/vakko.png"));
var _next = _interopRequireDefault(require("../../Assest/next.png"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const experienceItems = [{
  img: _core.default,
  alt: "CoreExponent Logo",
  className: "corexponent",
  width: 180,
  height: 50,
  icon: icon.cifUs,
  years: "2024",
  text: "CoreExponent, based in Texas, USA, provides software, web, and mobile app solutions for businesses digital transformation needs. They also offer artificial intelligence, data analytics, and cloud services."
}, {
  img: _akinon.default,
  alt: "Akinon Logo",
  width: 180,
  height: 50,
  icon: icon.cifTr,
  years: "2022-2024",
  text: "Akinon is a software and digital solutions company specializing in e-commerce, digital marketing, and mobile app development. They offer services in CRM, payment integration, data analytics, and more."
}, {
  img: _erstream.default,
  alt: "Erstream Logo",
  width: 180,
  height: 50,
  icon: icon.cifTr,
  years: "2021-2022",
  text: "Erstream provides a full suite of OTT solutions that work on any device to streamline your broadcasting experience. Whether you are looking for accelerated speed, security and user-friendliness or want quality content in an easy format - we have got it all."
}];
const educationItems = [{
  img: _konyaUni.default,
  name: "KONYA TECHNICAL UNIVERSITY",
  degree: "MASTER OF SCIENCE IN COMPUTER ENGINEERING"
}, {
  img: _duzceUni.default,
  name: "DUZCE UNIVERSITY",
  degree: "MANAGEMENT INFORMATION SYSTEM LICENSE"
}, {
  img: _tgtImg.default,
  name: "TECHNOLOGY AND ENTREPRENEURSHIP COMMUNITY",
  degree: "FOUNDING PRESIDENT"
}];
const frontendProjects = [_exxen.default, _samsung.default, _underarmour.default, _gant.default, _converse.default, _uspa.default, _cardin.default, _lacoste.default, _vakko.default, _arti.default];
const technologies = [_javascript.default, _python.default, _react2.default, _next.default, _redux.default, _css.default, _html.default, _bootstrap.default, _tw.default, _sass.default, _figma.default, _zeplin.default, _git.default, _agile.default, _arti.default];
const ContainerComponent = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_item.default, {
    imageUrl: _ricky.default,
    backgroundColor: "",
    observeNumber: 0,
    button: "true",
    text: "Would you like to see what I can bring to the projects?"
  }), /*#__PURE__*/_react.default.createElement(_item.default, {
    imageUrl: "",
    backgroundColor: "black",
    observeNumber: 1
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "experince-root",
    id: "experince"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "experience-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "experience-title"
  }, /*#__PURE__*/_react.default.createElement("p", null, "4+ YEARS OF EXPERIENCE IN FRONTEND DEVELOPMENT.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "experience-items"
  }, experienceItems.map((item, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "experience-items-item",
    key: index
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "experience-items-item-img"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: item.img,
    draggable: "false",
    alt: item.alt,
    width: item.width,
    height: item.height,
    className: item.className === "corexponent" ? "corexponent" : "",
    style: {
      objectFit: ""
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "experience-items-item-info"
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.default, {
    className: "rotating-element",
    icon: item.icon,
    size: "sm"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "years"
  }, item.years), /*#__PURE__*/_react.default.createElement("p", null, item.text)))))))), /*#__PURE__*/_react.default.createElement(_item.default, {
    imageUrl: "",
    backgroundColor: "black",
    observeNumber: 2
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "education-root"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "education-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "education-title"
  }, /*#__PURE__*/_react.default.createElement("p", null, "MASTER EDUCATION AND UNDERGRADUATE EDUCATION AND COMMUNITIES.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "education-items"
  }, educationItems.map((item, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "education-items-item",
    key: index
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "education-items-item-img"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: item.img,
    width: "80",
    height: "80",
    alt: "education_logo",
    draggable: "false"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "education-items-item-texts"
  }, /*#__PURE__*/_react.default.createElement("h2", null, item.name), /*#__PURE__*/_react.default.createElement("h3", null, item.degree)))))))), /*#__PURE__*/_react.default.createElement(_item.default, {
    imageUrl: "",
    backgroundColor: "black",
    observeNumber: 3
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "projects-root"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "projects-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "projects-items"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "projects-items-title"
  }, /*#__PURE__*/_react.default.createElement("p", null, "SOME OF THE FRONTEND PROJECTS I'VE WORKED ON")), /*#__PURE__*/_react.default.createElement("div", {
    className: "projects-items-item"
  }, frontendProjects.map((img, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "projects-items-item-card",
    key: index
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: "",
    draggable: "false",
    className: index === 9 ? "customimg" : ""
  })))))))), /*#__PURE__*/_react.default.createElement(_item.default, {
    imageUrl: "",
    backgroundColor: "black",
    observeNumber: 4
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tech-root",
    id: "tech"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tech-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tech-items"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tech-items-title"
  }, /*#__PURE__*/_react.default.createElement("p", null, "THE TECHNOLOGY I UTILIZE IN MY PROFESSIONAL PROJECTS IS MY TECH.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "tech-items-item"
  }, technologies.map((img, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "tech-items-item-card",
    key: index
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: "",
    draggable: "false"
  })))), /*#__PURE__*/_react.default.createElement("p", {
    className: "tech-desp"
  }, "As a software engineer specializing in frontend development, my vision is to achieve the most effective outcomes for the current problem or project by utilizing solutions and technologies necessary for it. I do not adhere to any language or framework fanaticism."))))), /*#__PURE__*/_react.default.createElement(_item.default, {
    imageUrl: "",
    backgroundColor: "white",
    observeNumber: 5
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-root",
    id: "contact"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "contact-title"
  }, "YOU CAN CONTACT ME!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-content"
  }, /*#__PURE__*/_react.default.createElement(_index.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-vertical"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "badge-base LI-profile-badge",
    "data-locale": "en_EN",
    "data-size": "large",
    "data-theme": "light",
    "data-type": "VERTICAL",
    "data-vanity": "berkay-ketenci-a20473131",
    "data-version": "v1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "badge-base__link LI-simple-link",
    "aria-label": "Linkedin",
    href: "https://tr.linkedin.com/in/berkay-ketenci-a20473131?trk=profile-badge"
  })), /*#__PURE__*/_react.default.createElement("img", {
    className: "img-wp",
    src: _wp.default,
    width: "250",
    height: "300",
    alt: "",
    draggable: "false"
  })))))));
};
var _default = exports.default = ContainerComponent;