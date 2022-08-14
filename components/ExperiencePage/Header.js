import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useState } from "react";
import style from "../../styles/Header.module.css";

export default function Header() {
  const [hover, setHover] = useState(false);
  return (
    <div className="mx-5 lg:mx-10 mt-10 mb-5 flex justify-between">
      <h1 className="text-white text-2xl font-bold self-center tracking-widest ">
        Experience
      </h1>
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="px-2 py-2 border-2 rounded-full my-2 cursor-pointer overflow-hidden active:scale-75 active:opacity-0 transition duration-100 ease-out"
      >
        <ArrowLeftIcon
          className={` ${hover ? style.ArrowLeftIcon : ""} h-4 w-4 text-white `}
        />
      </div>
    </div>
  );
}
