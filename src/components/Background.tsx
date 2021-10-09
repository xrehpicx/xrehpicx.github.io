/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Icons } from "../assets/HeaderIcons/icons.svg";
import { ReactComponent as IconsMobile } from "../assets/HeaderIcons/icons-mobile.svg";

export function Background() {
  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        height: 80vh;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: -1;
      `}
    >
      <Icons
        css={css`
          padding: 0 1rem;
          width: 100%;
          height: 70vh;

          @media (max-width: 600px) {
            display: none;
          }
        `}
      />
      <IconsMobile
        css={css`
          padding: 0 1rem;
          width: 100%;
          height: 80vh;
          display: none;
          padding-top: 2rem;
          @media (max-width: 600px) {
            display: block;
          }
        `}
      />
    </div>
  );
}
