/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { IWallpaperCollectionFields } from "../../../@types/generated/contentful";
import { ContentfullContext } from "../../Contexts/Contentfull";
// import { ReactComponent as SketchLogo } from "../../assets/HeaderIcons/sketch.svg";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { useHistory, Link } from "react-router-dom";
import StackGrid, { Grid } from "react-stack-grid";
import { useWindowSize } from "@react-hook/window-size";
import { ScrollHelper } from "../ScrollHelper";
import { Asset } from "contentful";
import { OldDataWarning } from "../GeneralComps";

const MTypography = motion(Typography);
// const MSketchLogo = motion(SketchLogo);

export default function Wallpapers() {
  const { wallpapers } = useContext(ContentfullContext);
  const theme = useTheme();
  const history = useHistory();

  const [background, setBackground] = useState("");

  useEffect(() => {
    const bg = wallpapers.find(
      (collection) => collection.title === "wall-background"
    );

    if (bg && bg.wallpapers && bg.wallpapers.length > 0) {
      setBackground(bg.wallpapers[0].fields.file.url);
    }
  }, [wallpapers]);

  return (
    <>
      {background && (
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to top,
              ${theme.palette.background.default},
              transparent
            );
            img {
              z-index: -1;
              position: relative;
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          `}
        >
          <img src={background} alt="" />
        </div>
      )}

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
        <ScrollHelper />
        <div className="title">
          <InsertPhotoOutlinedIcon
            css={css`
              @media (max-width: 600px) {
                display: none;
              }
            `}
          />
          <MTypography
            css={css`
              margin-left: 1rem;
              @media (max-width: 600px) {
                margin-left: 0;
              }
            `}
            layoutId={history.location.pathname}
            variant="h3"
          >
            Wallpaper Collections
          </MTypography>
        </div>

        <OldDataWarning />
        <Typography variant="body1" mt="1rem">
          <Link to="/">Home</Link>
          <Link
            css={css`
              margin-left: 1rem;
              border-left: 1px solid ${theme.palette.primary.main};
              padding-left: 1rem;
            `}
            to="/pricing"
          >
            View pricing
          </Link>
        </Typography>
        {wallpapers &&
          wallpapers
            .filter((collection) => collection.title !== "wall-background")
            .map((collection) => (
              <Collection collection={collection} key={collection.title} />
            ))}
      </div>
    </>
  );
}

function Collection({
  collection,
}: {
  collection: IWallpaperCollectionFields;
}) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
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
    <motion.div
      css={css`
        margin-bottom: 1.6rem;
        width: 101%;
        overflow-y: hidden;
        position: relative;
      `}
      onTap={!open ? () => setOpen(true) : () => {}}
      animate={{ height: !open ? "400px" : "auto" }}
    >
      {!open && (
        <div
          css={css`
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            height: 100px;
            background: linear-gradient(
              to top,
              ${theme.palette.background.default},
              transparent
            );
          `}
        ></div>
      )}
      <MTypography mt="1rem" variant="h3">
        {collection.title}
      </MTypography>
      <Typography variant="body1" mb="0.6rem">
        <motion.a
          css={css`
            font-weight: 600;
            margin-left: 0.4rem;
            color: ${theme.palette.primary.main};
            cursor: pointer;
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onTap={() => setOpen((o) => !o)}
        >
          {open ? "hide" : "show"}
        </motion.a>
      </Typography>
      <StackGrid
        rtl={false}
        css={css`
          width: auto;
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
      >
        {collection.wallpapers
          ?.map((wallpaper) => (
            <WallpaperCard key={wallpaper.fields.title} wallpaper={wallpaper} />
          ))
          .reverse()
          .slice(0, open ? collection.wallpapers.length : 3)}
      </StackGrid>
      {open && (
        <Typography textAlign={"center"} variant="body1" mt="1rem" mb="0.6rem">
          <motion.a
            css={css`
              font-weight: 600;

              color: ${theme.palette.primary.main};
              cursor: pointer;
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onTap={() => setOpen((o) => !o)}
          >
            {open ? "close" : "show all"}
          </motion.a>
        </Typography>
      )}
    </motion.div>
  );
}

function WallpaperCard({ wallpaper }: { wallpaper: Asset }) {
  const theme = useTheme();

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
      {wallpaper && (
        <img
          css={css`
            width: 100%;
            height: auto;
            object-fit: cover;
          `}
          src={wallpaper.fields.file.url}
          alt={wallpaper.fields.file.fileName}
        />
      )}
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
