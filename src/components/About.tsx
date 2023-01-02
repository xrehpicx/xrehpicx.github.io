/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { Status } from "./Status";
import { ContentfullContext } from "../Contexts/Contentfull";
import { useContext } from "react";

export function About() {
  return (
    <div
      css={css`
        padding: 1.2rem 1.6rem;
        padding-bottom: 0;
        padding-top: 10vh;
        @media (max-width: 600px) {
          padding-top: 7rem;
        }
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
      `}
    >
      <Typography variant="h4">About me</Typography>
      <Typography variant="body1">
        {new Date().getFullYear() - 2001}, Software Engineer currently working
        at{" "}
        <a
          css={css`
            color: #ae5df9;
            font-weight: 800;
          `}
          href="https://www.phonepe.com/"
          target={"_blank"}
          rel="noreferrer"
        >
          PhonePe
        </a>
        . for more about me check out my{" "}
        <a
          href="https://pages.raj.cool/9580b84ce9c34f10960619fd870bf61c/"
          target={"_blank"}
          rel="noreferrer"
        >
          Pages.
        </a>
      </Typography>
    </div>
  );
}
