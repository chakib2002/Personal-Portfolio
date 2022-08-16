import { LinkIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

export default function ProjectCardForLargeScreen({
  tools,
  type,
  title,
  description,
  rev,
  photo,
}) {
  return (
    <div className="mx-5 lg:mx-10 text-white ">
      {rev ? (
        <div className=" flex justify-center space-x-5">
          <div className="relative h-[300px] w-[600px]">
            <Image
              className=" cursor-pointer opacity-70 hover:opacity-100 transition duration-300 ease-in "
              src={`/${photo}`}
              layout="responsive"
              width="1440"
              height="725"
              alt="project code"
            />
          </div>
          <div className="relative my-auto">
            <h2 className="text-green-500 text-sm ">{type}</h2>
            <h1 className="my-3 text-lg font-semibold">{title}</h1>
            <p className=" bg-green-900 opacity-80 px-8 py-5 text-sm relative md:right-20 my-5 w-[450px]">
              {description}
            </p>
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
      ) : (
        <div className=" flex justify-center space-x-5">
          <div className="relative my-auto text-right">
            <h2 className="text-green-500 text-sm ">{type}</h2>
            <h1 className="my-3 text-lg font-semibold">{title}</h1>
            <p className=" bg-green-900 opacity-80 px-8 py-5 z-50 text-sm relative md:left-20 my-5 w-[450px] text-left">
              {description}
            </p>
            <div className="flex space-x-5 flex-wrap justify-end">
              {tools?.map((e, i) => {
                return (
                  <p key={i} className="text-sm">
                    {e}
                  </p>
                );
              })}
            </div>
            <div className="flex space-x-3 mt-10 justify-end">
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
          <div className=" h-[300px] w-[600px]">
            <Image
              className=" cursor-pointer opacity-70 hover:opacity-100 transition duration-300 ease-in "
              src={`/${photo}`}
              layout="responsive"
              width="1440"
              height="725"
              alt="project code"
            />
          </div>
        </div>
      )}
    </div>
  );
}
