import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-center"
      className="text-slate-300 mb-10 md:mb-10 text-left text-sm mx-5 lg:mx-10 "
    >
      <div className="flex justify-center items-center flex-col-reverse gap-8 lg:grid lg:grid-cols-2 lg:justify-items-center lg:items-center">
        <div className="  ">
          <Image
            className="rounded-full"
            src={"/me-1.jpg"}
            alt="me"
            width={500}
            height={500}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-5 mt-8 lg:mt-0">HISTORY</h1>
          <p className="indent-10 text-sm ">
            {`  My passion for technology started at a young age. when I joined an
            international organization for education, exchange, and development
            known as World Learning Algeria. Through this organization, I
            participated in various national and international events and
            attended workshops related to computer science and electronics.
            These experiences allowed me to develop numerous technical and soft
            skills.`}
          </p>
          <p className="indent-10 text-sm ">
            {` Later on, I became a mentor of electronics and computer science at
            the Algiers STEM Center which is a project that was founded by world
            learning Algeria, where I taught young individuals about electronics
            and coding in English. During this time, I participated in multiple
            training sessions and robotics competitions. Additionally, I had the
            opportunity to attend an international exchange program sponsored by
            the US Embassy in Algiers, known as Aylp “ Algerian Youth Leadership
            Program “. This program allowed me to study leadership and
            entrepreneurship at a US-based university in Reno, Nevada and become
            an alumni of the US Embassy.`}
          </p>
          <p className="indent-10 text-sm">
            {`After completing my Bac exam, I decided to pursue Mathematics and
            Computer Science at USTHB. As my interest in computer science
            continued to grow, I started coding larger-scale projects. I also
            joined MICRO club, a scientific club where I held a dual role in the
            IT and OPS departments. As an OPS member, my responsibility involved
            event planning and execution to ensure the seamless functioning of
            the club's operations.`}
          </p>
          <p className="indent-10 text-sm">
            `
            {` Using the skills I gained through MICRO club and my other
            experiences, I was able to develop my first start-up which is
            Managili, a Shopify-like company. In the process of developing this
            start-up, I had the opportunity to collaborate with one of the
            leading delivery companies in Algeria which is Maystro Delivery to
            synchronize both platforms and improve our users' workflow . We have
            done that successfully :) .`}
            `
          </p>

          <p className="indent-10 text-sm">
            {` Now, I am seeking new employment opportunities and am open to
            exploring potential job opportunities. Please feel free to contact
            me for further inquiries or to schedule a discussion at : abdelmalek.feddal@worldlearningalgeria.org `}
          </p>
        </div>
      </div>
    </div>
  );
}
