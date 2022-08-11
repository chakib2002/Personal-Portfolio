import Image from "next/image";
import React, { useState } from "react";
import style from "../../styles/Section.module.css";

export default function Section() {
  const [hover, setHover] = useState(false);
  return (
    <div className="mx-5 lg:mx-10 text-white py-10 md:grid md:grid-cols-2 md:space-x-5">
      <div>
        <div>
          <h1 className="text-2xl font-semibold">
            &quot; DO WHAT YOU LOVE AND SUCCESS WILL FOLLOW, PASSION IS THE FUEL
            BEHIND A SUCCESSFUL CAREER. &quot;
          </h1>
          <p className="text-xs font-light text-slate-300 tracking-wider mt-2">
            Meg Whiteman
          </p>
        </div>
        <div
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className={`hidden cursor-pointer  md:my-36 drop-shadow-xl md:block md:relative md:w-[256px] md:h-[350px] lg:w-[270px] lg:h-[350px] my-5 lg:my-20`}
        >
          <Image
            className="z-10 grayscale hover:grayscale-0 transition duration-300 ease-out"
            src="/About.jpeg"
            alt="me"
            layout="fill"
          />
          <div
            className="absolute border-[3px] border-yellow-600 h-[350px] w-[270px] top-8 left-8 z-0
            shadow-sm shadow-green-200"
          />
        </div>
      </div>
      <div>
        <div className="text-slate-300 my-10 md:my-0 text-center ">
          <p className="md:indent-10  ">
            Hello!My name is Abdelmalek and I am passionate about creating
            things that live on the internet. I am currently a full stack
            freelancer web developer experienced in building (and occasionally
            design) both startup and consumer web applications .{" "}
          </p>
          <div className="h-6" />
          <p className="md:indent-10">
            My interest in tech and computer science started back in 2017
            inspired and motivated to create softwares that can help make a
            positive impact in people&apos;s lives .So, I decided to join an
            international organization of education, exchange and development
            World Learning as a computer science student where I met incredible
            mentors who helped me build up my technical and soft skills .Shortly
            afterwards, I was accepted to participate in an Exchange Program
            offered by the US Government where I studied Leadership and
            Entrepreneurship at the university of Reno, in Nevada USA . Back
            from the United States I worked on social projects that made a
            positive change in my community. I was a volunteer Operation Manager
            at Micro club together with a volunteer mentor of Electronics and
            coding at the Algiers STEM Center and a member at an environment
            association Plogging in Algeria where we worked to raise awareness
            about environmental pollution .
          </p>
          <div className="h-6" />
          <p className="md:indent-10">
            {" "}
            Fast-forward to today, I had the privilege to work as a software
            engineer for an Uber company for almost a year and I am proud of how
            I helped the company grow. Now I am interested in working as a
            freelancer on diver projects, and solve my clients problems
            depending on their needs by implementing the best solutions and
            using the latest technologies .{" "}
          </p>
        </div>
      </div>
      <div className="relative md:hidden">
        <Image
          src="/About.jpeg"
          alt="me"
          width="256"
          height="350"
          layout="responsive"
        />
      </div>
    </div>
  );
}
