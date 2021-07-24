import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDencrypt } from "use-dencrypt-effect";

export const StyledWakeup = styled(motion.div)<{ failed?: string }>`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => (!p.failed ? p.theme.colors.main.accent : "red")};

  opacity: 0.6;
`;

export function TextLoader({
  text,
  failed,
}: {
  text: string;
  failed?: string;
}) {
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
    <StyledWakeup failed={failed}>
      <p>{failed || result}</p>
    </StyledWakeup>
  );
}
