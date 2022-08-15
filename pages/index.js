import Banner from "../components/Banner";
import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="text-white bg-slate-900 overflow-hidden">
      <Topbar />
      <Banner />
      <Navigation />
    </div>
  );
}
