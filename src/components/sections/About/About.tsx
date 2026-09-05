import { useRef } from "react";
import styles from "./About.module.scss";
import AboutHeader from "./AboutHeader";
import CollaborationCard from "./CollaborationCard";
import ProcessCard from "./ProcessCard";
import TimezoneCard from "./TimezoneCard";

import { useGSAP } from "@gsap/react";
import { animateAbout } from "@/components/animations/about";

// sanity type
import { About as AboutType } from "@/sanity/types/about";

interface AboutProps {
  data: AboutType;
}

export default function About({ data }: AboutProps) {

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
    <section ref={sectionRef} className={`bg-black mt-2.5 text-white py-10 px-5 lg:py-[100px] lg:px-[50px] rounded-t-[30px] lg:rounded-t-[50px] ${styles.about}`}>
      <div ref={headerRef}>
        <AboutHeader
          subtitle={data.subtitle}
          title={data.title}
          description={data.description}
        />
      </div>

      <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:mt-20">
          <CollaborationCard
            ref={collaborationRef}
            title={data.collaboration.title}
            subtitle={data.collaboration.subtitle}
            traits={data.collaboration.traits}
          />
          <ProcessCard
            ref={processRef}
            title={data.process.title}
            subtitle={data.process.subtitle}
            steps={data.process.steps}
          />
          <TimezoneCard
            ref={timezoneRef}
            title={data.timezone.title}
            subtitle={data.timezone.subtitle}
            locations={data.timezone.locations}
          />
      </div>
    </section>
  );
}