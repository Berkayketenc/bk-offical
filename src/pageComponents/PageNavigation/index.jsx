import React, { useState, useEffect, useMemo } from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const PageNavigation = () => {
  const observeNumbers = useMemo(() => [0, 1, 2, 3, 4, 5], []);
  const [activeNumber, setActiveNumber] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const observeNumberRefs = observeNumbers.map((number) =>
        document.getElementById(`observe-number-${number}`)
      );
      for (let i = 0; i < observeNumberRefs.length; i++) {
        if (
          observeNumberRefs[i] &&
          observeNumberRefs[i].offsetTop <= scrollPosition + windowHeight / 2 &&
          (i === observeNumberRefs.length - 1 ||
            observeNumberRefs[i + 1].offsetTop >
              scrollPosition + windowHeight / 2)
        ) {
          setActiveNumber(observeNumbers[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [observeNumbers,setActiveNumber]);

  const handleClick = (number) => {
    const observeNumberRef = document.getElementById(
      `observe-number-${number}`
    );
    if (observeNumberRef) {
      observeNumberRef.scrollIntoView({ behavior: "smooth" });
      observeNumberRef.focus();
      setActiveNumber(number);
    }
  };

  return (
    <div className="page-navigation">
      <div className="sidebar">
        <ul className="navigation">
          {observeNumbers.map((number) => (
            <li
              key={number}
              className={`navigation-item ${
                activeNumber === number ? "active" : "passive"
              }`}
              onClick={() => handleClick(number)}
            >
              {number === 0 && (
                <CIcon
                  icon={icon.cilHome}
                  style={{ "--ci-primary-color": "black" }}
                  size="lg"
                />
              )}
              {number !== 0 && (
                <CIcon
                  className="rotating-element"
                  icon={getIconByNumber(number)}
                  size="lg"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const getIconByNumber = (number) => {
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

export default PageNavigation;
