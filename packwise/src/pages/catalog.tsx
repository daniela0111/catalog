import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Form from "../components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Catalog() {
  return (
    <>
      <Head>
        <title>PackWise.dk homepage</title>
        <meta name="description" content="Packwise.dk product catalog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.ico"/>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Image
        src = "/product_hero.png"
        width= {1294}
        height= {255}
        alt="Hero picture of catalog"
        layout="responsive"
        objectFit="cover">
        </Image>
        <div className="form">
        <Form/>
      </div>
      </main>
    </>
  );
}