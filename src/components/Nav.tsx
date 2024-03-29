/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Triangle from "../assets/Triangle.svg";
/* import { motion } from "framer-motion";
import { useTheme } from "@mui/material"; */
import { DebugContext } from "../Contexts/CoolDebugStuff";
import { ContentfullContext } from "../Contexts/Contentfull";
import { useContext } from "react";
import { TextGlitch } from "./TextGlitch";
import { motion } from "framer-motion";

export function Nav() {
  // const theme = useTheme();
  const { debug, setDebug } = useContext(DebugContext);
  const { about } = useContext(ContentfullContext);
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="left"
        >
          <img src={about.logo || Triangle} alt="logo" />
          <Typography ml={1} variant="h4">
            <TextGlitch
              css={css`
                margin-bottom: 10px;
              `}
              text={about.brand}
              cycletime={2000}
            />
          </Typography>
        </motion.div>
        <ul className="right">
          <Button
            css={css`
              margin-left: 1rem;
            `}
            onClick={() => {
              setDebug((s) => !s);
            }}
            color="secondary"
          >
            <TextGlitch
              text={debug ? "disable debug" : "Break"}
              interval={20}
              cycletime={2000}
            />
          </Button>
        </ul>
      </nav>
      {/* <motion.nav
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
            <TextGlitch
              css={css`
                margin-bottom: 8px;
              `}
              text={about.brand}
              cycletime={2000}
            />
          </Typography>
        </div>
      </motion.nav> */}
    </>
  );
}
