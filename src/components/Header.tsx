/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { Background } from "./Background";

export function Header() {
  return (
    <div
      css={css`
        position: relative;
        height: 70vh;
      `}
    >
      <Background />
      <main
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        `}
      >
        <Typography
          css={css`
            font-size: 4rem;
            @media (max-width: 600px) {
              font-size: 2.5rem;
            }
          `}
          variant="h1"
        >
          Raj Sharma
        </Typography>
        <Typography
          css={css`
            font-size: 1.5rem;
            @media (max-width: 600px) {
              font-size: 1rem;
            }
          `}
          variant="h4"
        >
          Designer & Developer
        </Typography>
      </main>
    </div>
  );
}
