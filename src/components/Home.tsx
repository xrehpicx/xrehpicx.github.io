/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
// import { ReactComponent as Triangle } from "../assets/Triangle.svg";
import { ReactComponent as ReactLogo } from "../assets/HeaderIcons/react.svg";
import { ReactComponent as SketchLogo } from "../assets/HeaderIcons/sketch.svg";
import { ReactComponent as GithubLogo } from "../assets/HeaderIcons/github.svg";
/* import { ReactComponent as FigmaLogo } from "../assets/HeaderIcons/figma.svg";
import { ReactComponent as GolangLogo } from "../assets/HeaderIcons/golang.svg";
import { ReactComponent as NodejsLogo } from "../assets/HeaderIcons/nodejs.svg";
import { ReactComponent as JsLogo } from "../assets/HeaderIcons/js.svg";
import { ReactComponent as TsLogo } from "../assets/HeaderIcons/ts.svg"; */
import { useTheme } from "@mui/material";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { About } from "./About";
import { ScrollHelper } from "./ScrollHelper";

const MReactLogo = motion(ReactLogo);
const MSketchLogo = motion(SketchLogo);

export function Home() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: stretch;
        @media (max-width: 600px) {
          /* padding-bottom: 120px; */
        }
      `}
    >
      <Nav />
      <Header />
      <About />
      <Sections />
      <Footer />
    </div>
  );
}

function Sections() {
  const theme = useTheme();
  return (
    <div
      css={css`
        padding: 1.2rem 1.6rem;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
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
      `}
    >
      <div className="buttons" id="work">
        <div className="row">
          <SectionButton
            Icon={<MReactLogo layoutId="react-icon" />}
            label="React / Web Work"
            to="/work/react"
          />
          <SectionButton
            Icon={<MSketchLogo layoutId="sketch-icon" />}
            label="Poster Designs"
            to="/work/poster"
          />
        </div>
        <div className="row">
          <SectionButton
            Icon={
              <motion.svg
                layoutId="medium-icon"
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
              </motion.svg>
            }
            label="Medium Articles"
            to="/work/medium"
          />
          <SectionButton
            Icon={<GithubLogo />}
            label="Github Repos"
            target="_blank"
            href="https://github.com/xrehpicx?tab=repositories"
          />
        </div>
      </div>
      <div
        css={css`
          margin: 1rem 0;
        `}
      >
        <Chip link="/pricing" label="Pricing" />
      </div>
      <ScrollHelper />
    </div>
  );
}
const MLink = motion(Link);
function Chip({
  link,
  label,
  icon,
}: {
  link: string;
  label: string;
  icon?: EmotionJSX.Element;
}) {
  const theme = useTheme();
  return (
    <MLink
      to={link}
      whileTap={{ boxShadow: `-5px 5px 0 1px ${theme.palette.primary.main}` }}
      whileHover={{ boxShadow: `-5px 5px 0 1px ${theme.palette.primary.main}` }}
      css={css`
        display: flex;
        padding: 0.8rem 1.6rem;
        height: fit-content;
        align-items: center;
        width: fit-content;
        border: 1px solid ${theme.palette.primary.main};
        svg,
        img {
          width: 22px;
          height: 22px;
          object-fit: contain;
          margin-right: 10px;
        }
      `}
    >
      {icon}
      <motion.span layoutId={link}>{label}</motion.span>
    </MLink>
  );
}

function SectionButton({
  label,
  to,
  href,
  Icon,
  target = "_self",
}: {
  label: string;
  to?: string;
  href?: string;
  Icon: EmotionJSX.Element;
  target?: string;
}) {
  const theme = useTheme();
  return (
    <MLink
      css={css`
        padding: 1.2rem 2rem;
        padding-bottom: 1.3rem;
        font-size: 1.6rem;
        width: fit-content;
        border: 1px solid ${theme.palette.primary.main};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
      `}
      to={{ pathname: to || href, state: { from: window.location.pathname } }}
      target={target}
      whileHover={{ boxShadow: `-6px 6px 0 1px ${theme.palette.primary.main}` }}
      whileTap={{ boxShadow: `-6px 6px 0 1px ${theme.palette.primary.main}` }}
    >
      {Icon}
      <motion.span layoutId={to} style={{ marginLeft: "1rem" }}>
        {label}
      </motion.span>
    </MLink>
  );
}
