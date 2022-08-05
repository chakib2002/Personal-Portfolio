import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="text-white h-screen bg-slate-900">
      <Navigation />
    </div>
  );
}
