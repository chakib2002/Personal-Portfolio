import { BriefcaseIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import style from "../../styles/Experience.module.css";

export default function Experience() {
  const [hover, setHover] = useState(false);
  return (
    <Link href="Experience">
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="bg-yellow-400 active:scale-105 lg:active:scale-100 my-5 lg:my-0 rounded-3xl lg:hover:scale-95 transition duration-300 ease-out cursor-pointer overflow-hidden"
      >
        <div className="mt-24 mb-8 hidden lg:inline-block">
          <p
            className={`${hover && style.ExperienceTitle}
          text-black text-xl pb-4 lg:text-2xl mx-5 lg:font-bold `}
          >
            Professional Experience
          </p>
        </div>
        <div className="lg:hidden text-2xl mx-5 font-bold tracking-widest my-10 text-black ">
          <span>Professional Experience</span>
        </div>
        <div className="flex justify-between mx-5 my-5">
          <p className="tracking-widest cursor-pointer text-black font-semibold text-xs self-center">
            Experience
          </p>
          <BriefcaseIcon className="h-5 w-5 text-black self-center" />
        </div>
      </div>
    </Link>
  );
}
