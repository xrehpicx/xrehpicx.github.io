import { useEffect, useMemo, useState } from "react";

import { createClient, ContentfulClientApi } from "contentful";
import {
  IAboutMeFields,
  IClubsFields,
  IStatusFields,
  IStoryFields,
  IWallpaperCollectionFields,
  IWorkFields,
} from "../../@types/generated/contentful";


type StatusType = { statusText: string; icon: string };

export default function useContentfull() {
  const [Client, setClient] = useState<ContentfulClientApi>();
  const [status, setStatus] = useState<StatusType>({
    statusText: "loading...",
    icon: "https://static.thenounproject.com/png/25591-200.png",
  });
  const [about, setAbout] = useState({
    name: "Raj Sharma",
    role: "Designer & Developer",
    brand: "xrehpicx",
    logo: "",
  });
  const [works, setWorks] = useState<IWorkFields[]>([]);
  const [clubs, setClubs] = useState<IClubsFields[]>([]);
  const [stories, setStories] = useState<IStoryFields[]>([]);
  const [wallpapers, setWallpapers] = useState<IWallpaperCollectionFields[]>(
    []
  );

  useEffect(() => {
    setClient(
      createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "509xlw4x7wrd",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "rw9lC_LO1tO0bBckIP3lj5WDlxB6BH4Dq901N-lpBKc",
      })
    );
  }, []);

  useEffect(() => {
    if (Client) {
      getWorks(Client).then(setWorks);
      const localStatus = localStorage.getItem("status-raj");
      const localAbout = localStorage.getItem("about-raj");
      const localClubs = localStorage.getItem("clubs-raj");

      getStatus(Client).then((s) => {
        if (localStatus && compareStatus(JSON.parse(localStatus), s)) return s;
        localStatus && localStorage.setItem("status-raj", localStatus);
        localStatus && setStatus(JSON.parse(localStatus));
        !localStatus && setStatus(s);
      });

      getAbout(Client).then((a) => {
        if (localAbout && compareAbout(JSON.parse(localAbout), a)) return a;
        localAbout && localStorage.setItem("about-raj", localAbout);
        localAbout && setAbout(JSON.parse(localAbout));
        !localAbout && setAbout(a);
      });
      getClubs(Client).then((c) => {
        if (localClubs && compareClubs(JSON.parse(localClubs), c)) return c;
        localClubs && localStorage.setItem("clubs-raj", localClubs);
        localClubs && setClubs(JSON.parse(localClubs));
        !localClubs && setClubs(c);
      });
      getWallpapers(Client).then((w) => {
        setWallpapers(w);
      });
      getStories(Client).then((s) => {
        setStories(s);
      });
    }
  }, [Client]);

  return useMemo(() => {
    return { status, about, works, clubs, wallpapers, stories };
  }, [status, about, works, clubs, wallpapers, stories]);
}

function compareStatus(status: StatusType, oldstatus: StatusType) {
  if (
    status.statusText === oldstatus.statusText &&
    status.icon === oldstatus.icon
  ) {
    return true;
  }
  return false;
}
type AboutType = {
  name: string;
  role: string;
  brand: string;
  logo: string;
};

function compareAbout(about: AboutType, oldabout: AboutType) {
  if (
    about.name === oldabout.name &&
    about.role === oldabout.role &&
    about.brand === oldabout.brand &&
    about.logo === oldabout.logo
  ) {
    return true;
  }
  return false;
}

function compareClubs(clubs: IClubsFields[], oldclubs: IClubsFields[]) {
  if (
    clubs.length === oldclubs.length &&
    clubs.every((club, index) => club === oldclubs[index])
  ) {
    return true;
  }
  return false;
}

/* function compareWorks(works: IWorkFields[], oldworks: IWorkFields[]) {
  if (works.length === oldworks.length) {
    for (const { i, work } of works.map((work, i) => ({
      i,
      work,
    }))) {
      if (
        work.title === oldworks[i].title ||
        work.body === oldworks[i].body ||
        (work.image &&
          oldworks[i] &&
          oldworks[0].image &&
          work.image[0]?.fields.file.url ===
            oldworks[i]?.image[0]?.fields?.file.url)
      ) {
        return true;
      }
    }
    return false;
  }
  return false;
} */

async function getStatus(Client: ContentfulClientApi) {
  return await Client.getEntries<IStatusFields>({
    content_type: "status",
  }).then((response) => {
    return {
      statusText: response.items[0].fields.statusText || "null",
      icon: response.items[0].fields.icon?.fields.file.url || "null",
    };
  });
}
async function getWallpapers(Client: ContentfulClientApi) {
  return await Client.getEntries<IWallpaperCollectionFields>({
    content_type: "wallpaperCollection",
  }).then((response) => response.items.map((item) => item.fields));
}
async function getStories(Client: ContentfulClientApi) {
  return await Client.getEntries<IStoryFields>({
    content_type: "story",
  }).then((response) => response.items.map((item) => item.fields));
}

async function getAbout(Client: ContentfulClientApi) {
  return await Client.getEntries<IAboutMeFields>({
    content_type: "aboutMe",
  }).then((response) => {
    return {
      name: response.items[0].fields.name || "Raj Sharma",
      role: response.items[0].fields.role || "Designer & Developer",
      brand: response.items[0].fields.brand || "xrehpicx",
      logo: response.items[0].fields.logo?.fields.file.url || "",
    };
  });
}

async function getWorks(Client: ContentfulClientApi) {
  return await Client.getEntries<IWorkFields>({
    content_type: "work",
  }).then((response) => {
    return response.items.map((item) => item.fields);
    // console.log(response.items.map((item) => item.fields));
  });
}

async function getClubs(Client: ContentfulClientApi) {
  return await Client.getEntries<IClubsFields>({
    content_type: "clubs",
  }).then((response) => {
    return response.items.map((item) => item.fields);
    // console.log(response.items.map((item) => item.fields));
  });
}
