import type { NextPage } from "next";
import Head from "next/head";
import { Col, Row } from "antd";

import Button from "@components/Button";

import home from "./home/home.module.scss";
import main from "@styles/main.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mi Sorteo</title>
        <meta
          name="description"
          content="Sorteos simples en MiSorteo. Sorteo online aleatorio o al azar, rifa online."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={home.section_one}>
        <div className={home.section_one_background}>
          <Row>
            <Col
              className={home.section_one_background_firts}
              xs={24}
              sm={24}
              md={11}
              lg={11}
            ></Col>
            <Col
              className={home.section_one_background_second}
              xs={24}
              sm={24}
              md={13}
              lg={13}
            ></Col>
          </Row>
        </div>
        <Row className={`${main.container} ${home.section_one_content}`}>
          <Col
            className={home.section_one_titles}
            xs={24}
            sm={24}
            md={10}
            lg={10}
          >
            <div>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <Button name="primary" text="Registrarme" />
            </div>
          </Col>
          <Col xs={24} sm={24} md={14} lg={14}>
            Col 14
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Home;
