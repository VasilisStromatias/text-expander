import React from "react";

function TextExpander({
  children,
  wordsToCollapse = 75,
  containerClass = "reusable-component",
  expandText = "Show more",
  collapseText = "Show less",
  buttonColor = "blue",
}) {
  const buttonStyles = {
    border: 0,
    padding: 0,
    backgroundColor: "transparent",
    color: buttonColor,
  };

  const paragraphStyles = {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: `${wordsToCollapse}ch`,
  };

  return (
    <div className={containerClass}>
      <p style={paragraphStyles}>{children}</p>
      <button style={buttonStyles}>{expandText}</button>
    </div>
  );
}

export default TextExpander;
