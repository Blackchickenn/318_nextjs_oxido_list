import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oxido | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Bear claw macaroon jelly bear claw candy canes tart. Gingerbread
          macaroon soufflé dragée pudding pastry. Biscuit pudding carrot cake
          pastry lemon drops ice cream carrot cake biscuit tootsie roll. Jujubes
          cotton candy macaroon chocolate topping cake shortbread.
        </p>
        <p className={styles.text}>
          Bear claw macaroon jelly bear claw candy canes tart. Gingerbread
          macaroon soufflé dragée pudding pastry. Biscuit pudding carrot cake
          pastry lemon drops ice cream carrot cake biscuit tootsie roll. Jujubes
          cotton candy macaroon chocolate topping cake shortbread.
        </p>
        <Link href="/oxido">
          <a className={styles.btn}>Oxido List</a>
        </Link>
      </div>
    </>
  );
}
