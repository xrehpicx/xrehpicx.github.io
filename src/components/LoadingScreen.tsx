/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { TextGlitch } from "./TextGlitch";

export function LoadingScreen() {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: ${theme.palette.background.paper};
        align-items: center;
        justify-content: center;
      `}
    >
      <motion.div layoutId="main-name">
        <TextGlitch
          text="raj-sharma"
          interval={40}
          css={css`
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
            color: ${theme.palette.primary.main};
          `}
        />
      </motion.div>
    </div>
  );
}
