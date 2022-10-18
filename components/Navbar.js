import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "../styles/Page.module.css";
export default function Navbar({ N_color }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div
      className={`${style.page_animation} flex justify-between text-white overflow-hidden`}
    >
      <Link href="/">
        <div className="px-5 pt-5 lg:px-10 w-64 text-lg font-bold cursor-pointer transition duration-700 active:scale-95 lg:active:scale-95 ease-out lg:hover:scale-110">
          <span className="text-xs font-bold block">Hey, I am</span>A full stack web developer
        </div>
      </Link>
      <div className="hidden lg:flex lg:justify-between lg:space-x-5 lg:self-center lg:pb-0">
        <Link href="/About">
          <div
            className={`${
              currentRoute === "/About" && "bg-slate-800"
            } cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95`}
          >
            {" "}
            <span className={`${N_color}`}>1. </span> About
          </div>
        </Link>
        <Link href="/Experience">
          <div
            className={`${
              currentRoute === "/Experience" && "bg-slate-800"
            } cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95`}
          >
            {" "}
            <span className={`${N_color}`}>2. </span> Experience
          </div>
        </Link>
        <Link href="/Work">
          <div
            className={`${
              currentRoute === "/Work" && "bg-slate-800"
            } cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95`}
          >
            {" "}
            <span className={`${N_color}`}>3. </span> Work
          </div>
        </Link>

        <Link href="Skills">
          <div
            className={`${
              currentRoute === "/Skills" && "bg-slate-800"
            } cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95`}
          >
            {" "}
            <span className={`${N_color}`}>4. </span> Skills
          </div>
        </Link>

        <Link href="/Services">
          <div
            className={`${
              currentRoute === "/Services" && "bg-slate-800"
            } cursor-pointer lg:hover:bg-slate-800 lg:px-3 lg:py-2 rounded-xl transition duration-300 ease-out active:scale-95`}
          >
            {" "}
            <span className={`${N_color}`}> 5.</span> Services
          </div>
        </Link>
      </div>
      <div className="mx-5 lg:mx-10 self-center space-x-5 md:pt-2">
        {
          /**
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
           */
        }
        <div className="inline">
          <a href="https://github.com/chakib2002" target={'_blank'} rel="noreferrer">
            <Image
              className="cursor-pointer active:scale-90 transition duration-300 ease-out"
              src="/github.png"
              alt="github"
              width="25"
              height="25"
              layout="fixed"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
