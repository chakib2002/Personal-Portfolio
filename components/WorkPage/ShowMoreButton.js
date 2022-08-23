import React from "react";

export default function ShowMoreButton() {
  return (
    <div className="text-center mb-10">
      <button
        className="px-5 py-3 border text-white 
      lg:hover:bg-white lg:hover:border-white active:text-slate-900 active:font-bold lg:hover:text-slate-900 lg:hover:font-bold lg:hover:scale-105 lg:hover:border transition duration-300 ease-out
      active:hover:bg-white active:hover:border-white active:border active:scale-95 lg:active:scale-95"
      >
        SHOW MORE!
      </button>
    </div>
  );
}
