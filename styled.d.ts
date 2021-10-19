import "@emotion/react";
import { Theme as MuiTheme } from "@mui/material";

declare module "@emotion/react" {
  export type Theme = MuiTheme;
}

declare global {
  interface Window {
    data: any;
  }
}
declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
  }
}
