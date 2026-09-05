import CmsPage from "@/components/layout/CmsPage";

interface DynamicPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DynamicPage({
  params,
}: DynamicPageProps) {
  const { slug } = await params;

  return <CmsPage slug={slug} />;
}