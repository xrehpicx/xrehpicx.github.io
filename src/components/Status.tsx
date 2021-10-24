/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ContentfullContext } from "../Contexts/Contentfull";
import { TextGlitch } from "./TextGlitch";

export function Status() {
  const theme = useTheme();
  const { status } = useContext(ContentfullContext);

  return (
    <div
      css={css`
        margin-bottom: 1rem;
        .status-icon {
          display: flex;
          align-items: center;
          margin-bottom: 2px;
          & > img {
            width: 32px;
            height: 32px;
            object-fit: contain;
            margin-left: 10px;
          }
        }
      `}
      className="status"
    >
      <div className="status-icon">
        <TextGlitch
          cycletime={2000}
          css={{ fontSize: "1.5rem", color: theme.palette.primary.main }}
          text={status.statusText}
        />
        <img src={status.icon} alt="" />
      </div>
      <p css={{ fontSize: "1rem" }}>Live status</p>
    </div>
  );
}
