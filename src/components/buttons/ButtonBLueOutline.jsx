import React from "react";
import PropTypes from 'prop-types';

export const ButtonBlueOutline = ({buttonText, action, icon, type=null}) => {
  const onAction = () => {
    action()
  }

  return (
    <button
      onClick={onAction}
      type={type}
      className="text-sky-600 group hover:text-sky-700 focus:text-sky-700 focus:outline-none font-medium rounded-md flex justify-center flex-wrap items-center text-sm w-full py-0.5 px-2 text-center border-2 border-sky-600 hover:border-sky-700 focus:border-sky-700 transition-colors"
    >
        {!!icon && <div className="group-hover:fill-sky-800 fill-sky-600">{icon()}</div>}
      {buttonText}
    </button>
  );
};

ButtonBlueOutline.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
}