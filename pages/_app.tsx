import type { AppProps } from "next/app";

import Layout from "@components/Layout";

import "antd/dist/antd.css";
import "@styles/globals.scss";

import "@components/Header/nav.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
