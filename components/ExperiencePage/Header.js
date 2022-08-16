import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useState } from "react";
import style from "../../styles/Header.module.css";

export default function Header() {
  const [hover, setHover] = useState(false);
  return (
    <div className="mx-5 lg:mx-10 mt-10  flex justify-between mb-10">
      <div className="flex space-x-3">
        <h1 className="text-white text-xl font-bold self-center tracking-widest ">
          <span className="text-green-500 text-base font-normal">2.</span> Where
          I have worked
        </h1>
        <div className="h-[2px] hidden md:inline-flex self-center bg-slate-800 w-[400px] lg:w-[600px]" />
      </div>
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="px-2 py-2 self-center border-2 rounded-full my-2 cursor-pointer overflow-hidden active:scale-75 active:opacity-0 transition duration-100 ease-out"
      >
        <ArrowLeftIcon
          className={` ${hover ? style.ArrowLeftIcon : ""} h-4 w-4 text-white `}
        />
      </div>
    </div>
  );
}
