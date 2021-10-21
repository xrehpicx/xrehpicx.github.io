/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { IWorkFields } from "../../@types/generated/contentful";
import { ContentfullContext } from "../Contexts/Contentfull";
import { ReactComponent as ReactLogo } from "../assets/HeaderIcons/react.svg";
import { ReactComponent as SketchLogo } from "../assets/HeaderIcons/sketch.svg";
import { useHistory } from "react-router";
import StackGrid, { Grid } from "react-stack-grid";
import { useWindowSize } from "@react-hook/window-size";

const MReactLogo = motion(ReactLogo);
const MSketchLogo = motion(SketchLogo);

const MTypography = motion(Typography);

export default function Pricing() {
  //   const { works } = useContext(ContentfullContext);
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
        .price-section {
          display: flex;
          padding: 1.2rem 2rem;
          flex-direction: column;
          border: 1px solid ${theme.palette.primary.main};
          width: 100%;
          .price {
            margin-left: 0.5rem;
            .price {
              margin-left: 1rem;
            }
          }
        }
      `}
    >
      <div className="title">
        <MReactLogo layoutId="react-icon" />
        <MSketchLogo
          layoutId="sketch-icon"
          css={css`
            margin-left: 1rem;
          `}
        />

        <MTypography
          layoutId={history.location.pathname}
          ml="1rem"
          variant="h3"
        >
          Pricing
        </MTypography>
      </div>

      <StackGrid
        css={css`
          margin-top: 1.6rem;
        `}
        gridRef={(r) => (grid.current = r)}
        columnWidth={
          windowWidth > 1440
            ? "25%"
            : windowWidth > 1200
            ? "30%"
            : windowWidth > 1024
            ? "40%"
            : "100%"
        }
        duration={ANIMATION_DURATION}
        gutterWidth={16}
        gutterHeight={16}
        appearDelay={100}
        monitorImagesLoaded

        // horizontal
      >
        <motion.div
          className="price-section"
          whileHover={{
            boxShadow: `-8px 8px 0 1px ${theme.palette.primary.main}`,
          }}
          whileTap={{
            boxShadow: `-8px 8px 0 1px ${theme.palette.primary.main}`,
          }}
        >
          <Typography variant="h4">Software</Typography>
          <div className="price">
            <Typography variant="h6" color="primary">
              Web dev
            </Typography>
            <div className="price">
              <Typography variant="h6" color="primary">
                fontend
              </Typography>
              <Typography variant="body1" fontSize={"1.5rem"}>
                2200rs/hr
              </Typography>
            </div>
            <div className="price">
              <Typography variant="h6" color="primary">
                backend
              </Typography>
              <Typography variant="body1" fontSize={"1.5rem"}>
                2000rs/hr
              </Typography>
            </div>
          </div>
          <div className="price">
            <Typography variant="h6" color="primary">
              App dev
            </Typography>
            <Typography variant="body1" fontSize={"1.5rem"}>
              3000rs/hr
            </Typography>
          </div>
        </motion.div>
        <motion.div
          className="price-section"
          whileHover={{
            boxShadow: `-8px 8px 0 1px ${theme.palette.primary.main}`,
          }}
          whileTap={{
            boxShadow: `-8px 8px 0 1px ${theme.palette.primary.main}`,
          }}
        >
          <Typography variant="h4">Design</Typography>

          <div className="price">
            <Typography variant="h6" color="primary">
              Web dev
            </Typography>
            <Typography variant="body1" fontSize={"1.5rem"}>
              1000rs/hr
            </Typography>
          </div>
          <div className="price">
            <Typography variant="h6" color="primary">
              Event
            </Typography>
            <Typography variant="body1" fontSize={"1.5rem"}>
              200rs/hr
            </Typography>
          </div>

          <div className="price">
            <Typography variant="h6" color="primary">
              Certificates and other Banners
            </Typography>
            <Typography variant="body1" fontSize={"1.5rem"}>
              500rs/hr
            </Typography>
          </div>
        </motion.div>
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

      <div
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
      </div>
    </motion.div>
  );
}
