import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: {
        type: "dark" | "light";
        accent: string;
        background: string;
        text: string;
      };
    };
  }
}

declare global {
  interface Window {
    data: any;
  }
}
