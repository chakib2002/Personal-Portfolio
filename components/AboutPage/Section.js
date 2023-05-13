import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Section() {
  const [hover, setHover] = useState(false);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-center"
      className={`mx-5 flex flex-col items-center lg:mx-10 text-white lg:grid lg:grid-cols-2 lg:justify-items-center pb-10  md:space-x-5`}
    >
      <div>
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">
            &quot; DO WHAT YOU LOVE AND SUCCESS WILL FOLLOW, PASSION IS THE FUEL
            BEHIND A SUCCESSFUL CAREER. &quot;
          </h1>
          <p className="text-xs font-light text-slate-300 tracking-wider mt-2">
            Meg Whiteman
          </p>
        </div>
        <div className="text-slate-300 my-10 md:my-0 text-left text-sm ">
          <p className="md:indent-10  ">
            {` Hello!My name is Abdelmalek and I am passionate about creating
            things that live on the internet. I am currently a full stack
            freelancer web developer experienced in building (and occasionally
            designing) single-page web applications using the latest
            technologies such as : `}
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ml-5 gap-1 mt-2 list-disc">
            <li>Next js</li>
            <li>React js</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Node js</li>
            <li>Express js</li>
          </ul>
          <p className="md:indent-10">
            {/**
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
               */}
          </p>
          <div className="h-6" />
          <p className="md:indent-10">
            {" "}
            My web development skill and my entrepreneurial spirit helped me to
            establish a company from the ground up which is
            <a href={"https://managili.com/"} target="_blank" rel="noreferrer">
              {" "}
              <span className="hover:underline text-green-500 cursor-pointer">
                {" "}
                Managili
              </span>
            </a>{" "}
            {`a shopify like company that is well-integrated with the delivery
            companies in Algeria. Prior to that, I had the privilege to be an
            OPS and a member of the IT department at `}
            <a
              href="https://www.facebook.com/Micro.Club.USTHB"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <span className="hover:underline text-green-500 cursor-pointer">
                {" "}
                Micro club{" "}
              </span>
              ,{" "}
            </a>
            {` As an OPS member, my responsibility involved event planning and
            execution to ensure the seamless functioning of the club's
            operations. I am proud of how I helped the club grow using the
            experience I gained from being a professional Mentor at `}
            <a
              href="https://www.worldlearning.org/program/algiers-stem-center/"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <span className="hover:underline text-green-500 cursor-pointer">
                {" "}
                The Algiers STEM Center{" "}
              </span>{" "}
            </a>{" "}
            and an exchange program alumni at{" "}
            <a
              href="https://dz.usembassy.gov/"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className="hover:underline text-green-500 cursor-pointer">
                the us embassy in Algiers
              </span>{" "}
            </a>{" "}
            .
          </p>
          <p className="md:indent-10 my-3">
            {`  Now, I am seeking new employment opportunities and am open to
            exploring potential job opportunities. Please feel free to contact
            me for further inquiries or to schedule a discussion at : `}
            {/* Now I am interested in working as a freelancer on various projects,
            and solving my clients problems depending on their needs by
            implementing the best solutions and using the latest technologies .{" "} */}
            <span className=" text-sm mt-2 py-2 rounded-full">
              Abdelmalek.feddal@worldlearningalgeria.org
            </span>{" "}
          </p>
        </div>
      </div>

      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={`hidden cursor-pointer   drop-shadow-xl md:block md:relative md:w-[256px] md:h-[350px] lg:w-[270px] lg:h-[350px] my-5 `}
      >
        <Image
          className="z-10 grayscale hover:grayscale-0 transition duration-300 ease-out"
          width="1858"
          height="2487"
          layout="responsive"
          src="/Me.jpg"
          alt="me"
        />
        <div
          className={`absolute border-[5px] border-green-500 h-[360px] w-[270px] top-8 left-8 z-0
           transition duration-300 ease-in ${
             hover
               ? "-translate-x-3 -translate-y-3"
               : "translate-x-0 translate-y-0"
           }`}
        />
      </div>

      <div className="relative md:hidden">
        <Image src="/Me.jpg" alt="me" width="1858" height="2487" />
      </div>
    </div>
  );
}
