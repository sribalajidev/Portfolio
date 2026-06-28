"use client";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import styles from "./Experience.module.scss";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceStats from "./ExperienceStats";
import ExperienceStack from "./ExperienceStack";

import { useGSAP } from "@gsap/react";
import { animateExperience } from "@/components/animations/experience";

export default function Experience() {
  const { experience } = portfolioData;

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
    <section ref={sectionRef} id="experience" className={`py-10 lg:py-[100px] ${styles.experience}`}>
      <div className="grid grid-cols-12 gap-6">
        <div ref={leftRef} className={`px-5 lg:px-[50px] col-span-12 gap-8 lg:gap-12 ${styles.left}`}>
          <div>
            <ExperienceHeader
              subtitle={experience.subtitle}
              title={experience.title}
              description={experience.description}
            />
          </div>
          <div ref={statsRef}>
            <ExperienceStats stats={experience.stats} />
          </div>
        </div>

        <div className="col-span-12">
          <ExperienceStack timeline={experience.timeline} />
        </div>
      </div>
    </section>
  );
}