import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getProjects, wakeupServer } from "../utils/api";
import { useDencrypt } from "use-dencrypt-effect";
import { ProjectType } from "./types";

const StyledHome = styled.div`
  background: ${(p) => p.theme.colors.main.background};
  .gap {
    pointer-events: none;
    height: 91.5vh;
  }
  @media (max-width: 500px) {
    .gap {
      height: ${(p) => {
        if (window.matchMedia("(display-mode: standalone)").matches) {
          return "93.5vh";
        }
        return "87vh";
      }};
    }
  }
`;

export function Home() {
  const [serverState, setServerState] = useState(false);
  useEffect(() => {
    wakeupServer()
      .then(setServerState)
      .catch(() => setServerState(false));
  }, []);
  return (
    <StyledHome>
      <About serverState={serverState} />
      <div className="gap"></div>
      {serverState ? <Works /> : <TextLoader text="waking up my server..." />}
    </StyledHome>
  );
}

const FixedAbout = styled.div`
  height: 100vh;
  display: flex;
  color: ${(p) => p.theme.colors.main.accent};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;

  a {
    text-decoration: none;
    color: ${(p) => p.theme.colors.main.accent};
    margin-right: 10px;
  }
  .links {
    display: flex;
    flex-wrap: wrap;
  }
  .links a,
  .subtitle1 {
    opacity: 0.6;
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }

    &:hover {
      opacity: 1;
    }
  }

  .big-message {
    font-size: 4rem;
    margin: 10px 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .can {
    font-size: 1.5rem;
    font-weight: 400;
    /* display: inline-block; */
    min-width: 120px;
    max-width: 130px;
    overflow-y: hidden;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    .big-message {
      font-size: 2.3rem;
      margin: 10px 0;
    }
    .can {
      margin-left: 6px;
      margin-bottom: 4px;
    }
  }
`;

interface AboutProps {
  serverState: boolean;
}

const stats: string[] = ["designer", "developer", "student"];

function About({ serverState }: AboutProps) {
  const { result: status, dencrypt } = useDencrypt({ interval: 20 });

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      const s: string = stats[i];
      if (s) {
        dencrypt(" " + s);
        i += 1;
        return;
      }
      i = 0;
      dencrypt(" " + stats[i]);
    }, 2000);
  }, [dencrypt]);
  return (
    <FixedAbout>
      <div>
        <motion.div
          animate={{ y: 0, opacity: 0.6 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            target="_blank"
            className="subtitle1"
            rel="noreferrer"
            href="https://instagram.com/xrehpicx"
          >
            xrehpicx
          </a>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="big-message"
        >
          Raj Sharma
          {!!status && (
            <motion.span
              initial={{ minWidth: "0px", y: 20, opacity: 0 }}
              animate={{ minWidth: "120px", y: 0, opacity: 1 }}
              className="can"
            >
              {status}
            </motion.span>
          )}
        </motion.h1>

        <motion.div
          className="links"
          transition={{ delay: 0.5 }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
        >
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
        </motion.div>
      </div>
    </FixedAbout>
  );
}

const ScrollWorks = styled(motion.div)`
  background: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  padding: 20px;

  h4 {
    opacity: 0.8;
    user-select: none;
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
  useEffect(() => {
    getProjects().then(setWorks);
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
        <TextLoader text="fetching works..." />
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

const StyledWakeup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.theme.colors.main.accent};
  opacity: 0.6;
`;
function TextLoader({ text }: { text: string }) {
  const { result, dencrypt } = useDencrypt({ interval: 10 });

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const interv = setInterval(() => {
      dencrypt("xrehpicx");
      timeout = setTimeout(() => dencrypt(text), 10);
    }, 1500);
    return () => {
      clearInterval(interv);
      timeout && clearTimeout(timeout);
    };
  }, [dencrypt, text]);
  return (
    <StyledWakeup>
      <p>{result}</p>
    </StyledWakeup>
  );
}
