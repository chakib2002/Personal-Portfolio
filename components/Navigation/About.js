import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/outline";
import style from "../../styles/About.module.css";
import Link from "next/link";

export default function About() {
  const [hover, setHover] = useState(false);
  return (
    <Link href="/About">
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`${style.aboutTitle} bg-blue-700 active:scale-105 lg:active:scale-75 lg:h-auto rounded-3xl overflow-hidden lg:hover:scale-95 transition duration-300 active:duration-300 active:ease-linear ease-in cursor-pointer`}
      >
        <div className="flex justify-between mx-5 my-5">
          <p className="bg-white text-blue-700 rounded-xl py-2 px-4 shadow-lg self-center text-xs font-bold">
            Abdelmalek Feddal
          </p>
        </div>
        <div
          className={` ${style.aboutTitle}
        hidden lg:inline-block mx-5 w-[540px] lg:text-5xl lg:w-[550px] font-semibold tracking-widest`}
        >
          <h1>Learn More About The Freelancer</h1>
        </div>
        <div className="lg:hidden text-2xl mx-5 font-bold tracking-widest ">
          <span>Learn More About The Freelancer</span>
        </div>
        <div className="mx-5 my-5 lg:my-6 lg:mt-16 text-xs font-semibold flex justify-between ">
          <p className="self-center font-semibold tracking-widest cursor-pointer ">
            About
          </p>
          <UserIcon className="h-5 w-5 self-center" />
        </div>
      </div>
    </Link>
  );
}
