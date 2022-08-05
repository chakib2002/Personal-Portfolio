import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="px-10 py-5 grid grid-cols-1 sm:flex sm:justify-between  ">
      <div className="flex justify-between sm:space-x-16 sm:justify-start">
        <h1 className="text-xs font-semibold self-center">
          Full stack web developer
        </h1>
        <div className="flex space-x-2">
          <LocationMarkerIcon className="h-4 w-4 self-center" />
          <h1 className="text-xs font-semibold self-center">
            Algiers, Algeria
          </h1>
        </div>
      </div>
      <div className=" sm:col-span-2 flex justify-between space-x-2 bg-white rounded-full self-center pr-1 py-1 my-5 w-full sm:my-0 sm:w-auto ">
        <div className="my-auto px-5">
          <h1 className="text-sm text-black font-semibold">
            Abdelmalek Feddal
          </h1>
          <p className="text-xs text-black font-light">
            Abdelmalek.feddal@gmail.com
          </p>
        </div>
        <div className="relative w-16 h-16 ">
          <Image
            className="rounded-full "
            src="/PhotoDeProfile.png"
            alt="profile photo"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
