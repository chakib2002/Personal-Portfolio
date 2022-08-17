import React from "react";

export default function ServiceCard({
  title,
  description,
  Icon,
  header,
  text,
}) {
  return (
    <div className="bg-[#0B0F1A]  text-white flex flex-wrap-reverse md:grid  md:grid-flow-col  md:space-x-10 rounded-3xl mx-5 lg:mx-10 ">
      <div className="px-5 py-16 ">
        <div className="flex justify-between text-white">
          <h1 className="mb-5 font-semibold">{title}</h1>
          {Icon}
        </div>
        <p className="text-slate-400 text-sm font-light">{description}</p>
      </div>

      <div className="relative bg-gray-400 rounded-3xl shadow-xl text-slate-900 md:w-[300px] lg:w-[500px]   ">
        <div className="py-16">
          <h1 className="text-center mx-10 mb-5 font-light ">{header}</h1>
          <p className="text-center mx-10 text-xl font-semibold ">{text}</p>
        </div>
      </div>
    </div>
  );
}
