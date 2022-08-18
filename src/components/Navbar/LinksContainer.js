/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Link from "./Link";
import Button from "../GlobalComponents/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LinksContainer = ({ hidden }) => {
  const location = useLocation();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Link name="HOME" linkTo="/" />
      <Link name="TRAINERS" linkTo={"/#trainers"} />
      {/* <Link name="CLASSES" linkTo="/classes" /> */}
      <Link name="SCHEDULES" linkTo="/schedule" />
      <Link name="CONTACT" linkTo="/contact" />
      <Link name="EXERCISES" linkTo="/exercises" />
      <Link name="YOGA" linkTo="/yoga" />
      <Link name="PRODUCTS" linkTo="/products" />
      <Link name="BMI" linkTo="/bmi" />
      <Link name="MEMBERSHIP" linkTo="/membershipscards" />
      <Link name="ABOUT" linkTo="/about" />
      {!user && <Button text="REGISTER" href="/register" />}
    </div>
  );
};

const styles = css`
  margin-right: 4%;
  width: 100%;
  max-width: 700px;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;
    background: rgba(35, 45, 57, 0.8);
    transition: top 1100ms ease-in-out, opacity 1100ms ease-in-out;
    &.hidden {
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      text-align: center;
      padding: 16px;
    }
  }
`;

export default LinksContainer;
