import { useParams } from "react-router";
import ReactWork from "./ReactWorks";
import NotFound from "../NotFound";

export default function Work() {
  const params = useParams<{ work: string }>();

  switch (params.work) {
    case "react":
      return <ReactWork />;
    default:
      return <NotFound />;
  }
}
