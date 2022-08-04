import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abdelmalek</title>
      </Head>
      <h1 className="text-xl">Hello</h1>
    </div>
  );
}
