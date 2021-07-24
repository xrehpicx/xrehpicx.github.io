import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

export function TextGlitch({
  text, className, interval,
}: {
  text: string;
  className?: string;
  interval?: number;
}) {
  const { result, dencrypt } = useDencrypt({ interval: interval || 10 });

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const interv = setInterval(() => {
      dencrypt("x");
      timeout = setTimeout(() => dencrypt(text), interval || 10);
    }, 1500);
    return () => {
      clearInterval(interv);
      timeout && clearTimeout(timeout);
    };
  }, [dencrypt, text, interval]);
  return <p className={className}>{result}</p>;
}
