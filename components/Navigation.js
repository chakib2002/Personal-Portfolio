import React from "react";
import About from "./Navigation/About";
import Experience from "./Navigation/Experience";
import Services from "./Navigation/Services";
import Work from "./Navigation/Work";
import Skills from "./Navigation/Skills";

export default function Navigation() {
  return (
    <div className="mx-10 my-16 ">
      <div className="lg:hidden">
        <div className="space-y-5">
          <About />
          <Skills />
        </div>
        <div className="">
          <div className="">
            <Experience />
            <Work />
          </div>
          <Services />
        </div>
      </div>
      <div className="hidden lg:block space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <About />
          <div className="grid grid-cols-2 gap-4">
            <Experience />
            <Work />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Skills />
          <Services />
        </div>
      </div>
    </div>
  );
}
