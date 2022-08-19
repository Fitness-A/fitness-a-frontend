/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Nav from "../Navbar/Nav";
import Video from "./Video";
import Overlay from "./Overlay";
import Info from "./Info";
import Trainers from "../Trainers/Trainers";
import FooterMain from "../FooterMain/FooterMain";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  if (location.state && location.state.hash == "#trainers") {
    let elem = document.getElementById("trainers");
    if (!!elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  return (
    <section css={styles} className="main" id="home">
      <Overlay />
      <Info />
      <Video />
      <Trainers />
      <FooterMain />
    </section>
  );
};

const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Main;
