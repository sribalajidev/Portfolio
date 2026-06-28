import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AboutAnimationProps = {
  section: HTMLElement | null;
  header: HTMLDivElement | null;
  collaboration: HTMLDivElement | null;
  process: HTMLDivElement | null;
  timezone: HTMLDivElement | null;
};

export function animateAbout({
  section,
  header,
  collaboration,
  process,
  timezone,
}: AboutAnimationProps) {
  if (
    !section ||
    !header ||
    !collaboration ||
    !process ||
    !timezone
  )
    return;

  const tl = gsap.timeline({
    scrollTrigger: {
    trigger: section,
    start: "top 70%",
    end: "top 30%",
    scrub: true,
    },
  });

  tl.from(header, {
    opacity: 0,
    y: 60,
    filter: "blur(8px)",
    duration: 2.5,
    ease: "power4.out",
  });

  tl.from(
    [collaboration, process, timezone],
    {
      opacity: 0,
      y: 80,
      stagger: 0.5,
      duration: 2,
      ease: "power4.out",
    },
    "-=0.6"
  );

  return tl;
}