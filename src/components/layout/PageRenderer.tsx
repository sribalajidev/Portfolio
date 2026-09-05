"use client";

import { useCallback, useEffect, useState } from "react";

import Loader from "@/components/ui/Loader/Loader";

import { componentRegistry } from "./componentRegistry";

import type { Section } from "@/sanity/types/page";

interface PageRendererProps {
  sections: Section[];
}

export default function PageRenderer({
  sections,
}: PageRendererProps) {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderStart, setLoaderStart] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");

      requestAnimationFrame(() => {
        setLoaderStart(true);
      });
    } else {
      setShowLoader(false);
      setContentReady(true);
    }
  }, []);

  const handleLoaderFinish = useCallback(() => {
    setShowLoader(false);
    setContentReady(true);
  }, []);

  return (
    <>
      {showLoader && (
        <Loader
          start={loaderStart}
          onFinish={handleLoaderFinish}
        />
      )}

      {contentReady &&
        sections.map((section) => {
          const Component = componentRegistry[section._type];

          if (!Component) {
            console.warn(
              `No component registered for "${section._type}"`
            );
            return null;
          }

          return (
            <Component
              key={section._id}
              data={section as any}
            />
          );
        })}
    </>
  );
}