import React from "react";
import { DuplicateIcon, ExternalLinkIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="mx-5 lg:mx-10 text-white">
      <h1 className="my-10 text-yellow-600 text-lg font-semibold inline-block mb-3">
        Get In Touch
      </h1>
      <div className=" grid lg:grid-cols-2 lg:space-x-10">
        <div>
          <p className=" text-yellow-600 text-3xl font-extrabold">
            Do you have a question, an idea, or a project you need help with or
            get it done? Contact me!
          </p>
        </div>
        <div className="grid md:grid-cols-2 space-y-3 md:space-y-0 md:space-x-3  md:place-items-stretch my-5 lg:my-0">
          <div className="bg-yellow-600 px-5 rounded-2xl">
            <div className="py-5 lg:py-0 lg:pt-5">
              <h1 className="text-slate-900 font-semibold text-sm ">Email :</h1>
              <div className="flex justify-between flex-wrap pt-1">
                <p className="text-slate-900 text-xs ">
                  Abdelmalek.Feddal@gmail.com
                </p>
                <div className="flex space-x-2">
                  <DuplicateIcon className="h-4 w-4 text-slate-900 cursor-pointer lg:hover:text-slate-800 active:scale-75 transition duration-200 ease-in" />
                  <ExternalLinkIcon className="h-4 w-4 text-slate-900 cursor-pointer lg:hover:text-slate-800 active:scale-75 transition duration-200 ease-in" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-600 px-5 rounded-2xl">
            <div className="py-5 lg:py-0 lg:pt-5">
              <h1 className="text-slate-900 font-semibold text-sm ">
                Whatsapp :
              </h1>
              <div className="flex justify-between flex-wrap pt-1">
                <p className="text-slate-900 text-xs ">+213 54 94 32 164</p>
                <div>
                  <DuplicateIcon className="h-4 w-4 text-slate-900 cursor-pointer lg:hover:text-slate-800 active:scale-75 transition duration-200 ease-in " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
