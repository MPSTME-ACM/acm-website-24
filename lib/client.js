import "server-only";
import { createClient } from "next-sanity";

const config = {
  projectId: "atl90ed5" || "",
  dataset: "production",
  apiVersion: "2023-07-21",
  useCdn: true,
};

const sanityClient = createClient(config);

export default sanityClient;
