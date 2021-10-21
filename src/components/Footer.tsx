/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import { ReactComponent as GithubLogo } from "../assets/HeaderIcons/github.svg";
import { ReactComponent as InstaLogo } from "../assets/HeaderIcons/insta.svg";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { useTheme } from "@mui/material";
/* import { Link } from "react-router-dom";
import { TextGlitch } from "./TextGlitch";
import { DebugContext } from "../Contexts/CoolDebugStuff"; */
import Triangle from "../assets/Triangle.svg";
import { useContext } from "react";
import { ContentfullContext } from "../Contexts/Contentfull";

// import { Chip } from "./Home";

// const MLink = motion(Link);

export function Footer() {
  //   const theme = useTheme();
  const { about } = useContext(ContentfullContext);
  return (
    <footer
      css={css`
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* filter: brightness(0.8); */
        justify-content: center;
        padding: 1.2rem 1.6rem;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding-bottom: 2rem;

        .branding {
          display: flex;
          align-items: center;
        }
        .contact-chips {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          padding-bottom: 1.6rem;
        `}
      >
        <section
          css={css`
            padding-right: 2rem;
          `}
        >
          <Typography variant="h4" color="inherit">
            Raj Sharma
          </Typography>
          <Typography mt="0.5rem" variant="body1" color="inherit">
            Student at <br /> Atria Institute of Technology <br /> (for now)
          </Typography>
        </section>
        <ContactChips />
        {/* <section
          css={css`
            padding-bottom: 2rem;

            ul {
              display: flex;
              flex-direction: column;
              a {
                line-height: 1.6rem;
              }
            }
          `}
        >
          <Typography variant="h6" color="inherit">
            Work
          </Typography>
          <ul>
            <MLink to="/work/react">React</MLink>
            <MLink to="/work/poster">Posters</MLink>
            <MLink to="/work/medium">Articles</MLink>
          </ul>
        </section> */}
      </div>
      <div className="branding">
        <img src={about.logo || Triangle} alt="logo" />
      </div>
    </footer>
  );
}

function ContactChips() {
  const theme = useTheme();
  return (
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
  );
}

export function Chip({
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
      whileTap={{ boxShadow: `-5px 5px 0 1px ${theme.palette.primary.main}` }}
      whileHover={{ boxShadow: `-5px 5px 0 1px ${theme.palette.primary.main}` }}
      css={css`
        display: flex;
        padding: 1rem 1.8rem;
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
      <span>{label}</span>
    </motion.a>
  );
}
