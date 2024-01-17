// Header.jsx
import React from "react";

const Header = ({ cartItemCount }) => {
  return (
    <header className="bg-blue-500 p-4 text-white shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Website Name</h1>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 21h9a2 2 0 0 0 2-2V7a5.978 5.978 0 0 0-2-4.472"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 21V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12m4-6h6"
            ></path>
          </svg>
          <span>{cartItemCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
