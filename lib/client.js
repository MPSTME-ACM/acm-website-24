import "server-only";
import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-07-21",
  useCdn: process.env.NODE_ENV === "production",
};

const sanityClient = createClient(config);

export default sanityClient;