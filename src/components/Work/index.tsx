import { useParams } from "react-router";
import ReactWork from "./ReactWork";
import MediumWork from "./MediumWork";
import PosterWork from "./PosterWork";

import { useHistory } from "react-router-dom";
import { Footer } from "../Footer";
import Wallpapers from "./Wallpapers";

export default function Work() {
  const params = useParams<{ work: string }>();

  const history = useHistory();
  switch (params.work) {
    case "react":
      return (
        <>
          <ReactWork />
          <Footer />
        </>
      );
    case "medium":
      return (
        <>
          <MediumWork />
          <Footer />
        </>
      );
    case "poster":
      return (
        <>
          <PosterWork />
          <Footer />
        </>
      );
    case "wallpapers":
      return (
        <>
          <Wallpapers />
          <Footer />
        </>
      );
    default:
      history.push("/#work");
      return <></>;
  }
}
