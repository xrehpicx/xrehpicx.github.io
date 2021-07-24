import { useDencrypt } from "use-dencrypt-effect";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

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
  serverState: boolean | number;
}

const stats: string[] = ["designer", "developer", "student"];

export function About({ serverState }: AboutProps) {
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
