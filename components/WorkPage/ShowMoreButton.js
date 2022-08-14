import React from "react";

export default function ShowMoreButton() {
  return (
    <div className="text-center mb-10">
      <button
        className="px-5 py-3 border text-white 
      lg:hover:bg-green-500 lg:hover:border-green-500 lg:hover:scale-105 lg:hover:border transition duration-300 ease-out
      active:hover:bg-green-500 active:hover:border-green-500 active:border active:scale-95 lg:active:scale-95"
      >
        SHOW MORE!
      </button>
    </div>
  );
}
