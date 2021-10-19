/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { DebugContext } from "../Contexts/CoolDebugStuff";

export function DebugIndicator() {
  const theme = useTheme();
  const { debug, setDebug } = useContext(DebugContext);

  return (
    <AnimatePresence>
      {debug && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0, opacity: 0 }}
          css={css`
            position: sticky;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 0.5rem 1.6rem;
            padding-right: 0.4rem;
            background: ${theme.palette.secondary.main};
            color: ${theme.palette.primary.contrastText};

            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <p>Debug mode enabled</p>
          <div>
            <Button
              variant="outlined"
              onClick={() => setDebug(false)}
              color="inherit"
            >
              disable
            </Button>
            <IconButton color="inherit">
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
