import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import { StyledWakeup } from "./Home";

export function TextLoader({ text, failed }: { text: string; failed?: string; }) {
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
