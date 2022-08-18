/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";

const AasansCard = ({ title, name, desc, img, url, asone,
     astwo, asthree, asfour, asfive, assix, asseven, aseight, asnine}) => (
  <div css={styles} className="card">
    <img src={img} alt="Aasans" />
    <h5>{title}</h5>
    <h3>{name}</h3>
    <p>{desc}</p>
    <h3>{url}</h3>
    <a href="https://www.youtube.com/watch?v=1ElcyxQCZ4w">{asone}</a>
    <a href="https://www.youtube.com/watch?v=kuSZEZ0fCY0">{astwo}</a>
    <a href="https://www.youtube.com/watch?v=XeXz8fIZDCE">{asthree}</a>
    <a href="https://www.youtube.com/watch?v=XeXz8fIZDCE">{asfour}</a>
    <a href="https://www.youtube.com/watch?v=XeXz8fIZDCE">{asfive}</a>
    <a href="https://www.youtube.com/watch?v=XeXz8fIZDCE">{assix}</a>
    <a href="https://www.youtube.com/watch?v=XeXz8fIZDCE">{asseven}</a>
    <a href="https://www.youtube.com/watch?v=XeXz8fIZDCE">{aseight}</a>
    <a href="https://www.youtube.com/watch?v=XeXz8fIZDCE">{asnine}</a>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 31%;
  background: #fff;
  padding: 44px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-radius: 4px;
  img {
    width: 100%;
  }
  h5 {
    color: #ed563b;
    margin: 26px 0 9px 0;
    font-weight: 500;
    font-size: 14px;
  }
  h3 {
    color: #232d39;
    letter-spacing: 1px;
  }

  p {
    margin: 24px 0 28px 0;
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }
  @media (max-width: 830px) {
    max-width: 540px;
    margin: 14px 0;
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    max-width: 47%;
    margin: 14px 0;
  }
`;

export default AasansCard;