import React, { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  wordsToCollapse: PropTypes.number.isRequired,
  initialOpen: PropTypes.bool,
  expandText: PropTypes.string,
  collapseText: PropTypes.string,
};

function TextExpander({
  children,
  wordsToCollapse = 10,
  containerClass = "reusable-component",
  expandText = "Show more",
  collapseText = "Show less",
  buttonColor = "blue",
  initialOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const buttonStyles = {
    border: 0,
    backgroundColor: "none",
    color: buttonColor,
    cursor: "pointer",
    font: "inherit",
    marginLeft: "6px",
  };

  const displayText = isOpen
    ? children
    : children.split(" ").slice(0, wordsToCollapse).join(" ") + "...";

  return (
    <div className={containerClass}>
      <span>{displayText}</span>
      <button style={buttonStyles} onClick={() => setIsOpen((c) => !c)}>
        {isOpen ? collapseText : expandText}
      </button>
    </div>
  );
}

export default TextExpander;
