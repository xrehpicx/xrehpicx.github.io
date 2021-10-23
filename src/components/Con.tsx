/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  IconButton,
  InputBase,
  Slider,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useHistory } from "react-router";
import axios from "axios";

export function Con() {
  const theme = useTheme();
  const [brightness, setBrightness] = useState(100);
  const history = useHistory();
  return (
    <motion.div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.2rem 1.6rem;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding-bottom: 2rem;
        /* filter: brightness(${brightness}%); */
      `}
    >
      <Typography variant="h4">NVM</Typography>
      <div
        css={css`
          filter: brightness(${brightness}%);
        `}
      >
        <InputBase
          css={css`
            caret-color: ${theme.palette.primary.main};
            /* border: 1px solid ${theme.palette.primary.main}; */
            height: auto;
            width: 100%;
          `}
          defaultValue={localStorage.getItem("nvm-text") || ""}
          multiline
          autoFocus
          onChange={(e) => {
            console.log(e.target.value);
            localStorage.setItem("nvm-text", e.target.value);
          }}
        />
      </div>
      <div
        css={css`
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.2rem 1.8rem;
          background-color: ${theme.palette.background.paper};
        `}
      >
        <IconButton
          onClick={() => {
            setBrightness(0);
            history.push("/");
            window.location.href = "https://mui.com/components/material-icons/";
          }}
        >
          <LockOutlinedIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            console.log("send");
            axios
              .post("https://olvi.herokuapp.com/api/response/hani", {
                message: localStorage.getItem("nvm-text"),
              })
              .then((res) => {
                alert("Message sent!");
              })
              .catch((res) => {
                alert("failed!");
              });
          }}
        >
          <SendOutlinedIcon />
        </IconButton>
        <Slider
          min={0}
          max={100}
          value={brightness}
          onChange={(_, value) => {
            !Array.isArray(value) && setBrightness(value);
          }}
          valueLabelDisplay="auto"
        />
      </div>
    </motion.div>
  );
}
