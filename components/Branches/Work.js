import { TerminalIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

export default function Work() {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className=" bg-white active:scale-105 lg:active:scale-100 rounded-3xl lg:hover:scale-95 transition duration-300 ease-out cursor-pointer"
    >
      <div className="lg:mt-20 lg:mb-12 hidden lg:inline-block">
        <p
          className={`${
            hover ? "opacity-100" : "opacity-0"
          } text-black text-center mx-5 pt-5 font-bold transition-opacity duration-300 ease-out text-xl`}
        >
          PROJECTS
        </p>
      </div>
      <div className="lg:hidden text-2xl mx-5 py-10 font-bold tracking-widest text-black ">
        <span>Projects</span>
      </div>
      <div className="flex justify-between mx-5 my-5 pb-5 lg:pb-0">
        <p className="tracking-widest cursor-pointer text-black font-semibold text-xs self-center">
          Work
        </p>
        <TerminalIcon className="h-5 w-5 text-black self-center" />
      </div>
    </div>
  );
}
