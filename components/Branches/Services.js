import { BadgeCheckIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

export default function Services() {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="bg-black active:scale-105 lg:active:scale-100 rounded-3xl text-white lg:mt-5 lg:hover:scale-95 transition duration-300 ease-out cursor-pointer"
    >
      <div className="">
        <p
          className={`${
            hover ? "lg:animate-pulse" : "animate-none"
          } lg:text-xl mx-5 lg:py-5 text-2xl font-bold lg:font-normal lg:tracking-normal tracking-widest lg:my-0 py-10 `}
        >
          I help you choose the best options for your projects and platforms
        </p>
      </div>
      <div className="flex justify-between mx-5 py-5">
        <p className="tracking-widest cursor-pointer font-semibold text-xs self-center">
          Services
        </p>
        <BadgeCheckIcon className="h-5 w-5 self-center" />
      </div>
    </div>
  );
}
