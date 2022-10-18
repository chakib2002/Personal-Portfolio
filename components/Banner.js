import { PaperAirplaneIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import style from "../styles/Skills.module.css";
export default function Banner() {
  return (
    <div className={` text-center ${style.Skill}`}>
      <div className="my-3 ">
        <p className="font-bold md:mr-64 md:mb-1 text-lg">Hey, I am</p>
        <h1 className="text-4xl w-72 md:w-96 mx-auto md:text-5xl font-bold">A full stack web developer</h1>
        <div className="text-center">
          {/** 
            <Link href="/Contact">
              <div
                className=" text-center active:bg-white active:text-slate-900 active:scale-95 inline-flex space-x-5 text-md  my-2 font-bold text-white border-2  px-16 md:px-20 py-1 rounded-lg
              lg:hover:bg-white lg:hover:text-slate-900 transition duration-300 ease-out cursor-pointer "
              >
                <p className="self-center">Contact</p>
                <PaperAirplaneIcon className="h-5 w-5 self-center rotate-90" />
              </div>
            </Link>
           */}
        </div>
      </div>
    </div>
  );
}
