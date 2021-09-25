import { useMotionValue, useTransform } from "framer-motion";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function useLookatme({
  angle = 10,
  divider = 30,
}: {
  angle?: number;
  divider?: number;
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
  const xshadow = useTransform(
    xm,
    [-window.innerWidth, window.innerWidth],
    [-window.innerWidth / divider, window.innerWidth / divider]
  );
  const yshadow = useTransform(
    ym,
    [-window.innerHeight, window.innerHeight],
    [-window.innerHeight / divider, window.innerHeight / divider]
  );

  const xr = useMotionValue(200);
  const yr = useMotionValue(200);

  const rotateX = useTransform(ym, [0, 400], [angle, -angle]);
  const rotateY = useTransform(xm, [0, 400], [-angle, angle]);

  const handleMouse = useCallback(
    function (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      if (window.innerWidth > 500) {
        setReturnstyle(true);
        xm.set(event.clientX - window.innerWidth / 2);
        ym.set(event.clientY - window.innerHeight / 2);

        const rect = event.currentTarget.getBoundingClientRect();
        xr.set(rect.left - event.clientX);
        yr.set(rect.top - event.clientY);
        return;
      }
      setReturnstyle(false);
    },
    [xm, xr, ym, yr]
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
        ? { x, y, rotateX, rotateY, xshadow, yshadow }
        : undefined,
      handleMouse,
    }),
    [x, y, rotateX, rotateY, handleMouse, returnStyle, xshadow, yshadow]
  );

  return looker;
}
