import React from "react";

export default function Banner({
  showSkills,
  setShowSkills,
  setClickShowSkills,
}) {
  return (
    <div className=" text-center">
      <div className="mr-12 my-3 ">
        <p className="mr-14 md:mr-20 text-xs md:text-sm font-semibold">The</p>
        <h1 className="text-xl md:text-2xl font-bold">CoderMan</h1>
      </div>

      <button
        className="text-sm font-bold border-2 rounded-md border-white px-8 py-1 md:px-12
        active:bg-white active:text-slate-900 transition duration-300 ease-out active:scale-x-75
        lg:hover:scale-105 lg:hover:bg-white lg:hover:text-slate-900 lg:active:bg-slate-900 lg:active:text-white lg:active:scale-95 "
        onClick={() => {
          setShowSkills((prev) => !prev);
        }}
      >
        {showSkills ? "HIDE SKILLS" : "SHOW SKILLS"}
      </button>
    </div>
  );
}
