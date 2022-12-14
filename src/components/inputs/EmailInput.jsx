import React from "react";
import PropTypes from "prop-types";

export const EmailInput = ({
  id,
  name,
  value,
  onChange,
  placeholder = "Email addres",
}) => {
  return (
    <div className="relative w-full">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      </div>
      <input
        type="email"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 outline-none focus:ring-2 focus:ring-opacity-20 focus:ring-blue-500 focus:border-blue-400 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
      />
    </div>
  );
};

EmailInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};
