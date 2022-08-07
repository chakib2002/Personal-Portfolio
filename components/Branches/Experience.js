import { BriefcaseIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import style from "../../styles/Experience.module.css";

export default function Experience() {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="bg-yellow-400 my-5 lg:my-0 rounded-3xl lg:hover:scale-95 transition duration-300 ease-out cursor-pointer overflow-hidden"
    >
      <div className="mt-20 mb-12 hidden lg:inline-block">
        <p
          className={`${hover && style.ExperienceTitle}
          text-black text-xl mx-5 `}
        >
          Lorem ipsum olegara inta selium
        </p>
      </div>
      <div className="lg:hidden text-2xl mx-5 font-bold tracking-widest my-10 text-black ">
        <span>Lorem ipsum opgara monarem</span>
      </div>
      <div className="flex justify-between mx-5 my-5">
        <p className="tracking-widest cursor-pointer text-black font-semibold text-xs self-center">
          Experience
        </p>
        <BriefcaseIcon className="h-5 w-5 text-black self-center" />
      </div>
    </div>
  );
}
