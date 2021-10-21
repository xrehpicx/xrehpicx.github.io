/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useScrollDirection } from "react-use-scroll-direction";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Triangle } from "../assets/Triangle.svg";

const MTriangle = motion(Triangle);

export function ScrollHelper() {
  const { scrollDirection } = useScrollDirection();
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (scrollDirection === "UP") {
      setAngle(0);
    } else if (scrollDirection === "DOWN") {
      setAngle(180);
    }
  }, [scrollDirection]);

  return (
    <motion.div
      layoutId="scroll-helper"
      css={css`
        position: fixed;
        bottom: 0;
        /* right: 0; */
        padding: 1.6rem 0;
        align-self: flex-end;
        z-index: 10;
      `}
      onClick={() => {
        scrol(angle);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: window.scrollY > 0 ? 1 : 0 }}
    >
      <MTriangle animate={{ rotate: angle }} />
    </motion.div>
  );
}
function scrol(direction: number | null) {
  if (direction === 180) {
    // if ("scrollRestoration" in history) {
    // }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0);
    return;
  }
  if (direction === 0) {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
