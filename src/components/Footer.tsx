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
import { useContext, useRef } from "react";
import { ContentfullContext } from "../Contexts/Contentfull";
import { Link, useHistory } from "react-router-dom";
import { TextGlitch } from "./TextGlitch";

// import { Chip } from "./Home";

// const MLink = motion(Link);

export function Footer() {
  const theme = useTheme();
  const { about } = useContext(ContentfullContext);

  return (
    <footer
      css={css`
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        /* align-items: center; */
        /* filter: brightness(0.8); */
        background-color: ${theme.palette.background.paper};
        justify-content: center;

        .branding {
          display: flex;
          align-items: center;
        }
        .contact-chips {
          margin-top: 10px;
          display: flex;
          /* align-items: center; */
          align-self: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}
    >
      <div
        css={css`
          padding: 2rem 1.6rem;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 1rem;
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
              Software Engineer at{" "}
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
              . <br /> Almost done with college
            </Typography>
            <Typography mt="0.5rem" variant="body1" color="inherit">
              {/* <Link target={'_blank'} to={{ pathname: "https://olvi.vercel.app/contact" }}>
              Send me a message or feedback!
            </Link> */}
            </Typography>
          </section>
          <FooterNavs />
          <ContactChips />
        </div>
        <ConButton>
          <img src={about.logo || Triangle} alt="logo" />
        </ConButton>
        <motion.section
          css={css`
            padding-top: 1rem;
          `}
        >
          <TextGlitch
            interval={30}
            cycletime={2500}
            css={css`
              /* text-align: center; */
              font-size: 0.8rem;
              color: ${theme.palette.primary.main};
              font-family: source-code-pro, Menlo, Monaco, Consolas,
                "Courier New", monospace;
            `}
            text="Designed and built by me"
          />
        </motion.section>
      </div>
    </footer>
  );
}

function FooterNavs() {
  return (
    <section
      css={css`
        margin-right: 2rem;
      `}
    >
      <Typography variant="subtitle1" color="inherit">
        Go to
      </Typography>
      <ul
        css={css`
          display: flex;
          flex-direction: column;
          a {
            line-height: 1.6rem;
          }
        `}
      >
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "/work/react" }}>React</Link>
        <Link to={{ pathname: "/work/poster" }}>Poster</Link>
        <Link to={{ pathname: "/work/wallpapers" }}>Wallpapers</Link>
        {/* <Link
          to={{
            pathname:
              "https://be.contentful.com/oauth/authorize?response_type=token&client_id=BnXXUDM0Pw6OU0pCaa5oh5dgRdlJWYXR4c4wnbugGGA&redirect_uri=https://raj-design.in/login&scope=content_management_manage",
          }}
          target={"_blank"}
        >
          Login
        </Link> */}
      </ul>
    </section>
  );
}

function ConButton({ children }: { children: EmotionJSX.Element }) {
  const counter = useRef(0);
  const history = useHistory();
  return (
    <motion.div
      css={css`
        width: fit-content;
      `}
      whileTap={{ scale: 0.9 }}
      onTap={() => {
        if (counter.current > 4) {
          history.push("/con");
        }
        counter.current++;
        setTimeout(() => {
          counter.current = 0;
        }, 2000);
      }}
    >
      {children}
    </motion.div>
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
        link="mailto:conatct@raj.cool"
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
      whileTap={{ boxShadow: `-5px 5px 0 1px ${theme.palette.primary.main}` }}
      whileHover={{ boxShadow: `-5px 5px 0 1px ${theme.palette.primary.main}` }}
      css={css`
        display: flex;
        padding: 0.8rem 0.8rem;
        height: fit-content;
        align-items: center;
        width: fit-content;
        border: 1px solid ${theme.palette.primary.main};
        svg,
        img {
          width: 1rem;
          height: 1rem;
          object-fit: contain;
        }
      `}
    >
      {icon}
    </motion.a>
  );
}
