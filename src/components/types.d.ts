import { DefaultTheme } from "styled-components";
export type ProjectType = {
  title: string;
  props: {
    name?: any;
    status: { color: string; id: string; name: string };
    association?: string;
    description?: { content: string; link: string | null };
  };
  links: {
    github?: string;
  };
  page?: any;
};

export interface IThemer {
  theme: DefaultTheme;
  Global: GlobalStyleComponent<{}, DefaultTheme>;
  toggle: () => void;
  dispatch: React.Dispatch<actionprops>;
}
