/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Header from "../components/ExperiencePage/Header";
import Section from "../components/ExperiencePage/Section";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Experience({ result }) {
  const [jobsArray, setJobArray] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selected, setSelected] = useState("Yassir");

  useEffect(() => {
    result?.map((element) => {
      return setJobArray((prevArray) => [...prevArray, element]);
    });
  }, []);
  useEffect(() => {
    result?.map((element) => {
      return setCompanies((prevArray) => [...prevArray, element.company]);
    });
  }, []);
  return (
    <div className=" h-auto md:h-screen bg-slate-900 ">
      <Navbar N_color="text-green-500" />
      <Header />
      <Section
        companies={companies}
        setSelected={setSelected}
        selected={selected}
        jobsArray={jobsArray}
      />

      <div className="mt-10 md:absolute md:w-full md:bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://my-json-server.typicode.com/chakib2002/portfolio-json-server/Experience"
  );
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}
