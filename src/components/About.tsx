import { useDencrypt } from "use-dencrypt-effect";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";
import Brightness2RoundedIcon from "@material-ui/icons/Brightness2Rounded";
import Brightness7RoundedIcon from "@material-ui/icons/Brightness7Rounded";
import useLookatme from "../hooks/useLookatme";
import { TextGlitch } from "./TextGlitch";

const FixedAbout = styled(motion.div)`
  --dim: ${(p) => (p.theme.colors.main.type === "light" ? 1 : 0.6)};
  font-weight: 400;
  height: 100vh;
  z-index: 0;
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
  transition: all 300ms ease-out;

  a {
    text-decoration: none;
    color: ${(p) => p.theme.colors.main.accent};
    margin-right: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
  .links {
    display: flex;
    flex-wrap: wrap;
  }
  .links a,
  .subtitle1 {
    opacity: var(--dim);
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
      cursor: grabbing;
    }
    .can {
      margin-left: 6px;
      margin-bottom: 4px;
    }
  }
`;

interface AboutProps {
  serverState: boolean | number;
  extras?: any;
}

const stats: string[] = ["designer", "developer", "student"];
const RefreshMenu = styled(motion.div)`
  background-color: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 10px;
  }
`;

const RefershMenuText = styled(TextGlitch)`
  margin-bottom: 20px;
`;
export function About({ serverState, extras }: AboutProps) {
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

  const { style, handleMouse } = useLookatme({});

  const y = useMotionValue(0);
  const filter = useTransform(y, [0, 100], ["blur(0px)", "blur(10px)"]);

  const height = useTransform(y, [0, 100], [0, 50]);
  const height2 = useTransform(y, [100, 200], [0, 50]);

  const reloadTextOpacity = useTransform(height, [20, 50], [0, 1]);
  const reloadTexty = useTransform(height, [0, 50], [0, 10]);

  const reloadTextOpacity2 = useTransform(height2, [20, 50], [0, 1]);
  const reloadTexty2 = useTransform(height2, [0, 50], [0, 10]);

  return (
    <>
      <RefreshMenu style={{ height }} className="refresh-menu">
        <RefershMenuText
          style={{ opacity: reloadTextOpacity, y: reloadTexty }}
          text="release to reload"
        ></RefershMenuText>
      </RefreshMenu>
      <RefreshMenu
        style={{ height: height2, background: "red" }}
        className="refresh-menu"
      >
        <RefershMenuText
          style={{ opacity: reloadTextOpacity2, y: reloadTexty2 }}
          text="release to hard reload"
        ></RefershMenuText>
      </RefreshMenu>
      <FixedAbout
        style={{ y, filter }}
        drag="y"
        onDragEnd={(e) => {
          const h = height.get();
          const h2 = height2.get();
          if (h <= 50 && h > 40 && h2 <= 40) {
            window.location.reload();
            return;
          }
          if (h2 <= 50 && h2 > 40 && h <= 50) {
            localStorage.clear();
            // @ts-ignore
            window.location.reload(true);
            return;
          }

          if (y.get() < 0) {
            document.querySelector(".works-title")?.scrollIntoView();
          }
          
        }}
        /* onDrag={e=>{
        }} */
        dragConstraints={{ top: 0, bottom: 0 }}
        onMouseMove={handleMouse}
      >
        <Header />
        <motion.div
          style={style}
          drag={!!style}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
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
            animate={{
              y: 0,
              opacity: 1,
              textShadow: `10px 10px 2px 2px white`,
            }}
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
        </motion.div>
      </FixedAbout>
    </>
  );
}
const StyledHeader = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;

  svg {
    display: block;
  }
`;

const LightButton = styled(motion(Brightness2RoundedIcon))`
  cursor: pointer;
`;
const DarkButton = styled(motion(Brightness7RoundedIcon))`
  cursor: pointer;
`;

function Header() {
  const {
    themer: { theme, toggle },
  } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <motion.div
        whileTap={{ scale: 2 }}
        onTap={() => toggle()}
        className="theme-toggle"
      >
        {theme.colors.main.type === "dark" ? <LightButton /> : <DarkButton />}
      </motion.div>
    </StyledHeader>
  );
}
