/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { IWorkFields } from "../../../@types/generated/contentful";
import { ContentfullContext } from "../../Contexts/Contentfull";
import { ReactComponent as SketchLogo } from "../../assets/HeaderIcons/sketch.svg";
import { useHistory, Link } from "react-router-dom";
import StackGrid, { Grid } from "react-stack-grid";
import { useWindowSize } from "@react-hook/window-size";
import { ScrollHelper } from "../ScrollHelper";
import { OldDataWarning } from "../GeneralComps";

const MTypography = motion(Typography);
const MSketchLogo = motion(SketchLogo);

export default function MediumWork() {
  const { works } = useContext(ContentfullContext);
  const theme = useTheme();
  const history = useHistory();

  const ANIMATION_DURATION = 400;
  const [windowWidth] = useWindowSize();
  const grid = useRef<Grid | null>(null);
  const resizeGrid = () => {
    if (grid.current) {
      setTimeout(() => {
        grid.current?.updateLayout();
      }, ANIMATION_DURATION + 50); // 50 is a guess for buffer
    }
  };
  useEffect(resizeGrid, [windowWidth]);

  return (
    <div
      css={css`
        position: relative;
        padding: 1.2rem 1.6rem;
        margin: 0 auto;
        margin-top: 1.6rem;
        max-width: 1200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* background-color: ${theme.palette.background.paper}; */
        .title {
          display: flex;
          align-items: center;
          /* justify-content: center; */
          svg {
            width: 2.6rem;
            height: 2.6rem;
          }
        }
      `}
    >
      <ScrollHelper />
      <div className="title">
        <MSketchLogo layoutId="sketch-icon" />
        <MTypography
          layoutId={history.location.pathname}
          ml="1rem"
          variant="h3"
        >
          Posters
        </MTypography>
      </div>

      <OldDataWarning />
      <Typography variant="body1" mt="1rem">
        <Link to="/">Home</Link>
        <Link
          css={css`
            margin-left: 1rem;
            border-left: 1px solid ${useTheme().palette.primary.main};
            padding-left: 1rem;
          `}
          to="/pricing"
        >
          View pricing
        </Link>
      </Typography>
      <StackGrid
        css={css`
          margin-top: 1.6rem;
        `}
        gridRef={(r) => (grid.current = r)}
        columnWidth={
          windowWidth > 1440
            ? "26%"
            : windowWidth > 1200
            ? "33.33%"
            : windowWidth > 1024
            ? "50%"
            : "100%"
        }
        duration={ANIMATION_DURATION}
        gutterWidth={16}
        gutterHeight={16}
        appearDelay={100}
        monitorImagesLoaded

        // horizontal
      >
        {works
          .filter((work) => work.type === "poster")
          .map((work) => <WorkCard key={work.title} work={work} />)
          .reverse()}
      </StackGrid>
    </div>
  );
}

function WorkCard({ work }: { work: IWorkFields }) {
  const theme = useTheme();

  useEffect(() => {
    // console.log(work.links);
    if (work?.links) {
    }
  }, [work]);

  return (
    <motion.div
      css={css`
        display: flex;
        flex-direction: column;
        border: 1px solid ${theme.palette.primary.main};
        background-color: ${theme.palette.background.paper};
        /* width: 100%;
        height: fit-content; */
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
      {/* <div
        css={css`
          padding: 1.2rem 2rem;
        `}
      >
        <Typography variant="h6" noWrap>
          {work.title}
        </Typography>
      </div> */}
      {/* <Typography variant="h6">{work.body}</Typography> */}
      {/* <div
        css={css`
          padding: 1.2rem 2rem;
          padding-top: 0;
          .link {
            display: flex;
            align-items: center;
            img {
              width: 1rem;
              height: 1rem;
              border-radius: 50%;
              margin-right: 0.8rem;
            }
          }
        `}
      >
        {work.links?.map((link, i) => (
          <div key={i} className="link">
            <img
              src={`https://s2.googleusercontent.com/s2/favicons?domain=${link}`}
              alt=""
            />
            <a href={link} target={"_blank"} rel="noreferrer">
              {link.split("//")[1]}
            </a>
          </div>
        ))}
      </div> */}
    </motion.div>
  );
}

/* function MediumLogo() {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      css={{ fill: theme.palette.primary.main }}
    >
      <circle cx="14" cy="24" r="12"></circle>
      <ellipse cx="34" cy="24" rx="6" ry="11"></ellipse>
      <ellipse cx="44" cy="24" rx="2" ry="10"></ellipse>
    </svg>
  );
}
 */
