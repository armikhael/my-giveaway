import type { NextPage } from "next";
import Head from "next/head";
import mainStyles from "@styles/main.module.scss";
import styles from "./styles.module.scss";

const Register: NextPage = () => {
  return (
    <div className={mainStyles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Register</h1>
      </main>
    </div>
  );
};

export default Register;
