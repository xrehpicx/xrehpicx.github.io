/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";

export function Status() {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <StatusButton />
    </div>
  );
}

function StatusButton({ title }: { title?: string }) {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <Typography variant="h1" color="initial">
        React Projects
      </Typography>
    </div>
  );
}
