import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";

export default function Home({ skills }) {
  const [showSkills, setShowSkills] = useState(false);
  const [clickShowSkills, setClickShowSkills] = useState(false);
  return (
    <div className="text-white bg-slate-900 h-[4000px] ">
      <Navigation />
      <Banner
        showSkills={showSkills}
        setShowSkills={setShowSkills}
        setClickShowSkills={setClickShowSkills}
      />
      <Skills skills={skills} showSkills={showSkills} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://my-json-server.typicode.com/chakib2002/portfolio-json-server/skills"
  );
  const skills = await res.json();

  return {
    props: {
      skills,
    },
  };
}
