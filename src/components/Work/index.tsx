import { useParams } from "react-router";
import ReactWork from "./ReactWork";
import MediumWork from "./MediumWork";
import PosterWork from "./PosterWork";

import { useHistory } from "react-router-dom";

export default function Work() {
  const params = useParams<{ work: string }>();

  const history = useHistory();
  switch (params.work) {
    case "react":
      return <ReactWork />;
    case "medium":
      return <MediumWork />;
    case "poster":
      return <PosterWork />;
    default:
      history.push("/#work");
      return <></>;
  }
}
