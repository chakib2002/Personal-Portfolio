import { ExternalLinkIcon, FolderIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

export default function SecondaryProjectCard({ title, description, tools }) {
  return (
    <div className="text-white bg-slate-800 px-5 py-5 sm:mx-2 mb-5">
      <div className="flex justify-between mb-5">
        <FolderIcon className="h-10 w-10" />
        <div className="flex space-x-3 self-center">
          <Image
            className="mt-2"
            src="/github.png"
            width="21"
            height="21"
            layout="fixed"
            alt="github"
          />
          <ExternalLinkIcon className="h-6 w-6" />
        </div>
      </div>
      <h1 className="font-semibold my-2">{title}</h1>
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
