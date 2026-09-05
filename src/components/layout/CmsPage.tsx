import { notFound } from "next/navigation";

import PageRenderer from "./PageRenderer";

import { getPage } from "@/sanity/queries/page";

interface CmsPageProps {
  slug: string;
}

export default async function CmsPage({
  slug,
}: CmsPageProps) {
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return <PageRenderer sections={page.sections} />;
}