import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import React from "react";

import SoftSkillCards from "./SoftSkillCards";

export default function Carrousel() {
  return (
    <div className="relative">
      <ChevronDoubleRightIcon className="h-8 w-8 animate-pulse absolute text-slate-500 right-1 top-[75px]" />
      <SoftSkillCards />
      <p className="text-slate-400 text-center mx-5 md:mx-20 lg:mx-48 xl:mx-60 text-sm mt-10">
        Having good communication skills can lead to better collaboration and
        team cohesiveness. Being self-aware of one&apos;s strengths and
        weaknesses can improve one&apos;s accountability skills. And the result
        is a well-rounded developer with strong potential.
      </p>
    </div>
  );
}
