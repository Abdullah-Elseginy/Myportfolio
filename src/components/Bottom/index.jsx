import React from "react";
import PropTypes from "prop-types";

const CustomBottom = ({
  text,
  textStyle,
  title,
  onClick,
  styles,
  buttonStyles,
  rigthIcon,
}) => {
  return (
    <div className={`flex justify-center ${styles}`}>
      <button
        className={`p-2 h-10 bg-mint-blue text-light-pink hover:bg-mint-green hover:scale-105 transition-transform duration-300 rounded-md flex items-center justify-between shadow-lg ${buttonStyles}`}
        title={title}
        onClick={onClick}
      >
        <h4 className={`font-bold ${textStyle}`}>{text}</h4>
        {rigthIcon && rigthIcon}
      </button>
    </div>
  );
};

CustomBottom.propTypes = {
  text: PropTypes.string.isRequired, // Text to display on the button
  title: PropTypes.string, // Tooltip text
  onClick: PropTypes.func.isRequired, // Function to execute on click
  styles: PropTypes.string, // Additional styles for the container
  buttonStyles: PropTypes.string, // Additional styles for the button
  textStyle: PropTypes.string, // Additional styles for the text within the button
};

CustomBottom.defaultProps = {
  title: "Button", // Default title
  styles: "", // No additional container styles by default
  buttonStyles: "", // No additional button styles by default
};

export default CustomBottom;
