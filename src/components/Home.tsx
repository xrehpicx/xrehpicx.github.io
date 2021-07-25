import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { wakeupServer } from "../utils/api";
import version from "../version.json";
import { About } from "./About";
import { TextLoader } from "./TextLoader";
import { TextGlitch } from "./TextGlitch";
import { Works } from "./Works";
import { motion, useMotionValue, useTransform } from "framer-motion";

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

const RefreshMenu = styled(motion.div)`
  background-color: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 10px;
  }
`;

const RefershMenuText = styled(TextGlitch)`
  margin-bottom: 20px;
`;

export function Home() {
  const [serverState, setServerState] = useState(0);

  useEffect(() => {
    wakeupServer()
      .then(setServerState)
      .catch(() => setServerState(-1));
  }, []);
  const y = useMotionValue(0);
  const filter = useTransform(y, [0, 100], ["blur(0px)", "blur(10px)"]);

  const height = useTransform(y, [0, 100], [0, 50]);
  const reloadTextOpacity = useTransform(y, [0, 100], [0, 1]);
  const reloadTexty = useTransform(y, [0, 100], [0, 10]);

  return (
    <>
      <RefreshMenu style={{ height }} className="refresh-menu">
        <RefershMenuText
          style={{ opacity: reloadTextOpacity, y: reloadTexty }}
          text="release to reload"
        ></RefershMenuText>
      </RefreshMenu>
      <StyledHome
        style={{ y, filter }}
        drag="y"
        onDragEnd={() => {
          const h = height.get();
          if (h <= 50 && h > 40) {
            window.location.reload();
          }
        }}
        dragConstraints={{ top: 0, bottom: 0 }}
      >
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
    </>
  );
}
