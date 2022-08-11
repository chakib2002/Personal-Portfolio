import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between flex-wrap text-white overflow-hidden">
      <div className="px-5 pt-5 lg:px-10 text-2xl font-bold cursor-pointer transition duration-700 active:scale-95 lg:active:scale-95 ease-out lg:hover:scale-110">
        <span className="text-sm font-bold pl-5 block">The</span>CoderMan
      </div>
      <div className="hidden md:flex md:justify-between md:space-x-5 md:self-end md:pb-2 lg:pb-0">
        <div className="cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95">
          {" "}
          <span className="text-green-400">1. </span> About
        </div>
        <div className="cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95 ">
          {" "}
          <span className="text-green-400">2. </span> Experience
        </div>
        <div className="cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95 ">
          {" "}
          <span className="text-green-400">3. </span> Work
        </div>
        <div className="cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95 ">
          {" "}
          <span className="text-green-400">4. </span> Skills
        </div>
        <div className="cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95 ">
          {" "}
          <span className="text-green-400"> 5.</span> Services
        </div>
      </div>
      <div className="mx-5 lg:mx-10 self-end space-x-5 lg:pt-0.5">
        <div className="inline">
          <Image
            className="cursor-pointer active:scale-90 transition duration-300 ease-out"
            src="/discord.png"
            alt="discord"
            width="25"
            height="25"
            layout="fixed"
          />
        </div>
        <div className="inline">
          <Image
            className="cursor-pointer active:scale-90 transition duration-300 ease-out"
            src="/github.png"
            alt="github"
            width="25"
            height="25"
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
}
