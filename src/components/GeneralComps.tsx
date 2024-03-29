/** @jsxImportSource @emotion/react */
import { Typography, alpha, useTheme } from "@mui/material";
import { css } from "@mui/styled-engine";

export function OldDataWarning() {
  const theme = useTheme();
  return (
    <div
      css={css`
        border: 1px solid ${theme.palette.warning.main};
        background: ${alpha(theme.palette.warning.main, 0.1)};
        padding: 1rem 2rem;
        margin-top: 1rem;
        border-radius: 1rem;
      `}
    >
      <Typography variant="body1">
        ⚠️
        <span
          css={css`
            margin-left: 0.6rem;
          `}
        >
          This page was last updated in 2020/21, get the most updated data directly
          from{" "}
          <a href="https://cloud.raj.cool/apps/forms/s/TSznA8t3oQNPjKmL9PAr8FmL">
            me
          </a>
        </span>
      </Typography>
    </div>
  );
}
