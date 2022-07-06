/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { Status } from "./Status";
import { ContentfullContext } from "../Contexts/Contentfull";
import { useContext } from "react";

export function About() {
  const { clubs } = useContext(ContentfullContext);

  return (
    <div
      css={css`
        padding: 1.2rem 1.6rem;
        padding-bottom: 0;
        @media (max-width: 600px) {
          padding-top: 7rem;
        }
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
      `}
    >
      <Status />
      <Typography variant="body1">
        {new Date().getFullYear() - 2001}, Software Dev currently working in{" "}
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

      <Typography mt="1.2rem" variant="h4">
        Clubs
      </Typography>

      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          /* justify-content: center; */
          padding-top: 2rem;
          @media (max-width: 600px) {
            algin-items: center;
            justify-content: center;
          }
          img {
            height: 4rem;
            margin-right: 1.8rem;
            margin-bottom: 1.8rem;
            @media (max-width: 600px) {
              margin: 1rem;
            }
          }
        `}
      >
        {clubs
          .map((club, i) => (
            <motion.img
              layout
              key={club.icon?.fields.file.fileName}
              src={club.icon?.fields.file.url}
              alt=""
            />
          ))
          .reverse()}
      </div>
    </div>
  );
}
