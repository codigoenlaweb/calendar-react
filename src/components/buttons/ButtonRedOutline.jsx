import React from "react";
import PropTypes from 'prop-types';

export const ButtonRedOutline = ({buttonText, action, icon}) => {
  const onAction = () => {
    action()
  }

  return (
    <button
      onClick={onAction}
      type="button"
      className="text-red-600 group hover:text-red-700 focus:text-red-700 focus:outline-none font-medium rounded-md flex flex-wrap justify-center items-center text-sm w-full py-0.5 px-2 text-center border-2 border-red-600 hover:border-red-700 focus:border-red-700 transition-colors"
    >
        {!!icon && <div className="group-hover:fill-red-800 fill-red-600">{icon()}</div>}
      {buttonText}
    </button>
  );
};

ButtonRedOutline.propTypes = {
  buttonText: PropTypes.string.isRequired,
}