/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";
import Button from "../GlobalComponents/Button";

const Info = () => (
  <div css={styles} className="info">
    <span></span>
    <h2>
      <span>Pros at what we do</span>
    </h2>
    <div id="low">
      {" "}
      The quest to finding perfect products has attracted professionals from
      different disciplines to FITNESS. From sportsmen to scientists, all of
      them have the passion and experience to do what they know is the best.
      Everyone at FITNESS is an expert in their craft. And more importantly, we
      are always ready to explore and experiment in order to keep on delivering
      products your body will thank you for using.{" "}
    </div>

    <h4>
      <span>Pandemic rules and regulations</span>
    </h4>
    <div id="low">
      {" "}
      Maintain a safe distance from others (at least 2 metres in all
      directions). Avoid non-essential in-person interactions. Keep interactions
      as few and as brief as possible.
    </div>
  </div>
);

const styles = css`
  width: 100%;
  
 #low
 {
  padding:20px;
 }
  
  text-align: center;

  p {
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  h2 {
    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color: #ed563b;
    }

  }
  h4 {
    font-size: 50px;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    span {
      color: #ed563b;
    }
  .btn {
    padding: 14px 16px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;