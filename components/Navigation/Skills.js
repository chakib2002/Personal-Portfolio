import { BookOpenIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import style from "../../styles/Skills.module.css";

export default function Skills() {
  const [hover, setHover] = useState(false);
  return (
    <Link href="/Skills">
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`${style.Skill} bg-white text-black active:scale-105 lg:active:scale-0
        active:duration-300 active:ease-linear lg:h-auto rounded-3xl overflow-hidden lg:hover:scale-95 transition duration-300 ease-out cursor-pointer `}
      >
        <div className="flex h-24">
          <p
            className={`${
              hover ? "lg:animate-none" : "lg:animate-none"
            } lg:text-xl mx-5 lg:py-5 text-2xl font-bold lg:font-normal lg:tracking-normal tracking-widest lg:my-0 py-10 self-center`}
          >
            Tools & technologies
          </p>
        </div>
        <div className="flex justify-between mx-5 py-5">
          <p className="tracking-widest cursor-pointer white font-semibold text-xs self-center">
            Skills
          </p>
          <BookOpenIcon className="h-5 w-5  " />
        </div>
      </div>
    </Link>
  );
}
