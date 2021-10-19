/** @jsxImportSource @emotion/react */
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ContentfullContext } from "../Contexts/Contentfull";

export function Status() {
  const theme = useTheme();
  const { status } = useContext(ContentfullContext);

  return (
    <div css={{ marginBottom: "1rem" }} className="status">
      <div className="status-icon">
        <p css={{ fontSize: "1.5rem", color: theme.palette.primary.main }}>
          {status.statusText}
        </p>
        <img src={status.icon} alt="" />
      </div>
      <p css={{ fontSize: "1rem" }}>Current status</p>
    </div>
  );
}
