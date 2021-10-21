import { useEffect, useMemo, useState } from "react";

import { createClient, ContentfulClientApi } from "contentful";
import {
  IAboutMeFields,
  IClubsFields,
  IStatusFields,
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
      Client.getEntries<IStatusFields>({
        content_type: "status",
      }).then((response) => {
        setStatus({
          statusText: response.items[0].fields.statusText || "null",
          icon: response.items[0].fields.icon?.fields.file.url || "null",
        });
      });
      Client.getEntries<IAboutMeFields>({
        content_type: "aboutMe",
      }).then((response) => {
        setAbout({
          name: response.items[0].fields.name || "Raj Sharma",
          role: response.items[0].fields.role || "Designer & Developer",
          brand: response.items[0].fields.brand || "xrehpicx",
          logo: response.items[0].fields.logo?.fields.file.url || "",
        });
      });
      Client.getEntries<IWorkFields>({
        content_type: "work",
      }).then((response) => {
        setWorks(response.items.map((item) => item.fields));
        // console.log(response.items.map((item) => item.fields));
      });
      Client.getEntries<IClubsFields>({
        content_type: "clubs",
      }).then((response) => {
        setClubs(response.items.map((item) => item.fields));
        // console.log(response.items.map((item) => item.fields));
      });
    }
  }, [Client]);

  return useMemo(() => {
    return { status, about, works, clubs };
  }, [status, about, works, clubs]);
}
