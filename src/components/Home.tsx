import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getProjects, wakeupServer } from "../utils/api";
import { ProjectType } from "./types";
import version from "../version.json";
import { motion } from "framer-motion";

import { About } from "./About";
import { TextLoader } from "./TextLoader";
import { TextGlitch } from "./TextGlitch";

const StyledHome = styled.div`
  background: ${(p) => p.theme.colors.main.background};
  .gap {
    pointer-events: none;
    height: 91.5vh;
  }
  @media (max-width: 500px) {
    .gap {
      height: ${(p) => window.innerHeight - 55}px;
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

const ScrollWorks = styled(motion.div)`
  background: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  padding: 20px;

  h4 {
    opacity: 0.8;
    user-select: none;
    cursor: pointer;
  }

  .works {
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: ${(p) => p.theme.colors.main.background};
    margin-right: 10px;
  }
  .links {
    display: flex;
    flex-wrap: wrap;
  }
  .links a {
    opacity: 0.6;
    @media (max-width: 500px) {
      font-size: 1.2rem;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

function Works() {
  const [works, setWorks] = useState<ProjectType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [failedreq, setFailedreq] = useState("");
  useEffect(() => {
    getProjects()
      .then(setWorks)
      .catch(() => {
        setFailedreq("request failed");
      });
  }, []);
  return (
    <>
      {!!works.length ? (
        <ScrollWorks
          ref={containerRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h4 onClick={() => containerRef.current?.scrollIntoView()}>
            My Works
          </h4>
          <div className="works">
            {works.map((p, i) => (
              <StyledWork project={p} key={window.btoa(p.title)} />
            ))}
          </div>
          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:raj.fps2000@gmail.com"
            >
              email
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/xrehpicx"
            >
              instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCbOz1gtKF_BP00uCQhNan_w"
            >
              youtube
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/xrehpicx"
            >
              github
            </a>
          </div>
        </ScrollWorks>
      ) : (
        <TextLoader failed={failedreq} text="fetching works..." />
      )}
    </>
  );
}

interface WorkProps {
  project: ProjectType;
  className?: string;
}

const StyledWork = styled(Work)<WorkProps>`
  margin: 10px 0;
  opacity: ${(p) => {
    if (p.project.props.status.name === "discontinued") {
      return 0.4;
    }
    if (p.project.props.status.name === "In development") {
      return 0.8;
    }
    if (p.project.props.status.name === "Completed") {
      return 0.6;
    }
  }};

  h2 {
    width: fit-content;
    cursor: ${(p) => (Object.values(p.project.links).length ? "pointer" : "")};
    font-size: 2rem;
  }
  .about-project {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
  .description {
    font-weight: 600;
  }
  .status {
    font-size: 0.8rem;
  }
`;

function Work({ project, className }: WorkProps) {
  return (
    <div className={className}>
      <h2
        onClick={
          Object.values(project.links).length
            ? () => window.open(Object.values(project.links)[0])
            : undefined
        }
      >
        {project.title}
      </h2>
      <div className="about-project">
        {project.props.description && (
          <span className="description">
            {project.props.description?.content}
          </span>
        )}
        <span className="status">{project.props.status.name}</span>
      </div>
    </div>
  );
}

export const StyledWakeup = styled(motion.div)<{ failed?: string }>`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => (!p.failed ? p.theme.colors.main.accent : "red")};

  opacity: 0.6;
`;
