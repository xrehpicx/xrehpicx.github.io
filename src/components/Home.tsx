/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Triangle from "../assets/Triangle.svg";
import { motion } from "framer-motion";
import { ReactComponent as ReactLogo } from "../assets/HeaderIcons/react.svg";
import { ReactComponent as SketchLogo } from "../assets/HeaderIcons/sketch.svg";
import { ReactComponent as GithubLogo } from "../assets/HeaderIcons/github.svg";
/* import { ReactComponent as FigmaLogo } from "../assets/HeaderIcons/figma.svg";
import { ReactComponent as GolangLogo } from "../assets/HeaderIcons/golang.svg";
import { ReactComponent as NodejsLogo } from "../assets/HeaderIcons/nodejs.svg";
import { ReactComponent as InstaLogo } from "../assets/HeaderIcons/insta.svg";
import { ReactComponent as JsLogo } from "../assets/HeaderIcons/js.svg";
import { ReactComponent as TsLogo } from "../assets/HeaderIcons/ts.svg"; */
import { useTheme } from "@mui/material";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export function Home() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: stretch;
        @media (max-width: 600px) {
          padding-bottom: 120px;
        }
      `}
    >
      <Nav />
      <Header />
      <Sections />
    </div>
  );
}

function Nav() {
  const theme = useTheme();
  return (
    <>
      <nav
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 1.6rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          @media (max-width: 600px) {
            display: none;
          }
          .left {
            display: flex;
            align-items: center;

            img {
              width: 32px;
              height: 32px;
              object-fit: contain;
            }
          }
        `}
      >
        <div className="left">
          <img src={Triangle} alt="logo" />
          <Typography ml={1} variant="h4">
            xrehpicx
          </Typography>
        </div>
        <ul className="right">
          {/* <Button
            css={css`
              margin-left: 1rem;
            `}
            color="inherit"
          >
            Home
          </Button>
          <Button
            css={css`
              margin-left: 1rem;
            `}
            color="inherit"
          >
            About
          </Button>
          <Button
            css={css`
              margin-left: 1rem;
            `}
            color="inherit"
          >
            Contact
          </Button>
          <Button
            css={css`
              margin-left: 1rem;
            `}
            color="inherit"
          >
            Work
          </Button> */}
          <Button
            css={css`
              margin-left: 1rem;
            `}
          >
            log in
          </Button>
        </ul>
      </nav>
      <motion.nav
        initial={{
          opacity: 0,
          boxShadow: `0 0 0 0 #0000`,
        }}
        animate={{
          opacity: 1,
          boxShadow: `0 0 50px 1px ${theme.palette.primary.main}`,
        }}
        css={css`
          display: none;
          @media (max-width: 600px) {
            display: flex;
          }
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          justify-content: center;
          align-items: center;
          padding: 1.2rem 1.6rem;
          background: ${theme.palette.background.paper};

          .logo {
            display: flex;
            align-items: center;

            img {
              width: 32px;
              height: 32px;
              object-fit: contain;
            }
          }
        `}
      >
        <div className="logo">
          <img src={Triangle} alt="logo" />
          <Typography ml={1} variant="h4">
            xrehpicx
          </Typography>
        </div>
      </motion.nav>
    </>
  );
}

function Status() {
  const theme = useTheme();
  return (
    <div css={{ marginBottom: "1rem" }} className="status">
      <div className="status-icon">
        <p css={{ fontSize: "1.5rem", color: theme.palette.primary.main }}>
          Playing Valorant
        </p>
        <img
          src="https://img.icons8.com/plasticine/100/000000/valorant.png"
          alt=""
        />
      </div>
      <p css={{ fontSize: "1rem" }}>Current status</p>
    </div>
  );
}

function Sections() {
  const theme = useTheme();
  return (
    <div
      css={css`
        padding: 1.2rem 1.6rem;
        padding-top: 2rem;
        @media (max-width: 600px) {
          padding-top: 6rem;
        }
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        .buttons {
          & > div {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 1rem;
          }
        }
        .row {
          margin-top: 1rem;
        }
        .status-icon {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          & > img {
            width: 32px;
            height: 32px;
            object-fit: contain;
            margin-left: 10px;
          }
        }
      `}
    >
      <Status />
      <div className="buttons">
        <div className="row">
          <SectionButton
            Icon={<ReactLogo />}
            label="React Work"
            to="/react-work"
          />
          <SectionButton
            Icon={<SketchLogo />}
            label="Poster Designs"
            to="/poster-work"
          />
        </div>
        <div className="row">
          <SectionButton
            Icon={
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
            }
            label="Medium Articles"
            to="/medium"
          />
          <SectionButton
            Icon={<GithubLogo />}
            label="Github Repos"
            target="_blank"
            to="https://github.com/xrehpicx?tab=repositories"
          />
        </div>
      </div>
    </div>
  );
}

const MLink = motion(Link);

function SectionButton({
  label,
  to,
  Icon,
  target = "_self",
}: {
  label: string;
  to: string;
  Icon: EmotionJSX.Element;
  target?: string;
}) {
  const theme = useTheme();
  return (
    <MLink
      css={css`
        padding: 1.2rem 2rem;
        padding-bottom: 1.3rem;
        border: 1px solid ${theme.palette.primary.main};
        font-size: 1.6rem;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
      `}
      to={to}
      target={target}
      whileHover={{ boxShadow: `-6px 6px 0 1px ${theme.palette.primary.main}` }}
    >
      {Icon}
      <span style={{ marginLeft: "1rem" }}>{label}</span>
    </MLink>
  );
}
