"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import styles from "./Hero.module.scss";
import { portfolioData } from "@/data/portfolio";
import { animateHero } from "@/components/animations/hero";

gsap.registerPlugin(useGSAP);

export default function Hero() {

  const { tagline, badge, description, imageSrc, imageAlt } = portfolioData.hero;
  // ref for animation
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    animateHero({
      imageContainer: imageContainerRef.current,
      image: imageRef.current,
      badge: badgeRef.current,
      heading: headingRef.current,
      description: descriptionRef.current,
      revealCoverClass: styles.revealCover,
      introTextClass: styles.introText,
    });
  });
  return (
    <section className={`relative flex justify-center h-[calc(100dvh-80px)] ${styles.hero}`}>
      <div ref={imageContainerRef} className={`relative flex items-end justify-end overflow-hidden ${styles.imageWrapper}`}>
        <div ref={imageRef} className={styles.mainImage}>
          <Image src={imageSrc} alt={imageAlt} width={1179} height={1379} priority/>
        </div>
      </div>

      <div className={`flex items-center justify-between ${styles.contentWrapper}`}>
        <div className={`flex flex-col justify-end ${styles.leftContent}`}>
          <div ref={badgeRef} className={`flex w-fit items-center gap-2.5 bg-[rgb(var(--bg-secondary))] px-3 py-5 ${styles.availableBadge}`}>
            <div className={styles.circleContainer}>
              <div className={styles.circle}></div>
              <div className={`${styles.circlePulse} ${styles.one}`}></div>
              <div className={`${styles.circlePulse} ${styles.two}`}></div>
            </div>
            {badge}
          </div>

          <div ref={headingRef} className={styles.heading}>
            {tagline.map((line, index) => (
              <div key={index} className={styles.line}>
                <div className={styles.revealCover}></div>
                <div className={`font-bold ${styles.introText}`}>{line}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={descriptionRef} className={`flex items-center ${styles.rightContent}`}>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}