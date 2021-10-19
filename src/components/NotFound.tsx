/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";

export default function NotFound() {
  const theme = useTheme();
  return (
    <div
      className="gone"
      css={css`
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .message {
          display: flex;
          align-items: center;
          justify-content: center;
          & > * {
            font-weight: 300;
          }
        }
        .divider {
          height: 20px;
          width: 2px;
          background-color: ${theme.palette.text.primary};
          margin: 0 10px;
        }
      `}
    >
      <div className="message">
        <Typography variant="h6">404</Typography>
        <div className="divider"></div>
        <Typography variant="h6">why u here bro</Typography>
      </div>
    </div>
  );
}
