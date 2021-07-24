import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { wakeupServer } from "../utils/api";
import version from "../version.json";
import { About } from "./About";
import { TextLoader } from "./TextLoader";
import { TextGlitch } from "./TextGlitch";
import { Works } from "./Works";

const StyledHome = styled.div`
  background: ${(p) => p.theme.colors.main.background};
  .gap {
    pointer-events: none;
    height: 91.5vh;
  }
  @media (max-width: 500px) {
    .gap {
      height: ${(p) => (p.theme.height || window.innerHeight) - 55}px;
    }
  }
`;

const VersionText = styled(TextGlitch)`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.5;
  margin: 6px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

export function Home() {
  const [serverState, setServerState] = useState(0);
  useEffect(() => {
    wakeupServer()
      .then(setServerState)
      .catch(() => setServerState(-1));
  }, []);
  return (
    <StyledHome>
      <About serverState={serverState} />
      <div className="gap"></div>
      {serverState > 0 ? (
        <Works />
      ) : (
        <TextLoader
          failed={serverState < 0 ? "failed to get works" : ""}
          text="waking up my server..."
        />
      )}
      <VersionText text={"v" + version.version} />
      <VersionText text="designed and built by ofc...me" interval={20} />
    </StyledHome>
  );
}
