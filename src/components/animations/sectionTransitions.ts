import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionTransitionProps = {
  from: HTMLElement | null;
  to: HTMLElement | null;
};

export function animateSectionTransition({
  from,
  to,
}: SectionTransitionProps) {
  if (!from || !to) return;

  gsap.set(to, {
    scaleY: 0.8,
    transformOrigin: "top center",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: to,
      start: "top bottom",
      end: "top top",
      scrub: true,
      pin: from,
      pinSpacing: false,
      invalidateOnRefresh: true,
    },
  });

  tl.to(
    from,
    {
      scale: 0.9,
      opacity: 0.5,
      filter: "blur(5px)",
      ease: "none",
    },
    0
  );

  tl.to(
    to,
    {
      scaleY: 1,
      ease: "none",
    },
    0
  );
}