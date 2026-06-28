import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import styles from "./About.module.scss";
import AboutHeader from "./AboutHeader";
import CollaborationCard from "./CollaborationCard";
import ProcessCard from "./ProcessCard";
import TimezoneCard from "./TimezoneCard";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animateAbout } from "@/components/animations/about";

export default function About() {
  const { about } = portfolioData;
  
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const collaborationRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const timezoneRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
  animateAbout({
    section: sectionRef.current,
    header: headerRef.current,
    collaboration: collaborationRef.current,
    process: processRef.current,
    timezone: timezoneRef.current,
  });
});

  return (
    <section ref={sectionRef} id="about" className={`bg-black mt-2.5 text-white py-10 px-5 lg:py-[100px] lg:px-[50px] rounded-t-[30px] lg:rounded-t-[50px] ${styles.about}`}>
      <div ref={headerRef}>
        <AboutHeader
          subtitle={about.subtitle}
          title={about.title}
          description={about.description}
        />
      </div>

      <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:mt-20">
          <CollaborationCard
            ref={collaborationRef}
            title={about.collaboration.title}
            subtitle={about.collaboration.subtitle}
            traits={about.collaboration.traits}
          />
          <ProcessCard
            ref={processRef}
            title={about.process.title}
            subtitle={about.process.subtitle}
            steps={about.process.steps}
          />
          <TimezoneCard
            ref={timezoneRef}
            title={about.timezone.title}
            subtitle={about.timezone.subtitle}
          />
      </div>
    </section>
  );
}