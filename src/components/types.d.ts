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
