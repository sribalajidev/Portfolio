import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FooterAnimationProps = {
  section: HTMLElement | null;
};

export function animateFooter({
  section,
}: FooterAnimationProps) {
  if (!section) return;

  const content = section.querySelector<HTMLElement>(
    "[data-contact-content]"
  );

  if (!content) return;

  gsap.fromTo(
    content,
    {
      opacity: 0,
      y: 80,
      filter: "blur(20px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: content, // <-- trigger the content itself
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}