import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { wakeupServer } from "../utils/api";
import version from "../version.json";
import { About } from "./About";
import { TextLoader } from "./TextLoader";
import { TextGlitch } from "./TextGlitch";
import { Works } from "./Works";
import { motion, useMotionValue } from "framer-motion";

const StyledHome = styled(motion.div)`
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

/*
const SideMenu = styled(motion.div)`
  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  width: 100px;
  height: ${(p) => p.theme.height}px;
  background: ${(p) => p.theme.colors.main.accent};
`; */

export function Home() {
  const [serverState, setServerState] = useState(0);

  useEffect(() => {
    wakeupServer()
      .then(setServerState)
      .catch(() => setServerState(-1));
  }, []);

  // const x = useMotionValue(0);

  return (
    <>
      <StyledHome>
        <About serverState={serverState} />
        <motion.div className="gap"></motion.div>
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
    </>
  );
}
