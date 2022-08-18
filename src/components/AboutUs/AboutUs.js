/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Nav from "../Navbar/Nav";
import Video from "./Video";
import Overlay from "./Overlay";
import Info from "./Info";
import Trainers from "../Trainers/Trainers";
import FooterMain from "../FooterMain/FooterMain";

const AboutUs = () => (
  <section css={styles} className="main" id="home">
    <Info />
  </section>
);

const styles = css`
  width: 100%;
  height: auto;
`;

export default AboutUs;
