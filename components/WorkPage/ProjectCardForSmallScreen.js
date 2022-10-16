import { LinkIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

export default function ProjectCardForSmallScreen({
  type,
  title,
  description,
  tools,
  photo,
  code,
  site,
  externals
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-center"
      className="mx-5 relative border-2 border-slate-800 text-white rounded-xl overflow-hidden md:hidden"
    >
      <Image
        src={`/${photo}`}
        alt="project photo"
        layout="responsive"
        width="6"
        height="3"
        className=" opacity-75 "
      />
      <div className="px-10 py-10 ">
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
        {
                externals === 0 && (
                  <>
                  <a href={code} target={'_blank'}>
                    <Image
                      className="cursor-pointer active:scale-90 transition duration-300 ease-out"
                      src="/github.png"
                      alt="discord"
                      width="20"
                      height="20"
                      layout="fixed"
                    />
                  </a>
                  <a href={site} target={'_blank'}>
                    <LinkIcon className="h-5 w-5 text-white cursor-pointer active:scale-90 transition duration-300 ease-out" />
                  </a>
                  </>
                )
              }

              {
                externals === 1 && (
                  <a href={code} target={'_blank'}>
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
                 <a href={site} target={'_blank'}>
                   <LinkIcon className="h-5 w-5 text-white cursor-pointer active:scale-90 transition duration-300 ease-out" />
                 </a>
                )
              }
        </div>
      </div>{" "}
    </div>
  );
}
