/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { TextGlitch } from "./TextGlitch";

export function SapthrangDialog() {
  const [open, setOpen] = useState(
    window.location.hostname === "www.sapthrang.com" ||
      process.env.NODE_ENV === "development"
  );
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      disableEscapeKeyDown
      scroll="paper"
      // onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          background: theme.palette.background.default,
          borderRadius: 0,
          border: "1px solid",
          borderColor: theme.palette.primary.main,
          boxShadow: `-8px 8px 0 1px ${theme.palette.primary.main}`,
        },
      }}
    >
      <DialogTitle>
        <TextGlitch
          interval={30}
          cycletime={2500}
          css={css`
            font-size: 1.8rem;
            /* color: ${theme.palette.primary.main}; */
            /* font-family: source-code-pro, Menlo, Monaco, Consolas,
                "Courier New", monospace; */
          `}
          text="To Sapthrang team 🎉"
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText color="Highlight">
          Hello new Saptharang Team
          <br />
          The old website is removed <br /> (not permanently) <br /> to avoid
          hosting charges.
          <br />
          The Site will stay under maintenance until next Sapthrang or if it was
          specially requested to be brought up.
          <br />
          The maintenance, development & hosting of the site cannot be kept
          completely free.
          <br />
          The full ownership of the domain can be moved to anyone if required.
          <br />
          <div
            css={css`
              margin-top: 1rem;
            `}
          >
            <a href="mailto:contact@raj.cool">
              <TextGlitch
                interval={30}
                cycletime={2500}
                css={css`
                  display: inline;
                  /* font-size: 1.8rem; */
                  /* color: ${theme.palette.primary.main}; */
                  /* font-family: source-code-pro, Menlo, Monaco, Consolas,
                "Courier New", monospace; */
                `}
                text="Contact me"
              />
            </a>{" "}
            for more details.
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={() => setOpen(false)}>🥲</Button> */}
        <Button onClick={() => setOpen(false)}>Ok 👍🏻</Button>
      </DialogActions>
    </Dialog>
  );
}
