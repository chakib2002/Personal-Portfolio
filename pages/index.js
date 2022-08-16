import Banner from "../components/Banner";
import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text-white bg-slate-900 overflow-hidden">
      <Topbar />
      <Banner />
      <Navigation />
      <Footer />
    </div>
  );
}
