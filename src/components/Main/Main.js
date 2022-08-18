/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Nav from "../Navbar/Nav";
import Video from "./Video";
import Overlay from "./Overlay";
import Info from "./Info";
import Trainers from "../Trainers/Trainers";

const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Info />
    <Video />
    <Trainers />
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Main;
