import Banner from "../components/Banner";
import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";

export default function Home({ skills }) {
  return (
    <div className="text-white bg-slate-900 overflow-hidden">
      <Topbar />
      <Banner />
      <Navigation />
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
