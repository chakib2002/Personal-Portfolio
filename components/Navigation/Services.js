import { BadgeCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import style from "../../styles/Services.module.css";

export default function Services() {
  const [hover, setHover] = useState(false);
  return (
    <Link href="/Services">
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`${style.Services} bg-black active:scale-105 lg:active:scale-75
        active:duration-300 active:ease-linear rounded-3xl text-white lg:hover:scale-95 transition duration-300 ease-out cursor-pointer`}
      >
        <div className="">
          <p
            className={`${
              hover ? "lg:animate-none" : "animate-none"
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
    </Link>
  );
}
