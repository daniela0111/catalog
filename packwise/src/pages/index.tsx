import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "../components/HeroImage";
import PackagingCategories from '../components/PackagingCategories';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PackWise.dk homepage</title>
        <meta name="description" content="Packwise.dk E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.ico"/>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <Hero/>
      <div className="categories">
        <PackagingCategories/>
      </div>
      </main>
    </>
  );
}
