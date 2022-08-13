import { LinkIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

export default function ProjectCardForSmallScreen({
  type,
  title,
  description,
  tools,
  photo,
}) {
  return (
    <div className="relative mx-5 text-white rounded-xl md:hidden">
      <Image
        src={`/${photo}`}
        alt="project photo"
        layout="fill"
        className="rounded-xl opacity-10 "
      />
      <div className="px-10 py-10  ">
        <p className="text-blue-500 text-sm ">{type}</p>
        <h1 className="my-3 text-lg font-semibold">{title}</h1>
        <p className=" text-gray-300 mb-10">{description}</p>
        <div className="flex space-x-5 flex-wrap">
          {tools?.map((e, i) => {
            return (
              <p key={i} className="text-sm">
                {e}
              </p>
            );
          })}
        </div>
        <div className="flex space-x-3 mt-10">
          <Image
            className="cursor-pointer active:scale-90 transition duration-300 ease-out"
            src="/github.png"
            alt="discord"
            width="20"
            height="20"
            layout="fixed"
          />

          <LinkIcon className="h-5 w-5 text-white cursor-pointer active:scale-90 transition duration-300 ease-out" />
        </div>
      </div>
    </div>
  );
}
