"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import styles from "./About.module.scss";

import { Timezone } from "@/sanity/types/about";

const Globe = dynamic(
  () => import("@/components/ui/Globe/Globe"),
  {
    ssr: false,
  }
);

interface TimezoneCardProps extends Timezone {
  ref?: React.Ref<HTMLDivElement>;
}

export default function TimezoneCard({
  ref,
  title,
  subtitle,
  locations,
}: TimezoneCardProps) {
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlobe(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      className={`col-span-1 rounded-3xl border border-white/30 ${styles.timezoneCard}`}
    >
      <div className="p-5">
        <p className="text-2xl font-bold">{title}</p>

        <p className="text-base text-[#a2a2a2]">
          {subtitle}
        </p>
      </div>

      <div className={styles.globeContainer}>
        {showGlobe && <Globe locations={locations} />}
      </div>
    </div>
  );
}