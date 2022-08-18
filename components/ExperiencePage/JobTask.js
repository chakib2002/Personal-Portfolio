import { CheckCircleIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";

export default function JobTask({
  selected,
  company,
  dateRange,
  jobDetails,
  title,
}) {
  return (
    <div className="mx-5 lg:mx-10 text-white">
      <div>
        <h1 className="text-xl font-semibold">
          {title}{" "}
          <span className="text-green-400 font-normal text-xl lg:hover:underline lg:hover:underline-offset-4 cursor-pointer">
            @{company}
          </span>
        </h1>
        <p className="text-xs text-gray-300 my-5">{dateRange}</p>
        <div className="space-y-5 ">
          {jobDetails?.map((element, index) => (
            <div key={index} className="flex space-x-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500 inline flex-none " />
              <p className="text-sm text-left justify-self-start  text-slate-200  inline">
                {element}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
