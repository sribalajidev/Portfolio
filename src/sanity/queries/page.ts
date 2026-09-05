import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Page } from "../types/page";

const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,

    sections[]->{
      ...
    }
  }
`;

export async function getPage(slug: string): Promise<Page> {
  return client.fetch<Page>(pageQuery, { slug });
}