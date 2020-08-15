import React from "react";

const Alert = ({ type, message }) => {
  return (
    <div
      className={`px-4 py-3 border-l-4 shadow-md rounded ${
        type
          ? "bg-teal-100 border-teal-500 text-teal-500"
          : "bg-red-100 border-red-500 text-red-600"
      }`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className={`fill-current h-6 w-6 mr-4 ${
              type ? "text-teal-500" : "text-red-600"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">{type ? "Success!" : "Error!"}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
