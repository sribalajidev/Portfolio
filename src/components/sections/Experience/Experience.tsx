"use client";

import { useRef } from "react";

import styles from "./Experience.module.scss";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceStats from "./ExperienceStats";
import ExperienceStack from "./ExperienceStack";

import { Experience as ExperienceType } from "@/sanity/types/experience";

import { useGSAP } from "@gsap/react";
import { animateExperience } from "@/components/animations/experience";

interface ExperienceProps {
  data: ExperienceType;
}

export default function Experience({
  data,
}: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateExperience({
      section: sectionRef.current,
      left: leftRef.current,
      stats: statsRef.current,
    });
  });

  return (
    <section id={data._type} 
      ref={sectionRef}
      className={`py-10 lg:py-[100px] ${styles.experience}`}
    >
      <div className="grid grid-cols-12 gap-6">
        <div
          ref={leftRef}
          className={`px-5 lg:px-[50px] col-span-12 gap-8 lg:gap-12 ${styles.left}`}
        >
          <div>
            <ExperienceHeader
              subtitle={data.subtitle}
              title={data.title}
              description={data.description}
            />
          </div>

          <div ref={statsRef}>
            <ExperienceStats
              stats={data.stats}
            />
          </div>
        </div>

        <div className="col-span-12">
          <ExperienceStack
            timeline={data.timeline}
          />
        </div>
      </div>
    </section>
  );
}