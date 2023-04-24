import React, { useEffect, useState } from "react";
import Job from "./Job";
import JobTask from "../../components/ExperiencePage/JobTask";

export default function Section({
  companies,
  setSelected,
  selected,
  jobsArray,
}) {
  const [roles, setRoles] = useState({
    title: "Founder",
    dateRange: "April 2023",
    company: "Managili",
    Tasks: [
      "Developers lead of the project",
      "UI/UX of the platform",
      "Developed the frontend of the platform using NextJS/Typescript",
      "Payment integration using Stripe payment",
      "Database design and API architecture ",
      "Worked and collaborated with multiple delivery companies during the development of the project to create new apis route in order synchronize both companies together",
    ],
  });

  const handleJobsArray = () => {
    jobsArray?.map(
      (element) => element.company == selected && setRoles(element)
    );
  };
  useEffect(() => {
    handleJobsArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-center"
      className={` md:h-60 grid space-y-5 md:grid md:grid-flow-col md:space-y-0 md:space-x-8 lg:w-[600px] mx-5 lg:mx-auto`}
    >
      <div className="">
        <Job
          companies={companies}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <JobTask
        selected={selected}
        company={roles.company}
        dateRange={roles.dateRange}
        jobDetails={roles.Tasks}
        title={roles.title}
      />
    </div>
  );
}
