import React from "react";

export const PasswordInput = () => {
  return (
    <div className="relative mb-3 w-full max-w-xs">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          className="w-6 h-5 fill-gray-500 dark:fill-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <g fill="none">
            <path d="M0 0h24v24H0V0z" />
            <path d="M0 0h24v24H0V0z" opacity=".87" />
          </g>
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
        </svg>
      </div>
      <input
        type="password"
        id="input-group-1"
        className="bg-gray-50 border border-gray-300 outline-none focus:ring-2 focus:ring-opacity-20 focus:ring-blue-500 focus:border-blue-400 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Password"
      />
    </div>
  );
};
