"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _iconsReact = _interopRequireDefault(require("@coreui/icons-react"));
var icon = _interopRequireWildcard(require("@coreui/icons"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PageNavigation = () => {
  const observeNumbers = (0, _react.useMemo)(() => [0, 1, 2, 3, 4, 5], []);
  const [activeNumber, setActiveNumber] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const observeNumberRefs = observeNumbers.map(number => document.getElementById("observe-number-".concat(number)));
      for (let i = 0; i < observeNumberRefs.length; i++) {
        if (observeNumberRefs[i] && observeNumberRefs[i].offsetTop <= scrollPosition + windowHeight / 2 && (i === observeNumberRefs.length - 1 || observeNumberRefs[i + 1].offsetTop > scrollPosition + windowHeight / 2)) {
          setActiveNumber(observeNumbers[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [observeNumbers]);
  const handleClick = number => {
    const observeNumberRef = document.getElementById("observe-number-".concat(number));
    if (observeNumberRef) {
      observeNumberRef.scrollIntoView({
        behavior: "smooth"
      });
      observeNumberRef.focus();
      setActiveNumber(number);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "page-navigation"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navigation"
  }, observeNumbers.map(number => /*#__PURE__*/_react.default.createElement("li", {
    key: number,
    className: "navigation-item ".concat(activeNumber === number ? "active" : ""),
    onClick: () => handleClick(number)
  }, number === 0 && /*#__PURE__*/_react.default.createElement(_iconsReact.default, {
    icon: icon.cilHome,
    style: {
      "--ci-primary-color": "black"
    },
    size: "lg"
  }), number !== 0 && /*#__PURE__*/_react.default.createElement(_iconsReact.default, {
    className: "rotating-element",
    icon: getIconByNumber(number),
    size: "lg"
  }))))));
};
const getIconByNumber = number => {
  switch (number) {
    case 1:
      return icon.cilBriefcase;
    case 2:
      return icon.cilEducation;
    case 3:
      return icon.cilStar;
    case 4:
      return icon.cilBorderAll;
    case 5:
      return icon.cilContact;
    default:
      return null;
  }
};
var _default = exports.default = PageNavigation;