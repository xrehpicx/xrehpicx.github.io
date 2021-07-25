import React, { useEffect, useRef, useState } from "react";
import { getProjects } from "../utils/api";
import { ProjectType } from "./types";
import { TextLoader } from "./TextLoader";
import { StyledWork } from "./Work";
import styled from "styled-components";
import { motion } from "framer-motion";

const ScrollWorks = styled(motion.div)`
  background: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  padding: 20px;
  z-index: 100;
  transition: background 300ms ease-out, color 300ms ease-out;
  h4 {
    opacity: ${(p) => (p.theme.colors.main.type === "light" ? 1 : 0.8)};
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
    opacity: ${(p) => (p.theme.colors.main.type === "light" ? 1 : 0.6)};
    @media (max-width: 500px) {
      font-size: 1.2rem;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export function Works() {
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
          <h4 className="works-title" onClick={() => containerRef.current?.scrollIntoView()}>
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
