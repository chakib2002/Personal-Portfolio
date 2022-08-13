import React from "react";

export default function ShowMoreButton() {
  return (
    <div className="text-center mb-10">
      <button
        className="px-5 py-3 border text-white 
      lg:hover:bg-blue-900 lg:hover:border-blue-900 lg:hover:scale-105 lg:hover:border transition duration-300 ease-out
      active:hover:bg-blue-900 active:hover:border-blue-900 active:border active:scale-95 lg:active:scale-95"
      >
        SHOW MORE!
      </button>
    </div>
  );
}
