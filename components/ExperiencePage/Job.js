import React from "react";

export default function Job({ companies, setSelected, selected }) {
  return (
    <div className="grid overflow-x-scroll">
      {companies?.map((element, index) => (
        <h1
          onClick={() => {
            setSelected(element);
          }}
          key={index}
          className={`${
            selected === element
              ? "text-green-500 border-green-500 bg-slate-800 "
              : "border-slate-600 text-white"
          } inline-block border-l-2 tracking-widest px-5 hover:bg-slate-800 py-3 cursor-pointer  text-sm  z-50 lg:hover:bg-slate-800 transition duration-150 ease-out`}
        >
          {element}
        </h1>
      ))}
    </div>
  );
}
