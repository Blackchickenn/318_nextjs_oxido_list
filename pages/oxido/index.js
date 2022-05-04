import styles from "../../styles/Oxido.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { oxidos: data },
  };
};

import Head from "next/head";

export default function OxidoList({ oxidos }) {
  return (
    <>
      <Head>
        <title>Oxido | Oxido List</title>
      </Head>
      <h1>Oxido List</h1>
      {oxidos.map((oxido) => (
        <Link href={"/oxido/" + oxido.id} key={oxido.id}>
          <a className={styles.single}>
            <h3>{oxido.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
}
