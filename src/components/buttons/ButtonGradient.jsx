import React from "react";
import PropTypes from 'prop-types';

export const ButtonGradient = ({buttonText, action, type}) => {
  const onAction = () => {
    action()
  }

  return (
    <button
      onClick={onAction}
      type={type}
      className="text-white bg-gradient-to-r from-cyan-500 max-w-xs to-blue-500 hover:bg-gradient-to-bl focus:bg-gradient-to-bl focus:outline-none font-medium rounded-full text-sm w-full py-2.5 text-center mr-2 mb-2"
    >
      {buttonText}
    </button>
  );
};

ButtonGradient.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
}