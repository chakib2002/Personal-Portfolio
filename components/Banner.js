import { PaperAirplaneIcon } from "@heroicons/react/outline";
import React from "react";

export default function Banner() {
  return (
    <div className=" text-center">
      <div className="mr-12 my-3 ">
        <p className="mr-28 md:mr-36 text-xs md:text-sm font-semibold">The</p>
        <h1 className="text-4xl md:text-5xl font-bold">CoderMan</h1>
        <div>
          <div
            className=" active:bg-white active:text-slate-900 active:scale-95 inline-flex space-x-5 text-md  my-2 font-bold text-white border-2  px-16 md:px-20 py-1 rounded-lg
            lg:hover:bg-white lg:hover:text-slate-900 transition duration-300 ease-out cursor-pointer
        "
          >
            <p className="self-center">Contact</p>
            <PaperAirplaneIcon className="h-5 w-5 self-center rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
