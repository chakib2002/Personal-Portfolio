import { LinkIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import style from "../../styles/Page.module.css";

export default function ProjectCardForLargeScreen({
  tools,
  type,
  title,
  description,
  rev,
  photo,
  color,
  bg,
  code,
  site,
  externals
}) {
  return (
    <div
      className={`mx-5 lg:mx-10 text-white `}
    >
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
            <h2 className={`text-sm ${color}`}>{type}</h2>
            <h1 className="my-3 text-lg font-semibold">{title}</h1>
            <p className={`opacity-80 px-8 py-5 text-sm relative md:right-20 my-5 w-[450px] ${bg}`}>
              {description}
            </p>
            <div className="flex gap-3 flex-wrap">
              {tools?.map((e, i) => {
                return (
                  <p key={i} className="text-sm">
                    {e}
                  </p>
                );
              })}
            </div>
            <div className="flex space-x-3 mt-10">
              {
                externals === 0 && (
                  <>
                    <Image
                      className="cursor-pointer active:scale-90 transition duration-300 ease-out"
                      src="/github.png"
                      alt="discord"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                    <LinkIcon className="h-5 w-5 text-white cursor-pointer active:scale-90 transition duration-300 ease-out" />
                  </>
                )
              }

              {
                externals === 1 && (
                  <a href={code} target={'_blank'} rel="noreferrer">
                    <Image
                      className="cursor-pointer active:scale-90 transition duration-300 ease-out"
                      src="/github.png"
                      alt="discord"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </a>
                )
              }
              {
                externals ===2 && (
                  <LinkIcon className="h-5 w-5 text-white cursor-pointer active:scale-90 transition duration-300 ease-out" />
                )
              }
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center space-x-5">
          <div className="relative my-auto text-right">
            <h2 className={` text-sm ${color}`}>{type}</h2>
            <h1 className="my-3 text-lg font-semibold">{title}</h1>
            <p className={`relative lg:ml-28 opacity-80 px-8 py-5 z-50 text-sm md:left-20 my-5 w-[450px] text-left ${bg} `}>
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
            {
                externals === 0 && (
                  <>
                    <Image
                      className="cursor-pointer active:scale-90 transition duration-300 ease-out"
                      src="/github.png"
                      alt="discord"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                    <LinkIcon className="h-5 w-5 text-white cursor-pointer active:scale-90 transition duration-300 ease-out" />
                  </>
                )
              }

              {
                externals === 1 && (
                  <a href={code} target={'_blank'} rel="noreferrer">
                    <Image
                      className="cursor-pointer active:scale-90 transition duration-300 ease-out"
                      src="/github.png"
                      alt="discord"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </a>
                )
              }
              {
                externals ===2 && (
                  <LinkIcon className="h-5 w-5 text-white cursor-pointer active:scale-90 transition duration-300 ease-out" />
                )
              }
            </div>
          </div>
          <div className="h-[300px] w-[600px]">
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
