import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function SoftSkillCard({ skill, story, stars, image }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="mx-5 snap-start cursor-default lg:mx-10 text-center w-64 text-white mb-10 hover:scale-105 transition duration-300 ease-in  "
    >
      <div className="py-5">
        <Image
          className=""
          src={image}
          alt="softskill"
          width="1107"
          height="603"
          layout="responsive"
        />
        <div className="">
          <h1 className="font-semibold mt-2 text-base">{skill}</h1>
          <p
            className={`text-xs text-slate-400 mt-1  transition duration-300 ease-in`}
          >
            {story}
          </p>
          <div
            className={`  flex space-x-1 justify-center mt-3 transition duration-300 ease-in`}
          >
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
