/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React from "react";

const Cover = () => <div css={styles} className="Cover"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  background: rgba(10, 45, 57, 0.7);
`;

export default Cover;