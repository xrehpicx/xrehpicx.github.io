import { useMotionValue, useTransform } from "framer-motion";
import React, { useCallback, useMemo } from "react";

export function useLookatme() {
  const xm = useMotionValue(0);
  const ym = useMotionValue(0);

  const motiondivider = 30;
  const x = useTransform(
    xm,
    [-window.innerWidth, window.innerWidth],
    [-window.innerWidth / motiondivider, window.innerWidth / motiondivider]
  );
  const y = useTransform(
    ym,
    [-window.innerHeight, window.innerHeight],
    [-window.innerHeight / motiondivider, window.innerHeight / motiondivider]
  );

  const xr = useMotionValue(200);
  const yr = useMotionValue(200);

  const angle = 10;

  const rotateX = useTransform(ym, [0, 400], [angle, -angle]);
  const rotateY = useTransform(xm, [0, 400], [-angle, angle]);

  const handleMouse = useCallback(
    function (event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      xm.set(event.clientX - window.innerWidth / 2);
      ym.set(event.clientY - window.innerHeight / 2);

      const rect = event.currentTarget.getBoundingClientRect();

      xr.set(event.clientX - rect.left);
      yr.set(event.clientY - rect.top);
    },
    [xm, xr, ym, yr]
  );

  const looker = useMemo(
    () => ({ x, y, rotateX, rotateY, handleMouse }),
    [x, y, rotateX, rotateY, handleMouse]
  );
  return looker;
}
