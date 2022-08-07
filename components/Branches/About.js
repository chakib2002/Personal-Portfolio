import React, { useState } from "react";
import { ChevronDoubleDownIcon, GlobeIcon } from "@heroicons/react/outline";
import style from "../../styles/About.module.css";

export default function About() {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="bg-blue-700 rounded-3xl overflow-hidden lg:hover:scale-95 transition duration-300 ease-out cursor-pointer"
    >
      <div className="flex justify-between mx-5 my-5">
        <p className="bg-white text-blue-700 rounded-xl py-2 px-4 shadow-lg self-center text-xs font-bold">
          Abdelmalek Feddal
        </p>
        <div
          className="self-center lg:hover:text-blue-700 py-2 px-2 lg:hover:bg-blue-50 rounded-full
        transition duration-300 cursor-pointer"
        >
          <GlobeIcon className="h-6 w-6 " />
        </div>
      </div>
      <div
        className={`${!hover && style.aboutTitle} 
        mx-5 text-2xl w-[540px] lg:text-5xl lg:w-[550px] font-bold tracking-widest my-10 flex `}
      >
        <span>LEARN MORE ABOUT THE FREELANCER</span>
      </div>

      <div className="mx-5 my-5 text-xs font-semibold flex justify-between">
        <p className="self-center tracking-widest cursor-pointer ">About</p>
        <div
          className=" cursor-pointer py-2 px-2 self-center lg:hover:bg-blue-100 lg:hover:text-blue-700 rounded-full 
        transition duration-300 lg:hover:animate-none"
        >
          <ChevronDoubleDownIcon className="h-5 w-5 opacity-70 active:opacity-100 lg:hover:opacity-100 animate-bounce lg:hover:animate-none" />
        </div>
      </div>
    </div>
  );
}
