import { useParams } from "react-router";
import ReactWork from "./ReactWorks";
import NotFound from "../NotFound";
import { useHistory } from "react-router-dom";

export default function Work() {
  const params = useParams<{ work: string }>();

  const history = useHistory();
  switch (params.work) {
    case "react":
      return <ReactWork />;
    default:
      history.push("/#work");
      return <></>;
  }
}
