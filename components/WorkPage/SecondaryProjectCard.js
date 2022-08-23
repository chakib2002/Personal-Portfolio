import { ExternalLinkIcon, FolderIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useState } from "react";

export default function SecondaryProjectCard({ title, description, tools }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={` text-white active:scale-95 active:translate-y-0 active:ease-out bg-slate-800 px-5 py-5 sm:mx-2 mb-7 transition duration-300 ease-in cursor-pointer`}
    >
      <div className="flex justify-between mb-5">
        <FolderIcon className="h-10 w-10" />
        <div className="flex space-x-3 self-center">
          <Image
            className="mt-2 lg:hover:scale-90 active:scale-75 lg:active:scale-75 transition duration-300 ease-out"
            src="/github.png"
            width="21"
            height="21"
            layout="fixed"
            alt="github"
          />
          <ExternalLinkIcon className="h-6 w-6 lg:hover:scale-90 active:scale-75 lg:active:scale-75 transition duration-300 ease-out" />
        </div>
      </div>
      <h1
        className={`font-semibold my-2 transition duration-300 ease-in ${
          hover && "text-green-500"
        }`}
      >
        {title}
      </h1>
      <p className="text-sm text-gray-100">{description}</p>
      <div className="flex flex-wrap my-5">
        {tools?.map((element, index) => (
          <p key={index} className="text-xs mb-1 text-gray-400 mr-5">
            {element}
          </p>
        ))}
      </div>
    </div>
  );
}
