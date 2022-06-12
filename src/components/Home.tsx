/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
// import { ReactComponent as Triangle } from "../assets/Triangle.svg";
import { ReactComponent as ReactLogo } from "../assets/HeaderIcons/react.svg";
import { ReactComponent as SketchLogo } from "../assets/HeaderIcons/sketch.svg";
// import { ReactComponent as GithubLogo } from "../assets/HeaderIcons/github.svg";
/* import { ReactComponent as FigmaLogo } from "../assets/HeaderIcons/figma.svg";
import { ReactComponent as GolangLogo } from "../assets/HeaderIcons/golang.svg";
import { ReactComponent as NodejsLogo } from "../assets/HeaderIcons/nodejs.svg";
import { ReactComponent as JsLogo } from "../assets/HeaderIcons/js.svg";
import { ReactComponent as TsLogo } from "../assets/HeaderIcons/ts.svg"; */
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { useTheme } from "@mui/material";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { About } from "./About";
import { ScrollHelper } from "./ScrollHelper";
import { ContentfullContext } from "../Contexts/Contentfull";
import { useContext } from "react";
import { LoadingScreen } from "./LoadingScreen";

const MReactLogo = motion(ReactLogo);
const MSketchLogo = motion(SketchLogo);

export function Home() {
  const { status, works } = useContext(ContentfullContext);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: stretch;
      `}
    >
      <AnimatePresence>
        {status && works.length ? (
          <>
            <Nav />
            <Header />
            <About />
            <Sections />
            <Footer />
          </>
        ) : (
          <LoadingScreen />
        )}
      </AnimatePresence>
      {/* <LoadingScreen /> */}
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
      {/* <div>
        <Chip link="/blog" label="Blog" />
      </div> */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill={theme.palette.primary.main}
              >
                <path d="M 31.494141 5.1503906 L 5.9277344 7.0019531 A 1.0001 1.0001 0 0 0 5.9042969 7.0039062 A 1.0001 1.0001 0 0 0 5.8652344 7.0097656 A 1.0001 1.0001 0 0 0 5.7929688 7.0214844 A 1.0001 1.0001 0 0 0 5.7636719 7.0292969 A 1.0001 1.0001 0 0 0 5.7304688 7.0371094 A 1.0001 1.0001 0 0 0 5.6582031 7.0605469 A 1.0001 1.0001 0 0 0 5.6113281 7.0800781 A 1.0001 1.0001 0 0 0 5.5839844 7.0917969 A 1.0001 1.0001 0 0 0 5.4335938 7.1777344 A 1.0001 1.0001 0 0 0 5.4082031 7.1933594 A 1.0001 1.0001 0 0 0 5.3476562 7.2421875 A 1.0001 1.0001 0 0 0 5.3359375 7.2539062 A 1.0001 1.0001 0 0 0 5.2871094 7.2988281 A 1.0001 1.0001 0 0 0 5.2578125 7.3320312 A 1.0001 1.0001 0 0 0 5.2148438 7.3828125 A 1.0001 1.0001 0 0 0 5.1992188 7.4023438 A 1.0001 1.0001 0 0 0 5.15625 7.4648438 A 1.0001 1.0001 0 0 0 5.1445312 7.484375 A 1.0001 1.0001 0 0 0 5.1074219 7.5488281 A 1.0001 1.0001 0 0 0 5.09375 7.5761719 A 1.0001 1.0001 0 0 0 5.0644531 7.6484375 A 1.0001 1.0001 0 0 0 5.0605469 7.65625 A 1.0001 1.0001 0 0 0 5.015625 7.8300781 A 1.0001 1.0001 0 0 0 5.0097656 7.8613281 A 1.0001 1.0001 0 0 0 5.0019531 7.9414062 A 1.0001 1.0001 0 0 0 5.0019531 7.9453125 A 1.0001 1.0001 0 0 0 5 8 L 5 33.738281 C 5 34.76391 5.3151542 35.766862 5.9042969 36.607422 A 1.0001 1.0001 0 0 0 5.953125 36.671875 L 12.126953 44.101562 A 1.0001 1.0001 0 0 0 12.359375 44.382812 L 12.75 44.851562 A 1.0006635 1.0006635 0 0 0 12.917969 45.011719 C 13.50508 45.581386 14.317167 45.917563 15.193359 45.861328 L 42.193359 44.119141 C 43.762433 44.017718 45 42.697027 45 41.125 L 45 15.132812 C 45 14.209354 44.565523 13.390672 43.904297 12.839844 A 1.0008168 1.0008168 0 0 0 43.748047 12.695312 L 43.263672 12.337891 A 1.0001 1.0001 0 0 0 43.0625 12.189453 L 34.824219 6.1132812 C 33.865071 5.4054876 32.682705 5.0641541 31.494141 5.1503906 z M 31.638672 7.1445312 C 32.352108 7.0927682 33.061867 7.29845 33.636719 7.7226562 L 39.767578 12.246094 L 14.742188 13.884766 C 13.880567 13.941006 13.037689 13.622196 12.425781 13.011719 L 12.423828 13.011719 L 8.2539062 8.8398438 L 31.638672 7.1445312 z M 7 10.414062 L 11.011719 14.425781 L 12 15.414062 L 12 40.818359 L 7.5390625 35.449219 C 7.1899317 34.947488 7 34.351269 7 33.738281 L 7 10.414062 z M 41.935547 14.134766 C 42.526748 14.096822 43 14.54116 43 15.132812 L 43 41.125 C 43 41.660973 42.59938 42.08847 42.064453 42.123047 L 15.064453 43.865234 C 14.770856 43.884078 14.506356 43.783483 14.314453 43.605469 A 1.0006635 1.0006635 0 0 0 14.3125 43.603516 C 14.3125 43.603516 14.310547 43.601562 14.310547 43.601562 C 14.306465 43.597733 14.304796 43.59179 14.300781 43.587891 A 1.0006635 1.0006635 0 0 0 14.289062 43.572266 C 14.112238 43.393435 14 43.149431 14 42.867188 L 14 16.875 C 14 16.337536 14.39999 15.911571 14.935547 15.876953 L 41.935547 14.134766 z M 38.496094 19 L 33.421875 19.28125 C 32.647875 19.36125 31.746094 19.938 31.746094 20.875 L 33.996094 21.0625 L 33.996094 31.753906 L 26.214844 19.751953 L 20.382812 20.080078 C 19.291812 20.160078 18.994141 20.970953 18.994141 22.001953 L 21.244141 22.001953 L 21.244141 37.566406 C 21.244141 37.566406 20.191844 37.850406 19.839844 37.941406 C 19.091844 38.134406 18.994141 38.784906 18.994141 39.253906 C 18.994141 39.253906 22.746656 39.065547 24.472656 38.935547 C 26.431656 38.785547 26.496094 37.472656 26.496094 37.472656 L 24.246094 37.003906 L 24.246094 25.470703 C 24.246094 25.470703 29.965844 34.660328 31.714844 37.361328 C 32.537844 38.630328 33.152375 38.878906 34.234375 38.878906 C 35.122375 38.878906 35.962141 38.616594 36.994141 38.058594 L 36.994141 20.697266 C 36.994141 20.697266 37.184203 20.687141 37.783203 20.494141 C 38.466203 20.273141 38.496094 19.656 38.496094 19 z"></path>
              </svg>
            }
            label="Pages"
            href={
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/pages"
                : "https://pages.raj.cool"
            }
            target={"_blank"}
          />
          <SectionButton
            Icon={<InsertPhotoOutlinedIcon color="primary" />}
            label="Wallpapers"
            to="/work/wallpapers"
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
