import { useMotionValue, useTransform } from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useMemo,
  
  useState,
} from "react";

export default function useLookatme({
  angle = 10,
  divider = 30,
  fixed,
}: {
  angle?: number;
  divider?: number;
  fixed?: boolean;
}) {
  const [returnStyle, setReturnstyle] = useState(false);

  const xm = useMotionValue(0);
  const ym = useMotionValue(0);

  const x = useTransform(
    xm,
    [-window.innerWidth, window.innerWidth],
    [-window.innerWidth / divider, window.innerWidth / divider]
  );
  const y = useTransform(
    ym,
    [-window.innerHeight, window.innerHeight],
    [-window.innerHeight / divider, window.innerHeight / divider]
  );
  /* const xshadow = useTransform(
    xm,
    [-window.innerWidth, window.innerWidth],
    [-window.innerWidth / divider, window.innerWidth / divider]
  );
  const yshadow = useTransform(
    ym,
    [-window.innerHeight, window.innerHeight],
    [-window.innerHeight / divider, window.innerHeight / divider]
  ); */

  const rotateX = useTransform(ym, [0, 400], [angle, -angle]);
  const rotateY = useTransform(xm, [0, 400], [-angle, angle]);

  // const parentRef = useRef<DOMRect | null>(null);

  const handleMouse = useCallback(
    function (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      if (window.innerWidth > 500) {
        setReturnstyle(true);
        // if (!parentRef.current) {
        //   parentRef.current = event.currentTarget.getBoundingClientRect();
        // }
        // const rect = parentRef.current;
        xm.set(event.clientX - window.innerWidth / 2);
        ym.set(event.clientY - window.innerHeight / 2);

        // xr.set(event.clientX - rect.left);
        // yr.set(event.clientY - rect.top);
        return;
      }
      setReturnstyle(false);
    },
    [xm, ym]
  );

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 500) {
        setReturnstyle(true);
        return;
      }
      setReturnstyle(false);
    });
  }, []);

  const looker = useMemo(
    () => ({
      style: returnStyle
        ? {
            x: fixed ? undefined : x,
            y: fixed ? undefined : y,
            rotateX,
            rotateY,
          }
        : undefined,
      handleMouse,
    }),
    [returnStyle, fixed, x, y, rotateX, rotateY, handleMouse]
  );

  return looker;
}
