import React from "react";
import Navbar from "../components/Navbar";
import ProjectCardsForLargeScreen from "../components/WorkPage/ProjectCardsForLargeScreen";
import ProjectCardsForSmallScreen from "../components/WorkPage/ProjectCardsForSmallScreen";
import SecondaryProjectCards from "../components/WorkPage/SecondaryProjectCards";
import ShowMoreButton from "../components/WorkPage/ShowMoreButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function work() {
  return (
    <div className="bg-slate-900">
      <Navbar N_color="text-green-500" />
      <Header
        title="Using my expertise I build diffrent kind of projects for personal portfolio or business reasons."
        question="Projects"
      />
      <ProjectCardsForLargeScreen />
      <ProjectCardsForSmallScreen />
      <SecondaryProjectCards />
     {
      // <ShowMoreButton />
     }
      <Footer />
    </div>
  );
}
