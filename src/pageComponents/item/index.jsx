import React from "react";

const PageComponentItem = ({
  imageUrl,
  backgroundColor,
  observeNumber,
  button,
  text,
  children,
}) => {
  const rootClass = observeNumber === 0 ? "root-home" : "page-component-root";

  return (
    <div
      tabIndex={0}
      id={`observe-number-${observeNumber}`}
      className={rootClass}
      style={{ backgroundColor: backgroundColor }}
    >
      {imageUrl && <img src={imageUrl} alt="roots-imgs" draggable="false" />}
      {text && <p>{text}</p>}
      {button && <button className="home-button">LET'S SLIDE DOWN</button>}
      {children && children}
    </div>
  );
};

export default PageComponentItem;
