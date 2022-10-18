import {
  BriefcaseIcon,
  CodeIcon,
  DownloadIcon,
  SunIcon,
} from "@heroicons/react/outline";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceCards() {
  return (
    <div 
   
    className="space-y-5 md:space-y-3">
      <ServiceCard
        title="Adding features to existing projects"
        description="Whether you're adding new features aimed at driving business growth or simply updating your site's aesthetic appeal, I will provide you with appealing solutions developed by skills and passion . "
        Icon={<CodeIcon className="h-6 w-6  text-white" />}
        header="I am an expert at "
        text="Updating codebases"
      />
      <ServiceCard
        title="Start to finish platforms"
        description="Create a highly-functional and user-friendly low-code visual design solution, easy to enable simple integration with hundreds of services and meet my client's requirements ."
        Icon={<DownloadIcon className="h-6 w-6  text-white" />}
        header="It will be developed"
        text="with skills and passion"
      />
      <ServiceCard
        title="Fast Support"
        description="I aim to be as available and supportive as I can to my clients. Feel free to use the form below or contact me directly with questions or requests. "
        Icon={<BriefcaseIcon className="h-6 w-6  text-white" />}
        header="I am always"
        text="Happy to help"
      />
      <ServiceCard
        title="Provide clients with stunning solutions & guidance "
        description="I make sure to communicate clearly with my clients and understand their requirements to implement the best possible solutions via online meetings ."
        Icon={<CodeIcon className="h-6 w-6  text-white" />}
        header="As a software engineer"
        text="Finding solutions is what I do"
      />
      <ServiceCard
        title="SEO"
        description="Using my expertise along with handy tools I strive for a high SEO score, ensuring higher visibility on search sites such as Google. "
        Icon={<SunIcon className="h-6 w-6  text-white" />}
        header=" With my SEO knowledge"
        text="You will be seen"
      />
    </div>
  );
}
