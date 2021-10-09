import "@emotion/react";
import { ThemeOptions } from "@mui/material";

declare module "@emotion/react" {
  export type Theme = ThemeOptions;
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
