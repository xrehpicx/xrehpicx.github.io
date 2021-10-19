/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { ReactComponent as ReactLogo } from "../assets/HeaderIcons/react.svg";
import { ReactComponent as SketchLogo } from "../assets/HeaderIcons/sketch.svg";
import { ReactComponent as GithubLogo } from "../assets/HeaderIcons/github.svg";
import { ReactComponent as InstaLogo } from "../assets/HeaderIcons/insta.svg";
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
import { Status } from "./Status";

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
      <div className="buttons" id="work">
        <div className="row">
          <SectionButton
            Icon={<ReactLogo />}
            label="React Work"
            to="/work/react"
          />
          <SectionButton
            Icon={<SketchLogo />}
            label="Poster Designs"
            to="/work/posters"
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
    </div>
  );
}

const MLink = motion(Link);

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
      to={to || { pathname: href }}
      target={target}
      whileHover={{ boxShadow: `-6px 6px 0 1px ${theme.palette.primary.main}` }}
    >
      {Icon}
      <span style={{ marginLeft: "1rem" }}>{label}</span>
    </MLink>
  );
}

function Footer() {
  const theme = useTheme();
  return (
    <footer
      css={css`
        padding: 1.2rem 1.6rem;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        .contact-chips {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}
    >
      <Typography variant="h4" color="inherit">
        Contact me
      </Typography>
      <Typography variant="body1" color="inherit">
        You can just send me a message{" "}
        <Link
          target="_blank"
          to={{ pathname: "https://olvi.vercel.app/contact" }}
        >
          here
        </Link>{" "}
        or sit and decide one of the following for a faster reply
      </Typography>
      <div className="contact-chips">
        <Chip
          link="https://github.com/xrehpicx"
          label="Github"
          icon={<GithubLogo />}
        />
        <Chip
          link="https://instagram.com/xrehpicx"
          label="Instagram"
          icon={<InstaLogo />}
        />
        <Chip
          link="mailto:raj.fps2000@gmail.com"
          label="Gmail"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
              css={{ fill: theme.palette.primary.main }}
            >
              <g transform="">
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  css={css`
                    mix-blend-mode: normal;
                  `}
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill={theme.palette.primary.main}>
                    <path d="M28.66667,28.66667c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v12.41569l7.16667,4.49316l7.16667,4.49316l57.33333,35.93132l57.33333,-35.69336l7.16667,-4.46517l7.16667,-4.45117v-12.72363c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM28.66667,43h114.66667v5.51497l-57.33333,35.67936l-57.33333,-35.93132zM14.33333,72.32455v56.67545c0,7.91917 6.41417,14.33333 14.33333,14.33333h114.66667c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-56.39551l-14.33333,8.91634v47.47917h-114.66667v-47.68913z"></path>
                  </g>
                  <path d="" fill="none"></path>
                </g>
              </g>
            </svg>
          }
        />
      </div>
    </footer>
  );
}

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
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ boxShadow: `-2px 2px 0 1px ${theme.palette.primary.main}` }}
      whileHover={{ boxShadow: `-2px 2px 0 1px ${theme.palette.primary.main}` }}
      css={css`
        display: flex;
        padding: 0.5rem 0.8rem;
        padding-bottom: 0.5rem;
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
      <span>{label}</span>
    </motion.a>
  );
}
