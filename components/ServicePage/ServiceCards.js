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
    <div className="space-y-5 md:space-y-3">
      <ServiceCard
        title="Lorem Ipsum generators"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        Icon={<CodeIcon className="h-6 w-6  text-white" />}
        header="many variations of passages"
        text="Majority have suffered alteration in some making this the first true form"
      />
      <ServiceCard
        title="We Take care of the Resources"
        description="The Internet tend to repeat predefined chunks all the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        Icon={<DownloadIcon className="h-6 w-6  text-white" />}
        header="many variations of passages"
        text="Majority have suffered alteration in some making this the first true form"
      />
      <ServiceCard
        title="Lorem Ipsum generators"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        Icon={<BriefcaseIcon className="h-6 w-6  text-white" />}
        header="many variations of passages"
        text="Majority have suffered alteration in some making this the first true form"
      />
      <ServiceCard
        title="On the Internet tend "
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        Icon={<CodeIcon className="h-6 w-6  text-white" />}
        header="many variations of passages"
        text="Majority have suffered alteration in some making this the first true form"
      />
      <ServiceCard
        title="Lorem Ipsum generators"
        description="All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
        Icon={<SunIcon className="h-6 w-6  text-white" />}
        header="many variations of passages"
        text="Majority have suffered alteration in some making this the first true form"
      />
    </div>
  );
}
