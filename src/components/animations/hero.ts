import gsap from "gsap";

type HeroAnimationProps = {
  imageContainer: HTMLDivElement | null;
  image: HTMLDivElement | null;
  badge: HTMLDivElement | null;
  heading: HTMLDivElement | null;
  description: HTMLDivElement | null;
  revealCoverClass: string;
  introTextClass: string;
};

export function animateHero({
  imageContainer,
  image,
  badge,
  heading,
  description,
  revealCoverClass,
  introTextClass
}: HeroAnimationProps) {
  const tl = gsap.timeline();

  const covers = gsap.utils.toArray(heading?.querySelectorAll(`.${revealCoverClass}`) ?? []) as Element[];
  const texts = gsap.utils.toArray(heading?.querySelectorAll(`.${introTextClass}`) ?? []) as Element[];

  tl.from(imageContainer, {
    yPercent: 100,
    duration: 1,
    ease: "power2.out",
  });

  tl.from(image, {
    opacity: 0,
    scale: 1.08,
    duration: 1,
    ease: "power3.out",
  });

  tl.from(badge, {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });
  // Heading reveal
  tl.add("headingReveal");

  covers.forEach((cover, index) => {
    const text = texts[index];

    const lineTl = gsap.timeline();

    lineTl
      // Black strip grows
      .to(cover, {
        scaleX: 1,
        duration: 0.18,
        transformOrigin: "left center",
        ease: "power2.out",
      })

      // Black strip slides away
      .to(cover, {
        xPercent: 100,
        duration: 0.45,
        ease: "power4.inOut",
      })

      // Text rises while strip is leaving
      .from(
        text,
        {
          yPercent: 100,
          duration: 0.45,
          ease: "power4.out",
        },
        "<0.1"
      );

    tl.add(lineTl, `headingReveal+=${index * 0.5}`);
  });

  // Description
  tl.from(
    description,
    {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
      duration: 0.7,
      ease: "power3.out",
    },
    "headingReveal+=0.2"
  );

  return tl;
}