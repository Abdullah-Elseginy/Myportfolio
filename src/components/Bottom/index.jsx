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
        title={title}
        onClick={onClick}
        className={`
          group
          relative
          inline-flex
          items-center
          gap-2
          px-5
          py-3
          bg-gradient-to-r
          from-mint-blue
          to-cyan-500
          text-light-pink
          hover:from-mint-green
          hover:to-emerald-400
          hover:scale-[1.03]
          focus:ring-2
          focus:ring-offset-2
          focus:ring-cyan-500
          font-semibold
          rounded-xl
          shadow-md
          transition-all
          duration-300
          ${buttonStyles}
        `}
      >
        <span className={`text-sm md:text-base ${textStyle}`}>
          {text}
        </span>
        {rigthIcon && (
          <span className="text-lg ml-1 transition-transform group-hover:translate-x-1">
            {rigthIcon}
          </span>
        )}
      </button>
    </div>
  );
};

CustomBottom.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.string,
  buttonStyles: PropTypes.string,
  textStyle: PropTypes.string,
  rigthIcon: PropTypes.node,
};

CustomBottom.defaultProps = {
  title: "Button",
  styles: "",
  buttonStyles: "",
  textStyle: "",
};

export default CustomBottom;
