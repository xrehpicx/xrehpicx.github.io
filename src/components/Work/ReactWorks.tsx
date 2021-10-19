/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import { IWorkFields } from "../../../@types/generated/contentful";
import { ContentfullContext } from "../../Contexts/Contentfull";
import { ReactComponent as ReactLogo } from "../../assets/HeaderIcons/react.svg";

export default function ReactWork() {
  const { works } = useContext(ContentfullContext);

  return (
    <div
      css={css`
        padding: 1.2rem 1.6rem;
        margin: 0 auto;
        margin-top: 1.6rem;
        max-width: 1200px;
        width: 100%;
        .title {
          display: flex;
          align-items: center;
          svg {
            width: 2.6rem;
            height: 2.6rem;
          }
        }
      `}
    >
      <div className="title">
        <ReactLogo />
        <Typography ml="1rem" variant="h3">
          React
        </Typography>
      </div>
      <div
        css={css`
          margin-top: 1.6rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 1.6rem;
        `}
      >
        {works
          .filter((work) => work.type === "react")
          .map((work) => <WorkCard key={work.title} work={work} />)
          .reverse()}
      </div>
    </div>
  );
}

function WorkCard({ work }: { work: IWorkFields }) {
  const theme = useTheme();
  return (
    <motion.div
      css={css`
        display: flex;

        flex-direction: column;
        border: 1px solid ${theme.palette.primary.main};
        width: 100%;
      `}
      whileHover={{ boxShadow: `-8px 8px 0 1px ${theme.palette.primary.main}` }}
      whileTap={{ boxShadow: `-8px 8px 0 1px ${theme.palette.primary.main}` }}
    >
      {work.image && (
        <img
          css={css`
            width: 100%;
            height: auto;
            object-fit: cover;
          `}
          src={work.image[0].fields.file.url}
          alt={work.image[0].fields.file.fileName}
        />
      )}
      <div
        css={css`
          padding: 1.2rem 2rem;
        `}
      >
        <Typography variant="h4" noWrap>
          {work.title}
        </Typography>
        <Typography variant="h6">{work.body}</Typography>
      </div>
    </motion.div>
  );
}
