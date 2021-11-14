/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { InputBase, Typography, useTheme } from "@mui/material";
import { TextGlitch } from "../TextGlitch";
import { ReactComponent as Triangle } from "../../assets/Triangle.svg";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { wakeServer } from "../../utils/api";
import { ContentfullContext } from "../../Contexts/Contentfull";

export default function CLI() {
  const [loadingText, setLoadingText] = useState("");

  const { about } = useContext(ContentfullContext);

  useEffect(() => {
    setLoadingText("waking server up...");
    wakeServer().then(() => {
      setLoadingText(about.brand);
    });
  }, [about]);
  return (
    <div
      css={css`
        height: 100vh;
      `}
    >
      <Header />
      <TerminalInput />
    </div>
  );
}

function TerminalInput() {
  return (
    <div
      css={css`
        padding: 0.5rem 2rem;
      `}
    >
      <TInput />
    </div>
  );
}

function TInput() {
  const theme = useTheme();
  return (
    <div
      css={css`
        input {
          background: transparent;
          border: none;
          outline: none;
          width: min-content;
          color: ${theme.palette.primary.main};
          caret-color: transparent;
        }
        .caret {
          display: inline;
          width: 10px;
          height: 10px;
        }
      `}
    >
      <input />
      <div className="caret"></div>
    </div>
  );
}

function Header() {
  const theme = useTheme();
  return (
    <div
      css={css`
        padding: 0.5rem 2rem;
        color: ${theme.palette.primary.main};
      `}
    >
      <Typography variant="h1">
        <TextGlitch text={"cli"} interval={60} />
      </Typography>
    </div>
  );
}

function Line({ text }: { text: string }) {
  return (
    <div>
      <TextGlitch text={text} />
    </div>
  );
}
