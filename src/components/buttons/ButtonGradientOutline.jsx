import React from "react";
import PropTypes from 'prop-types';

export const ButtonGradientOutline = ({buttonText, action}) => {
  const onAction = () => {
    action()
  }

  return (
    <button onClick={onAction} className="relative w-full max-w-xs inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white group-focus::from-cyan-500 group-focus::to-blue-500 focus:text-white dark:text-white focus:outline-none">
      <span className="relative w-full py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 group-focus:bg-opacity-0">
        {buttonText}
      </span>
    </button>
  );
};

ButtonGradientOutline.propTypes = {
  buttonText: PropTypes.string.isRequired
}
